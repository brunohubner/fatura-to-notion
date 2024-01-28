const { describe, it } = require('node:test');
const assert = require('node:assert');
const generateNotionData = require('../../../src/functions/generateNotionData');

describe('generateNotionData()', () => {
  it('should generate Notion data from given input', () => {
    const inputData = [
      { date: '2024-09-27', name: 'Natan Pizzaria', value: 33.00 },
      { date: '2024-09-28', name: 'Supermercadoanacleto', value: 24.89 },
      { date: '2024-09-30', name: 'Pg *Ton Delivery do', value: 17.00 },
      { date: '2024-10-01', name: 'Pag*Marianacristina', value: 63.00 },
      { date: '2024-10-02', name: 'Solucoe*Posto de Combu', value: 50.00 },
    ];

    const expectedOutput = [
      {
        Data: {
          type: 'date',
          date: {
            start: '2024-09-27',
          },
        },
        Método: {
          type: 'select',
          select: {
            name: 'Crédito',
          },
        },
        Pago: {
          type: 'checkbox',
          checkbox: true,
        },
        'Conta/Origem': {
          type: 'select',
          select: {
            name: 'Nubank',
          },
        },
        Valor: {
          type: 'number',
          number: 33,
        },
        Relevância: {
          type: 'select',
          select: {
            name: 'Essencial',
          },
        },
        Despesa: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: 'Natan Pizzaria',
              },
            },
          ],
        },
      },
      {
        Data: {
          type: 'date',
          date: {
            start: '2024-09-28',
          },
        },
        Método: {
          type: 'select',
          select: {
            name: 'Crédito',
          },
        },
        Pago: {
          type: 'checkbox',
          checkbox: true,
        },
        'Conta/Origem': {
          type: 'select',
          select: {
            name: 'Nubank',
          },
        },
        Valor: {
          type: 'number',
          number: 24.89,
        },
        Relevância: {
          type: 'select',
          select: {
            name: 'Essencial',
          },
        },
        Despesa: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: 'Supermercadoanacleto',
              },
            },
          ],
        },
      },
      {
        Data: {
          type: 'date',
          date: {
            start: '2024-09-30',
          },
        },
        Método: {
          type: 'select',
          select: {
            name: 'Crédito',
          },
        },
        Pago: {
          type: 'checkbox',
          checkbox: true,
        },
        'Conta/Origem': {
          type: 'select',
          select: {
            name: 'Nubank',
          },
        },
        Valor: {
          type: 'number',
          number: 17,
        },
        Relevância: {
          type: 'select',
          select: {
            name: 'Essencial',
          },
        },
        Despesa: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: 'Pg *Ton Delivery do',
              },
            },
          ],
        },
      },
      {
        Data: {
          type: 'date',
          date: {
            start: '2024-10-01',
          },
        },
        Método: {
          type: 'select',
          select: {
            name: 'Crédito',
          },
        },
        Pago: {
          type: 'checkbox',
          checkbox: true,
        },
        'Conta/Origem': {
          type: 'select',
          select: {
            name: 'Nubank',
          },
        },
        Valor: {
          type: 'number',
          number: 63,
        },
        Relevância: {
          type: 'select',
          select: {
            name: 'Essencial',
          },
        },
        Despesa: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: 'Pag*Marianacristina',
              },
            },
          ],
        },
      },
      {
        Data: {
          type: 'date',
          date: {
            start: '2024-10-02',
          },
        },
        Método: {
          type: 'select',
          select: {
            name: 'Crédito',
          },
        },
        Pago: {
          type: 'checkbox',
          checkbox: true,
        },
        'Conta/Origem': {
          type: 'select',
          select: {
            name: 'Nubank',
          },
        },
        Valor: {
          type: 'number',
          number: 50,
        },
        Relevância: {
          type: 'select',
          select: {
            name: 'Essencial',
          },
        },
        Despesa: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: 'Solucoe*Posto de Combu',
              },
            },
          ],
        },
      },
    ];

    const output = generateNotionData(inputData);
    assert.deepStrictEqual(output, expectedOutput);
  });
});
