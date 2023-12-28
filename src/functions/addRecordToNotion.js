const env = require('../config/env');
const notion = require('../config/notion');
const retryPromise = require('./retryPromise');

module.exports = async function addRecordToNotion(properties) {
  await retryPromise(() => notion.pages.create({
    parent: {
      database_id: env.NOTION_DATABASE_ID,
    },
    properties,
  }));
};
