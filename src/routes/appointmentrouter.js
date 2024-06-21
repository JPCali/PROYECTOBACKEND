const express = require("express");
const router = express.Router();
const control = require("../controllers/appointmentcontroller");
const auth = require("../middlewares/auth");

// SE AGREGAN MIDDLEWARES DE CONTROL PARA RUTAS DE CITAS

router.post("/", auth, control.create);
router.put("/", auth, control.update);
router.get("/:id", auth, control.getById);
router.get("/", auth, control.getAll);

module.exports = router;
