const express = require("express");
const router = express.Router();
const control = require("../controllers/userscontrollers");
const auth = require("../middlewares/auth");
const authorize = require("../middlewares/authorize");

//FALTAN AUTORIZACIONES DE ROUTER.GET PARA getAll

router.get("/", auth, control.getAll);
router.get("/profile", auth, control.getUserProfile);
router.put("/profile,", auth, control.updateUserProfile);
router.delete("/:id", auth, authorize("super-admin"), control.delete); //ORDEN CORREGIDO DE RUTA MIDDLEWARE

module.exports = router;
