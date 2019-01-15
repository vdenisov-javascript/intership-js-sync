/* ЗАДАНИЕ */

// Написать function catsGroupGenerate(n), которая возвращает
// массив объектов, полученных из котогенератора, длиной n.

// ######################### //

const { catFactory } = require('./task-2');

function catsGroupGenerate(n) {

  return Array.from({ length: n }, () => catFactory().next().value);

}

// ######################### //

if (require.main === module) {
  let catsGroup = catsGroupGenerate(5);

  console.log(`
    Cats group length => ${ catsGroup.length }
  `);
  for(let i=0; i<catsGroup.length; i++) {
    console.log(JSON.stringify(catsGroup[i]));
  }
  console.log('');
}


module.exports = { catsGroupGenerate };
