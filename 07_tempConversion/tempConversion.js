const convertToCelsius = function (temp) {
  let result = 0;
  result = (temp - 32) / 1.8;
  result = Math.round(result * 10) / 10
  return result;
};

const convertToFahrenheit = function (temp) {
  let result = 0;
  result = (temp * 1.8) + 32;
  result = Math.round(result * 10) / 10
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
