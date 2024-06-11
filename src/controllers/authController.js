const authController = {};

// REGISTRO DE USUARIOS
authController.register = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: "usuario registrado con exito",
  });
};
// TRATAMIENTO DE DATOS
// tolowercase

// LOGIN DE USUARIOS
app.post(`/api/login`, (req, res) => {
  res.status(200).json({
    success: true,
    message: "usuario logueado con exito",
  });
});
module.exports = authController;
