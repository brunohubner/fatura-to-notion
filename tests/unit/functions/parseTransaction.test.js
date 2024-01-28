const { describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const parseTransaction = require('../../../src/functions/parseTransaction');

describe('parseTransaction()', () => {
  it('should parse transaction data from file correctly', () => {
    const mockFileContent = `27 SET Natan Pizzaria 33,00
      28 SET Supermercadoanacleto 24,89
      30 SET Pg *Ton Delivery do 17,00
      01 OUT Pag*Marianacristina 63,00
      02 OUT Solucoe*Posto de Combu 50,00`;

    const mockReadFileSync = () => mockFileContent;
    const originalReadFileSync = fs.readFileSync;
    fs.readFileSync = mockReadFileSync;
    const result = parseTransaction();
    fs.readFileSync = originalReadFileSync;

    const expected = [
      { date: '2024-09-27', name: 'Natan Pizzaria', value: 33.00 },
      { date: '2024-09-28', name: 'Supermercadoanacleto', value: 24.89 },
      { date: '2024-09-30', name: 'Pg *Ton Delivery do', value: 17.00 },
      { date: '2024-10-01', name: 'Pag*Marianacristina', value: 63.00 },
      { date: '2024-10-02', name: 'Solucoe*Posto de Combu', value: 50.00 },
    ];

    assert.deepStrictEqual(result, expected);
  });
});
