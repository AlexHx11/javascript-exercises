const convertToCelsius = function(tempF) {
  const tempC = (tempF - 32) * 5 / 9;
  const roundFactor = Math.pow(10, 1);
  return Math.round(tempC * roundFactor) / roundFactor;
};

const convertToFahrenheit = function(tempC) {
  const tempF = (tempC * 1.8) + 32;
  const roundFactor = Math.pow(10, 1);
  return Math.round(tempF * roundFactor) / roundFactor;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
