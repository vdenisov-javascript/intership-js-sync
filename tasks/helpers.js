// help function
// => sort an array of objects by key with the ability to reverse it
function sortArrayOfObjectsByKey(key, reverse) {
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
function prettyPrintArrayWithTitle(title, arr) {
  console.log(`\n ##### ${title} ##### \n`);
  for(let i = 0; i < arr.length; i++) {
    console.log(JSON.stringify(arr[i]));
  }
}

// help function
// => pretty print of object and title for it
function prettyPrintObjectWithTitle(title, object) {
  console.log(`\n ##### ${title} ##### \n`);
  console.log(`${JSON.stringify(object)}\n`);
}


module.exports = {
  sortArrayOfObjectsByKey,

  prettyPrintArrayWithTitle,
  prettyPrintObjectWithTitle
};
