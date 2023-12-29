'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { MacrosConfig } = require('@embroider/macros/src/node');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['macros-tests'],
    },
    '@embroider/macros': {
      topLevel: 'EmberApp#options["@embroider/macros"]',
      setConfig: {
        'macros-tests': {
          viaSetConfigTrue: true,
          viaSetConfigFalse: false,
        },
      },
      global: {
        'ember-data1': {
          someSettingFromGlobalConfig: true,
          notSomeSettingFromGlobalConfig: false,
        },
      },
      globalConfig: {
        'ember-data2': {
          someSettingFromGlobalConfig: true,
          notSomeSettingFromGlobalConfig: false,
        },
      },
      setGlobalConfig: {
        'ember-data3': {
          someSettingFromGlobalConfig: true,
          notSomeSettingFromGlobalConfig: false,
        },
      },
    },
  });

  let macros = MacrosConfig.for(app);
  macros.setGlobalConfig(__filename, 'probably-private-api', { hi: 'there' });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
