const assert = require('assert');


describe('Testing "loudness" from "Code Testing"', () => {

  const loudness = require('../tasks/loudness');

  it('should return object with permanent keys', () => {
    const generator = loudness.catFactory();
    const result = generator.next().value;
    const correctKeys = [ 'name', 'age', 'gender', 'legsCount', 'tailLength', 'loudness' ];

    assert.deepEqual( Object.keys(result), correctKeys );
  });

});
