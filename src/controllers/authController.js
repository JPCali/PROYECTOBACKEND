const authController = {};
const { User, Role } = require("../models");

// REGISTRO DE USUARIOS
authController.create = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  // TRATAMIENTO DE DATOS
  // tolowercase
  await User.create({
    first_name: first_name.toLowerCase(),
    last_name: last_name.toLowerCase(),
    email: email.toLowerCase(),
    password_hash: 1234,
  });

  res.status(201).json({
    success: true,
    message: "usuario registrado con exito",
  });
};

// LOGIN DE USUARIOS
app.post(`/api/login`, (req, res) => {
  res.status(200).json({
    success: true,
    message: "usuario logueado con exito",
  });
});
module.exports = authController;
