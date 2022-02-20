import { App as VueApp, Plugin } from 'vue';

export type MonoConfig = {
 embed: boolean;
 publicKey: string;
 customClass?: string | Record<string, unknown>;
};

export declare const App: VueApp;

export declare const plugin: Plugin;

declare function install(): void;

export { install };
