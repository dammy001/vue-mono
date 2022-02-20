import { App } from 'vue';
import Mono from './components/Mono.vue';

export type { MonoConfig } from './types';

export { Mono };

export default {
 install: (app: App, _options = {}): void => {
  app.component('vue-mono', Mono);
 },
};
