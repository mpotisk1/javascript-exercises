const convertToCelsius = function(tempF) {
  //subtract 32, multiply by 5/9ths
  let cToF = 5 / 9
  let temp = (tempF - 32) * cToF
  const roundTemp = Math.round(temp*10) / 10

  return roundTemp

};

const convertToFahrenheit = function(tempC) {
  //multiply by 9/5ths, add 32
let cToF = 9 / 5
let temp = tempC * cToF + 32
const roundTemp = Math.round(temp*10) / 10

return roundTemp

};
convertToCelsius(100)
convertToFahrenheit(100)
// Do not edit below this line

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
