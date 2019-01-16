/* ЗАДАНИЕ */

// Написать function catsGroupGenerate(n), которая возвращает
// массив объектов, полученных из котогенератора, длиной n.

// ######################### //

const { catFactory } = require('./task-2');
const helpers = require('./helpers');


function catsGroupGenerate(n) {

  return Array.from({ length: n }, () => catFactory().next().value);

}

// ######################### //

if (require.main === module) {
  const catsGroup = catsGroupGenerate(5);

  helpers.prettyPrintArrayWithTitle('Cats group', catsGroup);
}


module.exports = { catsGroupGenerate };
