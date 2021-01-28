<template>
	<div>
		<div @click.prevent="connectWithMono" v-if="!embed">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		callback: {
			type: Function,
			required: false,
			default: function(response) {console.log(response)},
		},
		publicKey: {
			type:String,
			required: true
		},
		embed: {
			type: Boolean,
			required: false
		}, 
	},
	data() {
		return {
			scriptLoaded: null,
		};
	},
	created() {
		this.scriptLoaded = new Promise((resolve) => {
			this.loadScript(() => {
				resolve();
			});
		});
	},
	mounted() {
		if(this.embed){
			this.connectWithMono()
		}
    },
	methods: {
		loadScript(callback) {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = `https://connect.withmono.com/connect.js`;
			document.getElementsByTagName("head")[0].appendChild(script);
			if (script.readyState) {
				// IE
				script.onreadystatechange = () => {
					if (
						script.readyState === "loaded" ||
						script.readyState === "complete"
					) {
						script.onreadystatechange = null;
						callback();
					}
				};
			} else {
				// Others
				script.onload = () => {
					callback();
				};
			}
		},
		connectWithMono() {
			this.scriptLoaded && this.scriptLoaded.then(() => {
				const options = {
					onClose: () => console.log("Widget closed"),
					onLoad: () => console.log("Widget loaded successfully"),
					onSuccess: (response) => {
						this.$emit('success', response)
						connect.close()
					}
				};

				const connect = window.Connect(this.publicKey, options);
				connect.setup();

				return connect.open();
			})
		}
	},
};
</script>