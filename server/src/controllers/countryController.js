const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountriesByName = async (req, res) => {
  const { v } = req.query;

  const countries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `${v}%`,
      },
    },
  });
  if (countries.length > 0) res.status(200).send(countries);
  else res.status(404).send({ error: "No se encontraron elementos" });
};

const getCountryById = async (req, res) => {
  let idPais = req.params.idPais.toUpperCase();

  if (typeof idPais === "string" && idPais.length === 3) {
    try {
      const country = await Country.findByPk(idPais);

      // Se obtiene las actividades asociadas al país
      const activities = await country.getActivities();
      const activitiesContry = [];

      // Se filtra las propiedades a enviar al cliente y se agrega
      // en el arreglo activitiesContry
      for (activity of activities) {
        const { name, hinders, duration, season } = activity;
        activitiesContry.push({ name, hinders, duration, season });
      }

      res
        .status(200)
        .send({ ...country.dataValues, activities: activitiesContry });
    } catch (error) {
      res.status(404).send({ error: "El país no fue encontrado" });
    }
    return;
  }

  res.status(400).send({
    error:
      "El identificador del país no es valido. ejm de identificador valido: [dom]",
  });
};

const getCountries = async (req, res) => {
  try {
    const response = await Country.findAll();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ error: "No se encontraron elementos." });
  }
};

module.exports = {
  getCountries,
  getCountryById,
  getCountriesByName,
};
