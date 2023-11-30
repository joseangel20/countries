const validacionDatosActivity = (name,hinders,season,idPaises) => {
  let errorMessage = "";
  const SEASON = ["Verano", "Otoño", "Invierno", "Primavera"];

  if (!/[A-Z]{1,}/i.test(name))
    // Validando solo texto con expresion regular
    errorMessage = "El nombre es obligatorio, debe ser un texto";
  else if (typeof hinders !== "number")
    errorMessage =
      "El valor de la dificultad debe ser un valor númerico entre el 1 y el 5 incluidos.";
  else if (hinders < 1 || hinders > 5)
    errorMessage =
      "La dificultad es un valor obligatorio, un número entre el 1 y el 5 incluidos.";
  else if (!SEASON.includes(season))
    errorMessage =
      "La temporada es un valor obligatorio, ex:(Verano, Otoño, Invierno, Primavera)";
  else if (!Array.isArray(idPaises) || idPaises.length === 0)
    errorMessage =
      "El idPais es obligatorio, debes enviar el id del país o los ids de los paises asociadios a la activida, como un arreglo";

  for (let id of idPaises) {
    if (!/[A-Z]{3}/i.test(id)) {
      errorMessage = "El id debe contener tres (3) letras, ex:DOM";
      break;
    }
  }
  return errorMessage;
};

module.exports=validacionDatosActivity;