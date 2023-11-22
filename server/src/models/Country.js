const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      ID: {
        type: DataTypes.STRING(3),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flagImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continents: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      capital: { type: DataTypes.STRING },
      area: { type: DataTypes.INTEGER },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
