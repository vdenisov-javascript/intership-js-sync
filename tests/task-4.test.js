const assert = require('assert');

describe('Testing "task-4" from "Javacript-Sync"', () => {

  const task4 = require('../tasks/task-4');
  const cats = require('./cats.json');

  it('should return array with "only male cats"', () => {
    const result = task4.getMaleCats(cats.all)
    assert.deepEqual( result, cats.male );
  });

  it('should return array with "only cats` names"', () => {
    const result = task4.getCatsNames(cats.all);
    assert.deepEqual( result, cats.names );
  });

  it('should return array with 5 "oldest male cats"', () => {
    const result = task4.getOldestMaleCats(cats.all);
    assert.deepEqual( result.slice(0, 5), cats['5OldestMale'] );
  });

  it('should return array with 5 "youngest female cats"', () => {
    const result = task4.getYoungestFemaleCats(cats.all);
    assert.deepEqual( result.slice(0, 5), cats['5YoungestFemale'] );
  });

});
