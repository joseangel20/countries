const { Activity, CountryActivities } = require("../db");
const validacionDatosActivity = require("../utils/validacionDatosActivity");

const getActivity = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).send(activities);
  } catch (error) {
    res.status(404).send({ error: "No se encontraron actividades." });
  }
};

const setActivity = async (req, res) => {
  const { name, hinders, duration, season, idPaises } = req.body;

  const errorMessage = validacionDatosActivity(name, hinders, season, idPaises);

  if (errorMessage) res.status(400).send({ error: errorMessage });
  else {
    try {
      await Activity.create({ name, hinders, duration, season });

      const activities = await Activity.findAll();
      const COUNA_CTIVITIES = activities.length;

      for (let id of idPaises) {
        let may = id.toUpperCase();
        CountryActivities.create({
          CountryID: may,
          ActivityId: COUNA_CTIVITIES,
        });
      }
      res.status(200).send({ response: "Datos recibidos correctamente." });
    } catch (error) {
      res.status(404).send({ error: "No se pudo agregar la activida." });
    }
  }
};

module.exports = { getActivity, setActivity };
