const convertToCelsius = function (temp) {
  let celsius = (temp - 32) / (9 / 5);
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function (temp) {
  let fahrenheit = (9 / 5) * temp + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
