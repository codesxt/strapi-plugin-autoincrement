'use strict';

const plugin = require('../admin/src/pluginId')

module.exports = ({ strapi }) => {
  strapi.db.lifecycles.subscribe({
    // models: [],
    async beforeCreate(event) {
      const { model } = event
      const { attributes } = model
      // console.log(attributes) 
      for (const key in attributes) {
        const attribute = attributes[key]
        
        if (attribute.customField != null && attribute.customField == 'plugin::strapi-plugin-autoincrement.autoincrement-biginteger') {
          // Get counter
          const counterKey = `${model.singularName}__${attribute.columnName}`
          const counter = await strapi
            .plugin(plugin)
            .service('biginteger-counter')
            .getCounterByKeyAndCreateIfNotExists(counterKey)

          // Set value of field to current counter value
          event.params.data[attribute.columnName] = counter.value

          // Increment counter
          await strapi
            .plugin(plugin)
            .service('biginteger-counter')
            .incrementKey(counterKey)
        }
        if (attribute.customField != null && attribute.customField == 'plugin::strapi-plugin-autoincrement.autoincrement-integer') {
          // Get counter
          const counterKey = `${model.singularName}__${attribute.columnName}`
          const counter = await strapi
            .plugin(plugin)
            .service('integer-counter')
            .getCounterByKeyAndCreateIfNotExists(counterKey)

          // Set value of field to current counter value
          event.params.data[attribute.columnName] = counter.value

          // Increment counter
          await strapi
            .plugin(plugin)
            .service('integer-counter')
            .incrementKey(counterKey)          
        }
      }
    }
  })
};
