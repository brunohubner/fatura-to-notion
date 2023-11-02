/* eslint-disable no-console */
const addRecordToNotion = require('./functions/addRecordToNotion');
const generateNotionData = require('./functions/generateNotionData');
const parseTransaction = require('./functions/parseTransaction');

async function main() {
  const transactions = parseTransaction();
  const notionData = generateNotionData(transactions);

  await Promise.all(notionData.map(addRecordToNotion))
    .then(() => console.log('>> Success!'))
    .catch((error) => console.error('>> Error!', JSON.stringify(error, null, 2)));
}

main();
