const { describe, it } = require('node:test');
const assert = require('node:assert');
const formatDate = require('../../../src/functions/formatDate');

describe('formatDate()', () => {
  it('should return formatted dates for different months', () => {
    const testCases = [
      { input: '01 JAN', expected: '2025-01-01' },
      { input: '02 FEV', expected: '2025-02-02' },
      { input: '03 MAR', expected: '2025-03-03' },
      { input: '04 ABR', expected: '2025-04-04' },
      { input: '05 MAI', expected: '2025-05-05' },
      { input: '06 JUN', expected: '2025-06-06' },
      { input: '07 JUL', expected: '2025-07-07' },
      { input: '08 AGO', expected: '2025-08-08' },
      { input: '09 SET', expected: '2025-09-09' },
      { input: '10 OUT', expected: '2025-10-10' },
      { input: '11 NOV', expected: '2025-11-11' },
      { input: '12 DEZ', expected: '2025-12-12' },
    ];

    testCases.forEach(({ input, expected }) => {
      const result = formatDate(input);
      assert.equal(result, expected, `Failed for input: ${input}`);
    });
  });
});
