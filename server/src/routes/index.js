const { Router } = require("express");
const {
  getCountries,
  getCountryById,
  getCountriesByName,
} = require("../controllers/countryController");

const router = Router();

// routes from Country
router.get("/countries", getCountries);
router.get("/country/:idPais", getCountryById);
router.get("/countries/name?", getCountriesByName);

module.exports = router;
