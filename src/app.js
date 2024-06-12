const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database/db");
const { users } = require("./models");
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get(
  "/api/healthy",

  (req, res) => {
    res.status(200).json({
      success: true,
      message: "My APP server is healthy",
    });
  }
);

app.get("/api/users", async (req, res) => {
  const users = await users.findAll();
  res.status(200).json({
    success: true,
    message: "usuarios obtenidos con exito",
    users,
  });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅Connection has been established successfully.");

    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch(() => {
    console.error("🤬 error authenticating database");
  });
