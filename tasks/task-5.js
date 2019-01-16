/* ЗАДАНИЕ */

// const list = catsGroupGenerate(999)
// Написать function nameStats(list), которая считает
// распределение объектов по именам, напр:
// {
//   Vasily: 5,
//   Murka: 10
// }

// ######################### //

function nameStats(list) {

  const stats = {}
  list.forEach(element => {
    const name = element.name;
    Object.keys(stats).includes(name) ? stats[name] += 1 : stats[name] = 1;
  });
  return stats;

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
  const list = catsGroupGenerate(10);
  prettyPrint('Cats group', list);

  const statistic = nameStats(list);
  console.log(`\n ##### Statistic ##### \n`);
  console.log(JSON.stringify(statistic));

}


module.exports = { nameStats };
