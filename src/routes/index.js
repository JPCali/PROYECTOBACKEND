const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./users.routes");
const appointmentRoutes = require("./appointments.routes");
const servicesRoutes = require("./services.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/services", servicesRoutes);

module.exports = router;
