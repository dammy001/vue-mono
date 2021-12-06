import { App, defineAsyncComponent } from 'vue';
import MonoComponent from './components/Mono';

export * from './types';

export { MonoComponent };

export default {
 install: (app: App, _options = {}): void => {
  app.component(
   'vue-mono',
   defineAsyncComponent(() => import('./components/Mono.vue')),
  );
 },
};
