"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      appointments.belongsTo(models.services, {
        as: "service",
        foreignKey: "service_id",
      });
      appointments.belongsTo(models.user, {
        as: "user",
        foreignKey: "user_id",
      });
      // define association here
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
    }
  );
  return appointments;
};
