const fs = require('fs');
const path = require('path');
const parseLine = require('./parseLine');

module.exports = function parseTransaction() {
  const file = fs
    .readFileSync(path.resolve(__dirname, '..', '..', 'data.txt'))
    .toString('utf-8');

  return file.split('\n').map(parseLine);
};
