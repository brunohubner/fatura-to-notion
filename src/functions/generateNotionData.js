module.exports = function generateNotionData(data) {
  return data.map(({ date, name, value }) => ({
    Data: {
      type: 'date',
      date: {
        start: date,
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
        name: 'Azul',
      },
    },
    Valor: {
      type: 'number',
      number: value,
    },
    Relevância: {
      type: 'select',
      select: {
        name: 'Não Essencial',
      },
    },
    Despesa: {
      type: 'title',
      title: [
        {
          type: 'text',
          text: {
            content: name,
          },
        },
      ],
    },
  }));
};
