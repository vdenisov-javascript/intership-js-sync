/* ЗАДАНИЕ */

// Написать котогенератор function catFactory(),
// которая возвращает объект со свойствами:
// •	name 
// •	age
// •	gender
// •	legsCount
// •	tailLength
// Значения - произвольные из набора, который вы сами зададите.
// Используйте функцию pick из предыдущего задания.

/// !!! добавить свойство ‘loudness’ в реализацию catFactory !!!

// ######################### //

const { pick } = require('./task-1');
const helpers = require('./helpers');


const variantsFor = {
  name: [ 'Соник', 'Пуфик', 'Барсик' ],
  age: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
  gender: [ 'male', 'female' ],
  legsCount: [ 4 ],
  tailLength: [30, 40, 50],

  loudness: [ '25 Гц', '50 Гц', '75 Гц', '100 Гц', '125 Гц', '150 Гц' ]
};

function *catFactory() {

  yield {
    name:       pick( variantsFor.name ),
    age:        pick( variantsFor.age ),
    gender:     pick( variantsFor.gender ),
    legsCount:  pick( variantsFor.legsCount ),
    tailLength: pick( variantsFor.tailLength ),

    loudness:   pick( variantsFor.loudness )
  };

}

// ######################### //

if (require.main === module) {
  const catGenerator = catFactory();

  helpers.prettyPrintObjectWithTitle('New cat', catGenerator.next().value);
}


module.exports = { catFactory };
