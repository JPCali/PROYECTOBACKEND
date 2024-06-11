const express = require("express");

// ENDPOINTS USUARIOS GET ALL

app.get("/api/users.routes", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "usuarios obtenidos con exito",
  });
});
