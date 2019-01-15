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

// ######################### //

const { pick } = require('./task-1');

const variantsFor = {
  name: [ 'Соник', 'Пуфик', 'Барсик' ],
  age: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
  gender: [ 'male', 'female' ],
  legsCount: [ 4 ],
  tailLength: [30, 40, 50],
};

function *catFactory() {

  yield {
    name:       pick( variantsFor.name ),
    age:        pick( variantsFor.age ),
    gender:     pick( variantsFor.gender ),
    legsCount:  pick( variantsFor.legsCount ),
    tailLength: pick( variantsFor.tailLength ),
  };

}

// ######################### //

if (require.main === module) {
  const catGenerator = catFactory();

  console.log(`\nnew cat -> ${
    JSON.stringify(catGenerator.next().value)
  }\n`);
}


module.exports = { catFactory };
