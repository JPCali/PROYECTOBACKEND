const { User } = require("../models");
const bcrypt = require("bcryt");

const userController = {};

//OBTENER TODOS LOS USUARIOS
userController.getAll = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["createAd", "uptadeAd", "password"] },
    });
    res.status(200).json({
      success: true,
      message: "se muestran todos los usuarios",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error, no se pudieron obtener los usuarios",
      error: error.message,
    });
  }
};

//LEVANTAR UN USUARIO POR userId
userController.getUserProfile = async (req, res) => {
  const userId = req.tokenData.userId;

  try {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
    });

    res.status(200).json({
      success: true,
      message: "Viendo perfil usuario",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al ver perfil usuario",
      error: error.message,
    });
  }
};

//ACTUALIZAR UN USUARIO POR userId
userController.updateUserProfile = async (req, res) => {
  const userId = req.tokenData.userId;
  const { password, role_id, ...restUserData } = req.body;

  try {
    const userToUpdate = await User.findByPk(userId);

    if (!userToUpdate) {
      return res.status(404).json({
        success: true,
        message: "usuario no encontraod",
      });
    }

    if (password) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      userToUpdate.password = hashedPassword;
    }

    userToUpdate.set({
      ...userToUpdate,
      ...restUserData,
    });

    await userToUpdate.save();

    res.status(200).json({
      success: true,
      message: "usuario actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error al actualizar usuario",
      error: error.message,
    });
  }
};

//ELIMINAR UN USUARIO POR userId
userController.delete = async (req, res) => {
  const userId = req.params.id;

  try {
    const deleteResult = await User.destroy({
      where: {
        id: userId,
      },
    });

    if (deleteResult === 0) {
      return res.status(404).json({
        success: true,
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      message: "Usuario eliminado",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar",
      error: error.message,
    });
  }
};

module.exports = userController;
