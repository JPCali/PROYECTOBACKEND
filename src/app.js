const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("database/db");
const {} = require("./models/index");
const authController = require("./controllers/authController");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

//CREATE USER
app.post("/api/users", authController.create);

//GET ALL USERS
app.get("/api/users", authController.getall);

//SERVER HEALTH CHECK
app.get(
  "/api/healthy",

  (req, res) => {
    res.status(200).json({
      success: true,
      message: "My APP server is healthy",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
