# vue-mono

# Mono Component for Vue 2.x

A Vue Plugin for mono integration.

### Install

#### NPM

```
npm i @damilaredev/vue-mono --save
```

### Usage

```
import Vue from 'vue';
import VueMono from '@damilaredev/vue-mono';

Vue.use(VueMono);
```

#### Via NPM

###### vue-mono.vue sample

```vue
<template>
 <vue-mono
  :callback="callback"
  :publicKey="publicKey"
  @success="success"
  :embed="false"
 >
  <button class="px-3 py-2 rounded text-center bg-blue-300 text-white">
   Verify With Mono
  </button>
 </vue-mono>
</template>

<script type="text/javascript">
 export default {
  data() {
   return {
    publicKey: 'xxxxxxxxxxxxxxxxxxxxxxx', //mono public key
   };
  },
  methods: {
   callback: function (response) {
    console.log(response);
   },
   success: function (response) {
    console.log(response);
   },
  },
 };
</script>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/laravel00)!

Thanks!
Damilare.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
