const { Router } = require("express");
const {
  getCountries,
  getCountryById,
  getCountriesByName,
} = require("../controllers/countryController");
const { setActivity, getActivity} = require("../controllers/activityController");

// Enrutador
const router = Router();

// routes from Country
router.get("/countries", getCountries);
router.get("/country/:idPais", getCountryById);
router.get("/countries/name?", getCountriesByName);

// routes from Activity
router.post("/activities",setActivity);
router.get("/activities",getActivity);
module.exports = router;
