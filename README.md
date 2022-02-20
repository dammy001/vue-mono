# vue-mono

# Mono Component for Vue 3.x

A Vue 3 package for mono integration.

### Install

```
// with npm
npm i @damilaredev/vue-mono --save

//with yarn
yarn add @damilaredev/vue-mono

//with pnpm
pnpm add @damilaredev/vue-mono
```

### Usage

```
import { createApp } from 'vue';
import App from './App.vue'
import VueMono from '@damilaredev/vue-mono';

const app = createApp(App)

app.use(VueMono)

app.mount('#app')
```

###### example

```vue
<template>
 <vue-mono :publicKey="publicKey" @success="success">
  <button class="px-3 py-2 rounded text-center bg-blue-300 text-white">
   Connect With Mono
  </button>
 </vue-mono>
</template>

<script lang="ts">
 import { ref, Ref } from 'vue';
 export default defineComponent({
  setup: () => {
   const publicKey: Ref<string> = ref<string>('xxxxxxxxxxxxxxxxxxxxxxx');

   const success = (response: string): void => console.log(response);

   return { publicKey, success };
  },
 });
</script>
```

###### or referencing the component instance data

```vue
<template>
 <mono-component :publicKey="publicKey" @success="success" />
 <button
  class="px-3 py-2 rounded text-center bg-blue-300 text-white"
  @click="connect"
 >
  Connect With Mono
 </button>
</template>
<script lang="ts">
 import { ref, unref, ComponentPublicInstance, Ref } from 'vue';
 import { MonoComponent, MonoPropType } from '@damilaredev/vue-mono';
 export default defineComponent({
  setup: () => {
   const publicKey: Ref<string> = ref<string>('xxxxxxxxxxxxxxxxxxxxxxx');

   const monoRef =
    ref<ComponentPublicInstance<Record<string, unknown>, MonoPropType> | null>(
     null,
    );

   const connect = (): void => unref(monoRef)!.connectWithMono();

   const success = (response: string): void => console.log(response);

   return { publicKey, success, connect };
  },
 });
</script>
```
