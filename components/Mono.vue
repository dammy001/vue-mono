<script setup lang="ts">
 import { defineComponent, onMounted, onBeforeMount } from 'vue';

 interface ComponentType {
  customClass?: string | Record<string, unknown>;
  publicKey: string;
  embed: boolean;
 }

 const emit =
  defineEmits<{
   (e: 'success', code: unknown): void;
  }>();

 const props = withDefaults(defineProps<ComponentType>(), {
  embed: false,
  customClass: '',
  publicKey: '',
 });

 onMounted(() => props.embed && connectWithMono());

 onBeforeMount(
  () => new Promise((resolve: any) => loadScript(() => resolve())),
 );

 const loadScript = (callback: () => void): void => {
  const script: any = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://connect.withmono.com/connect.js`;
  document.getElementsByTagName('head')[0].appendChild(script);
  if (script.readyState) {
   script.onreadystatechange = () => {
    if (script.readyState === 'loaded' || script.readyState === 'complete') {
     script.onreadystatechange = null;
     callback();
    }
   };
  } else {
   script.onload = () => {
    callback();
   };
  }
 };

 const connectWithMono = (): void => {
  const options = {
   onClose: (): void => console.log('Widget closed'),
   onLoad: (): void => console.log('Widget loaded successfully'),
   onSuccess: ({ code }: { code: string | number }): void => {
    emit('success', code);
    connect.close();
   },
  };

  const connect = (window as any).Connect(props.publicKey, options);
  connect.setup();

  return connect.open();
 };
</script>

<script lang="ts">
 export default defineComponent({
  inheritAttrs: false,
 });
</script>

<template>
 <slot>
  <button type="button" @click="connectWithMono" :class="customClass">
   Connect With Mono
  </button>
 </slot>
</template>
