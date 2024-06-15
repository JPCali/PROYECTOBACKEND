const authController = {};
const { User, Role } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTRAR UN USUARIO
authController.register = async (req, res) => {
  try {
    const { first_name, last_name, email, password, role_id } = req.body;

    if (!first_name || !last_name || !email || !password || role_id) {
      return res.status(400).json({
        success: true,
        message: "error al registrarse",
      });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    await User.create({
      first_name,
      last_name,
      email,
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
      message: "error al registrarse",
      error: error.message,
    });
  }
};

//LOGUEARSE CON UN USUAROI
authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: true,
        message: "Introduzca su e-mail y contraseña",
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
      return res.status(400).json({
        success: true,
        message: "usuario incorrecto",
      });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: true,
        message: "password incorrecto",
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
      message: "Login correcto",
      token,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Login incorrecto",
      error: error.message,
    });
  }
};

module.exports = authController;
