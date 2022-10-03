'use strict';

const plugin = require('../../admin/src/pluginId')
const contentType = 'integer-counter'

module.exports = ({ strapi }) => ({
  async createCounter(data) {
    return await strapi
      .entityService
      .create(`plugin::${plugin}.${contentType}`, data);
  },
  async getCounterByKey(key) {
    return await strapi
      .entityService
      .findOne(`plugin::${plugin}.${contentType}`, {
        filters: {
          key: key
        }
      });
  },
  async getCounterByKeyAndCreateIfNotExists(key) {
    const entities = await strapi
      .entityService
      .findMany(`plugin::${plugin}.${contentType}`, {
        filters: {
          key: key
        }
      })
    const entity = entities.length > 0
      ? entities[0]
      : null
    
    if (entity != null) {
      return entity
    } else {
      return await strapi
        .entityService
        .create(`plugin::${plugin}.${contentType}`, {
          data: {
            key: key,
            value: 0
          }
        })
    }
  },
  async incrementKey(key) {
    const counter = await strapi
      .plugin(plugin)
      .service('biginteger-counter')
      .getCounterByKeyAndCreateIfNotExists(key)
    return await strapi
      .entityService
      .update(`plugin::${plugin}.${contentType}`, counter.id, {
        data: {
          value: +counter.value + 1
        }
      })
  }
})