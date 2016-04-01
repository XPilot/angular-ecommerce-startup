import { bootstrap } from 'angular2/platform/browser';
import { provideHmrState, hotModuleReplacement } from 'angular2-hmr';

import 'reflect-metadata';

import App from './app/app';

export function main(initialState= {}) {
  let APP_PROVIDERS = [
    provideHmrState(initialState)
  ]; // act as middleware

  return bootstrap(App, [
    APP_PROVIDERS
  ])
  .catch(err => console.error(err));
}

if (ENV === 'development' && HMR === true) {
  console.log('app has launched!');
  hotModuleReplacement(main, module);
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}
