// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class roles extends Model {
//     static associate(models) {
//       Role.hasMany(models.User, {
//         as: "users",
//         foreignKey: "role_id",
//       });
//     }
//   }
// }
// roles.init(
//   { name: DataTypes.STRING },
//   {
//     sequelize,
//     modelName: "roles",
//   }
// );
// return roles;
// };

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.hasMany(models.User, {
        as: "users",
        foreignKey: "role_id",
      });
    }
  }
  roles.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "roles",
      tableName: "roles",
    }
  );
  return roles;
};
