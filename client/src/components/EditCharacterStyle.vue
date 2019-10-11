<template>
	<div class="edit-style">
		<h2>Message Style</h2>
		<p>
			<strong>Text Color:</strong>
			<span
				:contentEditable="user._id == activeCharacter.author"
				v-text="activeCharacter.style.color"
				@blur="updateColor"
			></span>
		</p>
		<p>
			<strong>Background Color:</strong>
			<span
				:contentEditable="user._id == activeCharacter.author"
				v-text="activeCharacter.style.background"
				@blur="updateBackground"
			></span>
		</p>
		<p>
			<strong>Border Color:</strong>
			<span
				:contentEditable="user._id == activeCharacter.author"
				v-text="activeCharacter.style.borderColor"
				@blur="updateBordorColor"
			></span>
		</p>
		<br />
		<div class="container">
			<div class="row">
				<div class="col-3">
					<strong class="row">{{activeCharacter.name}}</strong>
					<em class="row">{{user.name}}</em>
				</div>
				<p
					class="col-9 dialogue-box"
					v-bind:style="activeCharacter.style"
				>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, doloribus quisquam.</p>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	name: "edit-style",
	data() {
		return {};
	},
	computed: {
		user() {
			return this.$store.state.user;
		},
		activeCharacter() {
			return this.$store.state.activeCharacter;
		}
	},
	methods: {
		updateColor(evt) {
			let hex = evt.target.innerText;
			if (this.hexValidate(hex) === false) {
				console.error("invalid hex");
			} else {
				this.activeCharacter.style.color = hex;
				this.$store.dispatch("editCharacter", this.activeCharacter);
			}
		},
		updateBackground(evt) {
			let hex = evt.target.innerText;
			if (this.hexValidate(hex) === false) {
				console.error("invalid hex");
			} else {
				this.activeCharacter.style.background = hex;
				this.$store.dispatch("editCharacter", this.activeCharacter);
			}
		},
		updateBordorColor(evt) {
			let hex = evt.target.innerText;
			if (this.hexValidate(hex) === false) {
				console.error("invalid hex");
			} else {
				this.activeCharacter.style.borderColor = hex;
				this.$store.dispatch("editCharacter", this.activeCharacter);
			}
		},
		hexValidate(hex) {
			let hexChar = hex.substring(1);
			let re = /^[A-Fa-f0-9]+$/;
			if (hex[0] === "#" && hex.length === 7) {
				return re.test(hexChar);
			} else {
				return false;
			}
		}
	},
	components: {}
};
</script>


<style scoped>
</style>