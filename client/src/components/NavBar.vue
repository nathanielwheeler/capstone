<template>
	<div class="nav text-light container-fluid d-flex justify-content-around">
		<div class="row">
			<div class="col">
				<router-link to="/chats" class="btn btn-secondary">Chats</router-link>
				<router-link to="/characters" class="btn btn-secondary">Characters</router-link>
			</div>
			<router-link to="/" class="col logo">
				<br />
			</router-link>
			<div class="col">
				<dice-sim />
				<button class="btn btn-secondary">Notifications</button>
			</div>
		</div>
	</div>
</template>


<script>
import DiceSim from "../../src/components/DiceSim.vue";

export default {
	name: "navbar",
	data() {
		return {};
	},
	computed: {},
	methods: {},
	components: {
		DiceSim
	}
};
</script>


<style scoped>
.nav {
	background: black;
}
.logo {
	background-image: url(../../public/P&PLogo.jpg);
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}
.btn {
	margin: 5px;
}
</style>