const fs = require('fs');
const path = require('path');
const parseTransaction = require('./parseTransaction');

module.exports = function getParsedJson() {
  const file = fs
    .readFileSync(path.resolve(__dirname, '..', '..', 'data', 'data.txt'))
    .toString('utf-8');

  return file.split('\n').map(parseTransaction);
};
