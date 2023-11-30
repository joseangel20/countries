const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: false })
  .then(async () => {
    const countries = await Country.findAll();

    if (countries.length == 0) {
      const response = await axios("http://localhost:5000/countries");

      for (let country of response.data) {
        const {
          cca3,
          name,
          flags,
          continents,
          capital,
          subregion,
          area,
          population,
        } = country;

        const auxCountry = {
          ID: cca3,
          name: name.common,
          flag: flags.svg,
          continent: continents[0],
          capital: capital ? capital[0] : "",
          subregion,
          area,
          population: population,
        };

        Country.create(auxCountry);
      }
    }

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
