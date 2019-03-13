/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const d = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM'],
  ]

  return (
    d[3][Math.floor(num / 1000)] +
    d[2][Math.floor(num / 100) % 10] +
    d[1][Math.floor(num / 10) % 10] +
    d[0][num % 10]
  )
}

module.exports = intToRoman
