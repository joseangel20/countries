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
      const hisActivity = await country.getActivities();

      res.status(200).send({ ...country.dataValues, hisActivity });
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
    res.status(400).send({ error: "No se hay elementos." });
  }
};

module.exports = {
  getCountries,
  getCountryById,
  getCountriesByName,
};
