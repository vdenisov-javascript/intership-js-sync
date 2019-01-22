/* ЗАДАНИЕ */

// const list = catsGroupGenerate(999)
// Написать function nameStats(list), которая считает
// распределение объектов по именам, напр:
// {
//   Vasily: 5,
//   Murka: 10
// }

// ######################### //

const helpers = require('./helpers');


function nameStats(list) {

  const [ stats, names ] = [ new Array(), new Object() ];

  list.forEach(element => {
    const name = element.name;
    if (names.includes(name)) {
      stats[name] += 1;
    } else {
      stats[name] = 1;
      names.push(name);
    }
  });

  return stats;

}

// ######################### //

if (require.main === module) {

  const { catsGroupGenerate } = require('./task-3');

  // const list = catsGroupGenerate(999);
  const list = catsGroupGenerate(10);
  helpers.prettyPrintArrayWithTitle('Cats group', list);

  const statistic = nameStats(list);
  helpers.prettyPrintObjectWithTitle('Statistic', statistic);

}


module.exports = { nameStats };
