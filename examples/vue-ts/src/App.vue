<script setup lang="ts">
 import { ref } from 'vue';
 import HelloWorld from './components/HelloWorld.vue';

 const publicKey = ref<string>('xxxxxxxxxxxxxxxxxxxxxxx');

 const success = (response: any) => console.log(response);
</script>

<template>
 <img alt="Vue logo" src="./assets/logo.png" />
 <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

 <vue-mono :publicKey="publicKey" @success="success" />
</template>

<style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 }
</style>
