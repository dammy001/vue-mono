<script setup>
 import HelloWorld from './components/HelloWorld.vue';
 import { ref } from 'vue';

 const publicKey = ref('xxxxxxxxxxxxxxxxxxxxxxx');

 const success = (response) => console.log(response);
</script>

<template>
 <img alt="Vue logo" src="./assets/logo.png" />
 <HelloWorld msg="Hello Vue 3 + Vite" />

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
