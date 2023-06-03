/* eslint-disable no-console */
const addRecordToNotion = require('./functions/addRecordToNotion');
const getData = require('./functions/getData');

async function main() {
  await Promise.all(getData().map(addRecordToNotion))
    .then(() => console.log('>> Success!'))
    .catch((error) => console.error('>> Error!', JSON.stringify(error, null, 2)));
}

main();
