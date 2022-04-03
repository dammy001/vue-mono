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
<script setup lang="ts">
 import { ref } from 'vue';
 import type { Ref } from 'vue'
 
 const publicKey: Ref<string> = ref<string>('xxxxxxxxxxxxxxxxxxxxxxx');

 const success = (response: string): void => console.log(response);
</script>

<template>
 <vue-mono :publicKey="publicKey" @success="success">
  <button class="px-3 py-2 rounded text-center bg-blue-300 text-white">
   Connect With Mono
  </button>
 </vue-mono>
</template>
```

###### or referencing the component instance data

```vue
<script setup lang="ts">
 import { ref, unref } from 'vue';
 import { MonoComponent } from '@damilaredev/vue-mono';
 import type {Ref, ComponentPublicInstance } from 'vue'
 import type { MonoPropType } from '@damilaredev/vue-mono';

 const publicKey: Ref<string> = ref<string>('xxxxxxxxxxxxxxxxxxxxxxx');

 const monoRef: Ref<ComponentPublicInstance<Record<string, unknown>, MonoPropType> | null> = ref(null);

 const connect = (): void => unref(monoRef)!.connectWithMono();

 const success = (response: string): void => console.log(response);
</script>

<template>
 <mono-component :publicKey="publicKey" @success="success" />
 <button
  class="px-3 py-2 rounded text-center bg-blue-300 text-white"
  @click="connect"
 >
  Connect With Mono
 </button>
</template>
```
