<template>
	<div class="characters container-fluid">
		<div class="row">
			<div class="col-12">
				<h3 class="offset-3 col-6 text-center">My Characters</h3>
				<div class="col-12">
					<!-- <button class="btn btn-info" data-toggle="modal" :data-target="#create-character-modal">Make a new character!</button>    -->
					<character-modal />
					<br />
					<br />
				</div>
			</div>
		</div>

		<div class="editcharacter row d-flex justify-content-around">
			<div
				class="col-11 col-md-5 col-lg-3 card bg-dark text-light m-3"
				v-for="character in characters"
				:key="character._id"
			>
				<strong class="card-header text-center">{{character.name}}</strong>
				<div class="card-body text-left">
					<p>{{character.description}}</p>
				</div>
				<div class="card-footer text-center">
					<button
						class="btn btn-secondary mx-2"
						data-toggle="modal"
						:data-target="'#characterModal'+character._id"
					>Edit</button>

					<!-- #region CHARACTER MODAL-->
					<div :id="'characterModal'+character._id" class="modal" role="dialog">
						<div class="modal-dialog">
							<div class="modal-content bg-dark text-light">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal"></button>
									<h4 class="modal-title text-center">Edit your character</h4>
								</div>
								<div class="modal-body">
									<form>
										<div class="form-group">
											<label for="group name">Character Name</label>
											<input
												type="text"
												class="form-control"
												id="charactername"
												placeholder
												v-model="character.name"
											/>
										</div>
										<div class="form-group">
											<label for="group name">Character Stats</label>
											<textarea
												class="form-control"
												id="characterStats"
												placeholder
												v-model="character.stats"
											/>
										</div>
										<div class="form-group">
											<label for="character class">Character Description</label>
											<textarea
												class="form-control"
												aria-label="With textarea"
												id="characterDescription"
												v-model="character.description"
											></textarea>
											<button
												type="submit"
												@click="editCharacter(character)"
												class="btn btn-outline-primary m-3"
											>Submit</button>
										</div>
									</form>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>
					<!-- #endregion -->

					<button class="btn btn-danger" type="button" @click="deleteCharacter(character._id)">Delete</button>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
import CharacterModal from "../components/CharacterModal.vue";

export default {
	name: "characters",
	prop: ["characterProp"],
	data() {
		return {
			newCharacter: ""
		};
	},
	mounted() {
		this.$store.dispatch("getCharacters");
	},
	computed: {
		characters() {
			return this.$store.state.characters;
		}
	},
	methods: {
		getCharacters() {
			this.$store.dispatch("getActiveCharacter", this.activeCharacter);
			this.activeCharacter = { name: "", stats: "", description: "" };
		},

		createCharacter() {
			this.$store.dispatch("createCharacter", this.newCharacter);
			this.newCharacter = { name: "", stats: "", description: "" };
		},

		deleteCharacter(characterId) {
			let x = confirm("Are you sure you want to delete this character?");
			if (x == true) {
				this.$store.dispatch("deleteCharacter", characterId);
			}
		},
		editCharacter(character) {
			this.$store.dispatch("editCharacter", character);
		}
	},
	components: {
		CharacterModal
	}
};
</script>


<style scoped>
.route-color {
	color: #3a3a3a;
}

.editcharacter {
	text-align: end;
}
</style>