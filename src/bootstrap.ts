import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { provideHmrState, hotModuleReplacement } from 'angular2-hmr';

import App from './app/app';

export function main(initialState= {}) {
  let APP_PROVIDERS = [
    provideHmrState(initialState)
  ]; // act as middleware

  return bootstrap(App, [
    ROUTER_PROVIDERS,
    APP_PROVIDERS
  ])
  .catch(err => console.error(err));
}

if (ENV === 'development' && HMR === true) {
  hotModuleReplacement(main, module);
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}
