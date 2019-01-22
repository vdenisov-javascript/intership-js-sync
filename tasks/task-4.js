/* ЗАДАНИЕ */

// const list = catsGroupGenerate(999)
// Написать функции, которые принимая list вернут массив:
// •	котов
// •	имен
// •	n самых старых котов (функция также принимает
//     параметр n - максимальный размер результата)
// •	имен n самых молодых кошек (функция также принимает
//     параметр n - максимальный размер результата)

// ######################### //

const helpers = require('./helpers');


function getMaleCats(list) {
  return list.filter(cat => cat.gender === 'male');
}

function getCatsNames(list) {
  return list.map(cat => cat.name);
  // return Array.from(list, cat => cat.name);
}

function getOldestMaleCats(list, n) {
  return list
    .filter(cat => cat.gender === 'male')
    .sort( helpers.sortArrayOfObjectsByKey('age', true) )
    .slice(0, n);
}

function getYoungestFemaleCats(list, n) {
  return list
    .filter(cat => cat.gender === 'female')
    .sort( helpers.sortArrayOfObjectsByKey('age', false) )
    .slice(0, n);
}

// ######################### //

if (require.main === module) {

  const { catsGroupGenerate } = require('./task-3');

  // const list = catsGroupGenerate(999);
  const list = catsGroupGenerate(30);
  helpers.prettyPrintArrayWithTitle('All cats', list);

  const maleCats = getMaleCats(list);
  helpers.prettyPrintArrayWithTitle('Male cats', maleCats);

  const catsNames = getCatsNames(list);
  helpers.prettyPrintArrayWithTitle('Cats` names', catsNames);

  const oldestMaleCats = getOldestMaleCats(list, 5);
  helpers.prettyPrintArrayWithTitle('Oldest male cats', oldestMaleCats);

  const youngestFemaleCats = getYoungestFemaleCats(list, 5);
  helpers.prettyPrintArrayWithTitle('Youngest female cats', youngestFemaleCats);

  console.log('');

}


module.exports = { 
  getMaleCats,
  getCatsNames,
  getOldestMaleCats,
  getYoungestFemaleCats
};
