const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hinders: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
      duration: { type: DataTypes.INTEGER },
      Season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
