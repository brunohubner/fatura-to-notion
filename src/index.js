/* eslint-disable no-console */
const env = require('./config/env');
const notion = require('./config/notion');
const getData = require('./getData');

async function addRecordToNotion(properties) {
  await notion.pages.create({
    parent: {
      database_id: env.NOTION_DATABASE_ID,
    },
    properties,
  });
}

async function main() {
  const data = getData();

  await Promise.all(data.map(addRecordToNotion))
    .then(() => console.log('>> Success!'))
    .catch((error) => console.error('>> Error!', JSON.stringify(error, null, 2)));
}

main();
