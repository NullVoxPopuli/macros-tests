import { getGlobalConfig, getOwnConfig } from '@embroider/macros';

console.log(
  `
  NOTE: '@embroider/macros' must be installed in the app

From addon:

getOwnConfig:
${JSON.stringify(getOwnConfig(), null, 2)}

getGlobalConfig:
${JSON.stringify(getGlobalConfig(), null, 2)}
  `,
);
