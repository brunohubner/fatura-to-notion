const formatDate = require('./formatDate');

module.exports = function parseTransaction(line) {
  const [date, name, value] = line.split('@@');
  return {
    date: formatDate(date),
    name: name.trim().replace(/"/g, ''),
    value: parseFloat(value.replace(',', '.')),
  };
};
