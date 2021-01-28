import Mono from './components/Mono'

const Component = {
	install(Vue, options = {}) {
		Vue.component('vue-mono', Mono)
	}
}

export default Component

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component)
}