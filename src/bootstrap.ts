import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';

import App from './app/app';

export function main(initialState?: any): Promise<any> {
  return bootstrap(App, [
    ROUTER_PROVIDERS,
  ])
  .catch(err => console.error(err));
}

if (ENV === 'development' && HMR === true) {
  let hmr = require('angular2-hmr');
  hmr.hotModuleReplacement(main, module);
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}
