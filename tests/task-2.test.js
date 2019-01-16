const assert = require('assert');

describe('Testing "task-2" from "Javacript-Sync"', () => {

  const task2 = require('../tasks/task-2');

  it('should return object with permanent keys', () => {
    const generator = task2.catFactory();
    const result = generator.next().value;
    const correctKeys = [ 'name', 'age', 'gender', 'legsCount', 'tailLength' ];
    assert.deepEqual( Object.keys(result), correctKeys );
  });

});
