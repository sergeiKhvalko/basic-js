const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
//   throw new NotImplementedError('Not implemented');
  
  let countCats = 0;

  matrix.map(item => {
	  item.forEach(el => {
		  if(el === '^^') countCats++;
	  })
  })

  return countCats;
}

module.exports = {
  countCats
};
