const assert = require('assert');

describe('Testing "task-3" from "Javacript-Sync"', () => {

  const task3 = require('../tasks/task-3');

  it('should return array with correct length', () => {
    const correctLength = 7;
    const result = task3.catsGroupGenerate(correctLength);
    assert.equal( result.length, correctLength );
  });

});
