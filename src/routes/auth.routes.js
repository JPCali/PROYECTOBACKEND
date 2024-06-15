const express = require("express");
const router = express.Router();
const control = require("../controllers/authController");

//RUTAS PARA METODOS DE REGISTRO Y LOGIN
router.post("/register", control.register);
router.post("/login", control.login);

module.exports = router;

//me falta la ruta de recuperar contraseña
