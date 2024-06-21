const { Appointment, User, Service } = require("../models");

const appointmentController = {};

//REGISTRO DE CITAS ---------------- SE PASA FUNCION PARA USUARIO AUTENTICADO ----------------
appointmentController.create = async (req, res) => {
  const { appointment_date, service_id } = req.body;
  const user_id = req.tokenData.userId;

  try {
    if (!appointment_date || !user_id || !service_id) {
      return res.status(400).json({
        success: true,
        message: "Campos incompletos o incorrectos",
      });
    }

    await Appointment.create({
      appointment_date,
      user_id,
      service_id,
    });

    res.status(200).json({
      success: true,
      message: "Se agenda cita correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "la cita no pudo ser creada, intentelo nuevamente",
      error: error.message,
    });
  }
};

// MODIFICACION DE CITAS
appointmentController.update = async (req, res) => {
  const appointmentId = req.params.id;
  const appointmentData = req.body;
  const user_id = req.tokenData.userId;

  try {
    const appointment = await Appointment.findByPk(appointmentId);
    if (!appointment) {
      return res.status(404).json({
        success: true,
        message: "No se encontro cita",
      });
    }
    if (appointment.user_id !== user_id) {
      return res.status(404).json({
        success: true,
        message: "Unauthorized access",
      });
    }

    await Appointment.update(appointmentData, {
      where: {
        id: appointmentId,
        user_id: user_id,
      },
    });

    res.status(200).json({
      success: true,
      message: "se modifica cita correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al modificar la cita",
      error: error.message,
    });
  }
};

//  BUSCAR LA CITA POR ID
appointmentController.getById = async (req, res) => {
  const appointmentId = req.params.id;
  const user_id = req.tokenData.userId;

  try {
    const appointment = await Appointment.findByPk(appointmentId, {
      include: [
        { model: User, as: "users" },
        { model: Service, as: "services" },
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "service_id"] },
    });
    if (!appointment) {
      return res.status(404).json({
        success: true,
        message: "No se encontro cita",
      });
    }

    if (!appointment.user_id !== user_id) {
      return res.status(404).json({
        success: true,
        message: "Unauthorized access",
      });
    }

    res.status(200).json({
      success: true,
      message: "Esta es su cita",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "no se pudo encontrar la cita",
      error: error.message,
    });
  }
};

//  BUSCAR TODAS LAS CITAS DEL USUARIO
appointmentController.getAll = async (req, res) => {
  const user_id = req.tokenData.userId;
  try {
    const appointments = await Appointment.findAll({
      where: { user_id },
    });

    res.status(200).json({
      success: true,
      message: "Ver citas",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al ver citas",
      error: error.message,
    });
  }
};

module.exports = appointmentController;
