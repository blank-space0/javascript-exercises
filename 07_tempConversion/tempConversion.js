const convertToCelsius = function(curr) {
  var ans = (curr - 32) * (5/9)
  return Math.round(ans * 1e1) / 1e1;
};

const convertToFahrenheit = function(curr) {
  var ans = (curr * (9/5) + 32)
  return Math.round(ans * 1e1 ) / 1e1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
