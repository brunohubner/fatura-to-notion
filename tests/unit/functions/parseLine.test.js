const { describe, it } = require('node:test');
const assert = require('node:assert');
const parseLine = require('../../../src/functions/parseLine');

describe('parseLine()', () => {
  it('should parse transaction lines correctly', () => {
    const testCases = [
      {
        input: '27 SET Natan Pizzaria 33,00',
        expected: {
          date: '2024-09-27',
          name: 'Natan Pizzaria',
          value: 33.00,
        },
      },
      {
        input: '28 SET Supermercadoanacleto 24,89',
        expected: {
          date: '2024-09-28',
          name: 'Supermercadoanacleto',
          value: 24.89,
        },
      },
      {
        input: '30 SET Pg *Ton Delivery do 17,00',
        expected: {
          date: '2024-09-30',
          name: 'Pg *Ton Delivery do',
          value: 17.00,
        },
      },
    ];

    testCases.forEach(({ input, expected }) => {
      const result = parseLine(input);
      assert.deepStrictEqual(result, expected);
    });
  });

  it('should handle special characters in transaction names', () => {
    const input = '01 OUT Pag*Marianacristina 63,00';
    const expected = {
      date: '2024-10-01',
      name: 'Pag*Marianacristina',
      value: 63.00,
    };

    const result = parseLine(input);
    assert.deepStrictEqual(result, expected);
  });

  it('should handle decimal values with comma or dot', () => {
    const inputWithComma = '28 SET Sorveteria Flocos de N 4.000,00';
    const expected = {
      date: '2024-09-28',
      name: 'Sorveteria Flocos de N',
      value: 4000.00,
    };

    const resultWithComma = parseLine(inputWithComma);

    assert.deepStrictEqual(resultWithComma, expected);
  });
});
