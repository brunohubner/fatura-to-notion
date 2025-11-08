const env = require('../config/env');
const notion = require('../config/notion');
const retryPromise = require('./retryPromise');

module.exports = async function addRecordToNotion(properties) {
  const promise = () => notion.pages.create({
    parent: {
      database_id: env.NOTION_DATABASE_ID,
    },
    properties,
  });

  await retryPromise(promise)
    .catch(() => {
      // eslint-disable-next-line no-console
      console.error('Failed to add record to Notion:\n', JSON.stringify(properties, null, 2));
    });
};
