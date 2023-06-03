const monthMap = require('../constants/monthMap');

module.exports = function formatDate(date) {
  const [day, month] = date.split(' ');
  return `2023-${monthMap[month]}-${day}`;
};
