"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class appointments extends Model {
    static associate(models) {
      appointments.belongsTo(models.services, {
        as: "service",
        foreignKey: "service_id",
      });
      appointments.belongsTo(models.users, {
        as: "user",
        foreignKey: "user_id",
      });
    }
  }
  appointments.init(
    {
      appointments_date: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "appointments",
      tableName: "appointments",
    }
  );
  return appointments;
};
