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
  return list
    .filter(cat => cat.gender === 'male')
    .sort(sortBy('age', reverse = true))
    .slice(0, n);
}

function getYoungestFemaleCats(list, n) {
  return list
    .filter(cat => cat.gender === 'female')
    .sort(sortBy('age', reverse = false))
    .slice(0, n);
}

// help function
// => sort an array of objects by key with the ability to reverse it
function sortBy(key, reverse) {
  // copied from Stack Overflow:
  // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value#answer-23385176

  /*
    Move smaller items towards the front or back of the array
    depending on if we want to sort the array in reverse order or not.
  */
  const moveSmaller = reverse ? 1 : -1;

  /*
    Move larger items towards the front or back of the array
    depending on if we want to sort the array in reverse order or not.
  */
  const moveLarger = reverse ? -1 : 1;

  return function (secondItem, firstItem) {
    if (secondItem[key] < firstItem[key]) return moveSmaller;
    if (secondItem[key] > firstItem[key]) return moveLarger;
    return 0;
  }
}

// help function
// => pretty print of array and title for it
function prettyPrint(title, data) {
  console.log(`\n ##### ${title} ##### \n`);
  for(let i=0; i<data.length; i++) {
    console.log(JSON.stringify(data[i]));
  }
}

// ######################### //

if (require.main === module) {

  const { catsGroupGenerate } = require('./task-3');

  // const list = catsGroupGenerate(999);
  let list = catsGroupGenerate(30);
  prettyPrint('All cats', list);

  let maleCats = getMaleCats(list);
  prettyPrint('Male cats', maleCats);

  let catsNames = getCatsNames(list);
  console.log(`\n ##### Cats' names ##### \n`);
  console.log(JSON.stringify(catsNames));

  let oldestMaleCats = getOldestMaleCats(list, 5);
  prettyPrint('Oldest male cats', oldestMaleCats);

  let youngestFemaleCats = getYoungestFemaleCats(list, 5);
  prettyPrint('Youngest female cats', youngestFemaleCats);

  console.log('');

}

module.exports = { 
  getMaleCats,
  getCatsNames,
  getOldestMaleCats,
  getYoungestFemaleCats
};
