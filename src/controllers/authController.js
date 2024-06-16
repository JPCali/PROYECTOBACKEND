const { User, Role } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTRO DE USUARIOS
const authController = {};
authController.register = async (req, res) => {
  try {
    const { first_name, last_name, email, password, role_id } = req.body;
    // TRATAMIENTO DE DATOS
    // tolowercase
    if (!first_name || !last_name || !email || !password || role_id) {
      return res.status(400).json({
        success: true,
        message: "Campos de registro incorrectos",
      });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    await User.create({
      first_name: first_name.toLowerCase(),
      last_name: last_name.toLowerCase(),
      email: email.toLowerCase(),
      password: hashedPassword,
      role_id: 1,
    });
    res.status(200).json({
      sucess: true,
      message: "Usuario registrado con exito",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error registrando usuario",
      error: error.message,
    });
  }
};
//LOGIN DE USUARIO
authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: true,
        message: "Introduzca su email y contraseña",
      });
    }

    const user = await User.findOne({
      include: [
        {
          model: Role,
          as: "role",
        },
      ],
      where: { email },
    });
    if (!user) {
      return res.status(404).json({
        success: true,
        message: "datos incorrectos",
      });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).json({
        success: true,
        message: "datos incorrectos",
      });
    }
    const tokenPayload = {
      userId: user.id,
      userRoleName: user.role.name,
    };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({
      success: true,
      message: "Usuario Logueado",
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error de Login",
      error: error.message,
    });
  }
};

module.exports = authController;
