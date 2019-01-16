const assert = require('assert');

describe('Testing "task-5" from "Javacript-Sync"', () => {

  const task5 = require('../tasks/task-5');
  const cats = require('./cats.json');

  it('should return right statistic of "cats` names"', () => {
    const result = task5.nameStats(cats.all);
    const rightStatistic = { 'Пуфик': 12, 'Соник': 10, 'Барсик': 8 };
    assert.deepEqual(result, rightStatistic);
  });

});
