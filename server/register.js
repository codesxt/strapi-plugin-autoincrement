'use strict';

const plugin = require('../admin/src/pluginId')

/**
 * @param {import('@strapi/strapi').Strapi} strapi
 */
module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'autoincrement-integer',
    plugin: plugin,
    type: 'integer',
  });

  strapi.customFields.register({
    name: 'autoincrement-biginteger',
    plugin: plugin,
    type: 'biginteger',
  });
};