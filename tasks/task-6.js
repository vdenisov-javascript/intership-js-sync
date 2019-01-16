/* ЗАДАНИЕ */

// Модифицировать catFactory() на catFactory(defaults),
// где defaults - опциональный объект со значениями по умолчанию.
// Например, вызов catFactory({'gender': 'M'}) вернет объект
// с произвольными значениями свойств, за исключением 'gender' всегда будет равен 'M'.
// В catsGroupGenerate добавить второй опциональный аргумент 'defaults'.

// ######################### //

const { pick } = require('./task-1');

const variantsFor = {
  name: [ 'Соник', 'Пуфик', 'Барсик' ],
  age: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
  gender: [ 'male', 'female' ],
  legsCount: [ 4 ],
  tailLength: [30, 40, 50],
};

function *catFactory(defaults = {}) {

  const newCat = {
    name:       pick( variantsFor.name ),
    age:        pick( variantsFor.age ),
    gender:     pick( variantsFor.gender ),
    legsCount:  pick( variantsFor.legsCount ),
    tailLength: pick( variantsFor.tailLength ),
  };

  Object.assign(newCat, defaults);
  yield newCat;

}

function catsGroupGenerate(n, defaults = {}) {

  return Array.from({ length: n }, () => catFactory(defaults).next().value);

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

  const catGenerator = catFactory({ gender: 'M' });
  console.log(`\nnew cat ->`);
  console.log(JSON.stringify(catGenerator.next().value));

  const catsGroup = catsGroupGenerate(5, { name: 'Mysterio' });
  prettyPrint('Cats group', catsGroup);

}


module.exports = {
  catFactory,
  catsGroupGenerate
};
