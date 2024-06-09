"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    static associate(models) {
      services.hasMany(models.appointment, {
        as: "appointments",
        foreignKey: "id_service",
      });
    }
  }
  services.init(
    {
      id: DataTypes.INTEGER,
      services_name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "services",
    }
  );
  return services;
};
