import {
 defineComponent,
 onMounted,
 toRefs,
 SetupContext,
 unref,
 onBeforeMount,
} from 'vue';
import type { MonoConfig } from '../types';

const Mono = defineComponent({
 inheritAttrs: false,
 props: {
  publicKey: {
   type: String,
   required: true,
  },
  embed: {
   type: Boolean,
   required: false,
  },
  customClass: {
   type: String,
   default: '',
  },
 },
 emits: ['success'],
 template: `
          <template>
            <slot>
              <button type="button" @click="connectWithMono" :class="customClass">
                Connect With Mono
              </button>
            </slot>
          </template>
  `,
 setup: (props: MonoConfig, { emit }: SetupContext) => {
  const { publicKey, embed } = toRefs(props);

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

  onMounted(() => unref(embed) && connectWithMono());

  onBeforeMount(
   () => new Promise((resolve: any) => loadScript(() => resolve())),
  );

  const connectWithMono = (): void => {
   const options = {
    onClose: (): void => console.log('Widget closed'),
    onLoad: (): void => console.log('Widget loaded successfully'),
    onSuccess: ({ code }: { code: string | number }): void => {
     emit('success', code);
     connect.close();
    },
   };

   const connect = (window as any).Connect(unref(publicKey), { ...options });
   connect.setup();

   return connect.open();
  };

  return { connectWithMono };
 },
});

export default Mono;
