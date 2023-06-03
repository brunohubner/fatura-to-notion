const { Client } = require('@notionhq/client');
const env = require('./env');

module.exports = new Client({
  auth: env.NOTION_API_SECRET,
});
