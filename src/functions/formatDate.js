const monthMap = require('../constants/monthMap');

module.exports = function formatDate(date, mapper = monthMap) {
  const [day, month] = date.split(' ');
  return `2025-${mapper[month]}-${day}`;
};
