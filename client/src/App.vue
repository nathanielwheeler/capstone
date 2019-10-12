<template>
	<div id="app">
		<NavBar />
		<div>
			<router-view />
		</div>
	</div>
</template>

<script>
import DiceSim from "../src/components/DiceSim.vue";
import NavBar from "../src/components/NavBar";
export default {
	name: "App",

	data() {
		return {};
	},

	methods: {
		logout() {
			this.$store.dispatch("logout");
		}
	},
	components: {
		NavBar,
		DiceSim
	}
};
</script> 

<style scoped>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.logo {
	background-image: url(../public/P&PLogo.jpg);
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

.space {
	margin: 5px;
}

h1 {
	font-size: 40px;
}
</style>
