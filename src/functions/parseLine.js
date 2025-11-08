const formatDate = require('./formatDate');

module.exports = function parseLine(line) {
  const splited = line.trim().split(' ');
  const date = `${splited[0]} ${splited[1]}`;
  const name = splited.slice(2, splited.length - 1).join(' ');
  const value = splited[splited.length - 1];

  return {
    date: formatDate(date),
    name: name.trim().replace(/"/g, '').toUpperCase(),
    value: parseFloat(value.replace('.', '').replace(',', '.')),
  };
};
