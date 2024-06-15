const { Appointment, Service } = require("../models");

const serviceController = {};

serviceController.getAll = async (req, res) => {
  try {
    const services = await Service.findAll();

    res.status(200).json({
      success: true,
      message: "ver todos los servicois",
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al mostrar servicios",
      error: error.message,
    });
  }
};

module.exports = serviceController;
