const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      // ID: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV1,
      //   primaryKey: true,
      // },
      // idActivity: {
      //   type: DataTypes.INTEGER,
      //   // primaryKey: true,
      //   // autoIcrement:true
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hinders: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
      duration: { type: DataTypes.INTEGER },
      season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
