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

function getMaleCats(list) {
  return list.filter(cat => cat.gender === 'male');
}

function getCatsNames(list) {
  return list.map(cat => cat.name);
  // return Array.from(list, cat => cat.name);
}

function getOldestMaleCats(list, n) {
  const maleCats = list.filter(cat => cat.gender === 'male');
  const maxAge = Math.max( ...maleCats.map(cat => cat.age) );
  const oldestMaleCats = maleCats.filter(cat => cat.age === maxAge);
  return oldestMaleCats.slice(0, n);
}

function getYoungestFemaleCats(list, n) {
  const femaleCats = list.filter(cat => cat.gender === 'female');
  const minAge = Math.min( ...femaleCats.map(cat => cat.age) );
  const youngestMaleCats = femaleCats.filter(cat => cat.age === minAge);
  return youngestMaleCats.slice(0, n);
}

// ######################### //

if (require.main === module) {

  const { catsGroupGenerate } = require('./task-3');

  function prettyPrint(title, data) {
    console.log(`\n ##### ${title} ##### \n`);
    for(let i=0; i<data.length; i++) {
      console.log(JSON.stringify(data[i]));
    }
  }

  // const list = catsGroupGenerate(999);
  let list = catsGroupGenerate(30);
  prettyPrint('All cats', list);

  let maleCats = getMaleCats(list);
  prettyPrint('Male cats', maleCats);

  let catsNames = getCatsNames(list);
  prettyPrint('Cats` names', JSON.stringify(catsNames));

  let oldestMaleCats = getOldestMaleCats(list, 2);
  prettyPrint('Oldest male cats', oldestMaleCats);

  let youngestFemaleCats = getYoungestFemaleCats(list, 2);
  prettyPrint('Youngest female cats', youngestFemaleCats);

  console.log('');

}

module.exports = { 
  getMaleCats,
  getCatsNames,
  getOldestMaleCats,
  getYoungestFemaleCats
};
