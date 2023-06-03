const fs = require('fs');
const path = require('path');

const monthMap = {
  JAN: '01',
  FEV: '02',
  MAR: '03',
  ABR: '04',
  MAI: '05',
  JUN: '06',
  JUL: '07',
  AGO: '08',
  SET: '09',
  OUT: '10',
  NOV: '11',
  DEZ: '12',
};

function formatDate(date) {
  const [day, month] = date.split(' ');
  return `2023-${monthMap[month]}-${day}`;
}

function parseTransaction(line) {
  const [date, name, value] = line.split('@@');
  return {
    date: formatDate(date),
    name: name.trim().replace(/"/g, ''),
    value: parseFloat(value.replace(',', '.')),
  };
}

module.exports = function getParsedJson() {
  const file = fs
    .readFileSync(path.resolve(__dirname, '..', 'data', 'data.txt'))
    .toString('utf-8');

  return file.split('\n').map(parseTransaction);
};
