const assert = require('assert');

describe('Testing "task-1" from "Javacript-Sync"', () => {

  const task1 = require('../tasks/task-1');

  it('should return random element from non-empty array', () => {
    const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const randomElement = task1.pick(data);
    assert.equal( data.indexOf(randomElement) > -1, true );
  });

  it('should return "undefined" from empty array', () => {
    const data = [];
    const randomElement = task1.pick(data);
    assert.equal( randomElement, undefined );
  });

});
