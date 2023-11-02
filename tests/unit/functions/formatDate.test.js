// use nodejs native test runner;

const { describe, it } = require('node:test');
const assert = require('node:assert');
const formatDate = require('../../../src/functions/formatDate');

describe('formatDate()', () => {
  it('should return a date in the format YYYY-MM-DD', () => {
    const date = '01 JAN';
    const result = formatDate(date);
    const expected = '2023-01-01';
    assert.equal(result, expected);
  });
});
