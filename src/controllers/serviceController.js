const { Appointment, Service } = require("../models");

const serviceController = {};
//SERVICIOS DE CITAS
serviceController.getAll = async (req, res) => {
  try {
    const services = await Service.findAll();

    res.status(200).json({
      success: true,
      message: "se muestran servicios",
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al mostrat servicios",
      error: error.message,
    });
  }
};

module.exports = serviceController;
