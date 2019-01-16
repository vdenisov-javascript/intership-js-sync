const assert = require('assert');


describe('Testing "task-6" from "Javacript-Sync"', () => {

  const task6 = require('../tasks/task-6');

  it('should return cat with updated "gender"', () => {
    const generator = task6.catFactory({ gender: 'XXX' });
    const randomCat = generator.next().value;

    assert.equal( randomCat.gender, 'XXX' );
  });

  it('should return group of cats with updated "name"', () => {
    const correctSize = 5;
    const result = task6.catsGroupGenerate(correctSize, { name: 'Pikachu' });
    const resultSize = result.filter(cat => cat.name === 'Pikachu').length;

    assert.equal( resultSize, correctSize );
  });

});
