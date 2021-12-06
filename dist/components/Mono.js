"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const Mono = (0, vue_1.defineComponent)({
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
    setup: (props, { emit }) => {
        const { publicKey, embed } = (0, vue_1.toRefs)(props);
        const loadScript = (callback) => {
            const script = document.createElement('script');
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
            }
            else {
                script.onload = () => {
                    callback();
                };
            }
        };
        (0, vue_1.onMounted)(() => {
            (0, vue_1.unref)(embed) && connectWithMono();
        });
        (0, vue_1.onBeforeMount)(() => new Promise((resolve) => {
            loadScript(() => resolve());
        }));
        const connectWithMono = () => {
            const options = {
                onClose: () => console.log('Widget closed'),
                onLoad: () => console.log('Widget loaded successfully'),
                onSuccess: ({ code }) => {
                    emit('success', code);
                    connect.close();
                },
            };
            const connect = window.Connect((0, vue_1.unref)(publicKey), options);
            connect.setup();
            return connect.open();
        };
        return { connectWithMono };
    },
});
exports.default = Mono;
