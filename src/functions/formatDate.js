const monthMap = require('../constants/monthMap');

module.exports = function formatDate(date, mapper = monthMap) {
  const [day, month] = date.split(' ');
  return `2023-${mapper[month]}-${day}`;
};
