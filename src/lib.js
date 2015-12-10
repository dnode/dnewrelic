'use strict';

if (process.env.NEW_RELIC_LICENSE_KEY) {
  process.env.NEW_RELIC_APP_NAME = process.env.NEW_RELIC_APP_NAME
      || require(process.cwd() + '/package.json').name;
  process.env.NEW_RELIC_LOG = process.env.NEW_RELIC_LOG || 'stdout';
  require('newrelic');
}
