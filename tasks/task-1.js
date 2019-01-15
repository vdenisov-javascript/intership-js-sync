/* ЗАДАНИЕ */

// Написать функцию pick(list), где list - массив,
// которая возвращает произвольный элемент из list.

// ######################### //

function pick(list) {

  return list[ parseInt(Math.random() * list.length )];

}

// ######################### //

if (require.main === module) {
  arr = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  console.log(`
    Random data list -> ${ JSON.stringify(arr) }
    Random element -> "${ pick(arr) }"
  `);
}


module.exports = { pick };
