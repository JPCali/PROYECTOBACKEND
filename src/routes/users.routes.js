const express = require("express");

// ENDPOINTS USUARIOS GET ALL

app.get("/api/users", async (req, res) => {
  const users = await users.findAll();
  res.status(200).json({
    success: true,
    message: "usuarios obtenidos con exito",
    data: users,
  });
});
