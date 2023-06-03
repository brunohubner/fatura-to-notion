const env = require('../config/env');
const notion = require('../config/notion');

module.exports = async function addRecordToNotion(properties) {
  await notion.pages.create({
    parent: {
      database_id: env.NOTION_DATABASE_ID,
    },
    properties,
  });
};
