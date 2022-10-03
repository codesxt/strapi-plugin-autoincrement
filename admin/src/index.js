import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register([
      {
        name: 'autoincrement-integer',
        pluginId: pluginId,
        type: 'integer',
        components: {
          Input: async () => import(/* webpackChunkName: "input-component" */ "./components/Input"),
        },
        intlLabel: {
          id: 'autoincrement.integer.form.label',
          defaultMessage: 'Autoincrement Integer',
        },
        intlDescription: {
          id: 'autoincrement.integer.form.description',
          defaultMessage: 'Generates an autoincrement integer field',
        },
        options: {
          base: [
            /*
              Declare settings to be added to the "Base settings" section
              of the field in the Content-Type Builder
            */ 
          ],
          advanced: [
            /*
              Declare settings to be added to the "Advanced settings" section
              of the field in the Content-Type Builder
            */ 
          ],
        },
        validator: args => ({
          format: yup
            .number()
            .positive()
            .integer()
            .default(
              function () {
                return 0;
              }
            ),
        })
      },
      {
        name: 'autoincrement-biginteger',
        pluginId: pluginId,
        type: 'biginteger',
        components: {
          Input: async () => import(/* webpackChunkName: "input-component" */ "./components/Input"),
        },
        intlLabel: {
          id: 'autoincrement.biginteger.form.label',
          defaultMessage: 'Autoincrement Big Integer',
        },
        intlDescription: {
          id: 'autoincrement.biginteger.form.description',
          defaultMessage: 'Generates an autoincrement biginteger field',
        },
        options: {
          base: [
            /*
              Declare settings to be added to the "Base settings" section
              of the field in the Content-Type Builder
            */ 
          ],
          advanced: [
            /*
              Declare settings to be added to the "Advanced settings" section
              of the field in the Content-Type Builder
            */ 
          ],
        },
        validator: args => ({
          format: yup
            .number()
            .positive()
            .integer()
            .default(
              function () {
                return 0;
              }
            ),
        })
      }
    ]);

    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: 'Autoincrement',
      },
      Component: async () => {
        const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });

    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },
  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
