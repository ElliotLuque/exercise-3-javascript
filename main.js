import { months, weather_data } from "./resources/weather_data.js";
import { players, player_data } from "./resources/player_data.js";
import { countries, countries_data } from "./resources/countries_data.js";

import { chartBuilder } from "./modules/chart_builder.js";

document.addEventListener("DOMContentLoaded", () => {
  chartBuilder("lineas", months, [weather_data.maxWeather, weather_data.avgWeather, weather_data.minWeather], "line");
  chartBuilder("barras", players, [player_data] , "bar");
  chartBuilder("circulo", countries, [countries_data], "doughnut");
});
