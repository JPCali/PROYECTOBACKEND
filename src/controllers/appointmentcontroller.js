const { Appointment, User, Service } = require("../models");

const appointmentController = {};

//REGISTRO DE CITAS
appointmentController.create = async (req, res) => {
  const { id, appointment_date, user_id, service_id } = req.body;

  try {
    if (!id || !appointment_date || !user_id || !service_id) {
      return res.status(400).json({
        success: true,
        message: "Campos incompletos o incorrectos",
      });
    }

    await Appointment.create({
      id,
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
      message: "Error al crear cita",
      error: error.message,
    });
  }
};

// MODIFICACION DE CITAS
appointmentController.update = async (req, res) => {
  console.log("updated");
  const appointmentId = req.params.id;
  const appointmentData = req.body;

  try {
    await Appointment.update(appointmentData, {
      where: {
        id: appointmentId,
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

  try {
    const appointment = await Appointment.findByPk(appointmentId, {
      include: [
        { model: User, as: "users" },
        { model: Service, as: "services" },
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "author_id"] },
    });
    if (!appointment) {
      return res.status(404).json({
        success: true,
        message: "No se encontro cita",
      });
    }

    res.status(200).json({
      success: true,
      message: "Esta es su cita",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "no se pudo encontrar la cita",
      error: error.message,
    });
  }
};
// VER TODAS LAS CITAS
appointmentController.getAll = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();

    res.status(200).json({
      success: true,
      message: "Se muestran citas",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al mostrar las citas",
      error: error.message,
    });
  }
};

module.exports = appointmentController;
