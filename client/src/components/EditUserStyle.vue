<template>
	<div class="activeCharacter">
		<br />

		<button
			class="btn btn-info bottom-margin"
			data-toggle="modal"
			data-target="#activeCharacterModal"
		>
			Current Active
			Character!
		</button>
		<div id="activeCharacterModal" class="modal" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content bg-dark text-light">
					<div class="modal-header text-center">
						<h4 class="modal-title">Current Active Character</h4>
					</div>
					<div class="modal-body">
						<form>
							<h1>{{activeCharacter.name}}</h1>
							<br />
							<h3>Character Stats</h3>
							<div class="text-left">
								<label for="group name">{{activeCharacter.stats}}</label>
							</div>
							<br />
							<h3>Character Description</h3>
							<div class="text-left">
								<label for="character class">{{activeCharacter.description}}</label>
							</div>
						</form>
						<editCharacterStyle v-if="displayStyle === true" v-bind:character="activeCharacter"></editCharacterStyle>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							@click="toggleStyle(displayStyle)"
							class="btn btn-info border"
						>Edit Style</button>
						<div>
							<button
								class="btn btn-dark mx-2"
								data-toggle="modal"
								:data-target="'#editCharacterModal'+activeCharacter._id"
							>Edit</button>

							<div :id="'editCharacterModal'+activeCharacter._id" class="modal" role="dialog">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal"></button>
											<h4 class="modal-title">Edit your character</h4>
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
														v-model="activeCharacter.name"
													/>
												</div>
												<div class="form-group">
													<label for="group name">Character Stats</label>
													<textarea
														class="form-control"
														id="characterStats"
														placeholder
														v-model="activeCharacter.stats"
													/>
												</div>
												<div class="form-group">
													<label for="character class">Character Description</label>
													<textarea
														class="form-control"
														aria-label="With textarea"
														id="characterDescription"
														v-model="activeCharacter.description"
													></textarea>

													<button
														type="submit"
														@click="editCharacter(activeCharacter)"
														class="btn btn-primary"
													>Submit</button>
												</div>
											</form>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<button type="button" class="btn btn-danger border" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import EditCharacterStyle from "./EditCharacterStyle";

export default {
	name: "Active-Character-Modal",
	data() {
		return {
			character: {},
			displayStyle: false
		};
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
		getActiveCharacter() {
			this.activeCharacter.authorId = user._id;
			this.$store.dispatch("getactiveCharacter", this.activeCharacter);
			this.activeCharacter = {};
		},
		editCharacter(character) {
			this.$store.dispatch("editCharacter", character);
		},
		toggleStyle(x) {
			console.log(x);
			switch (x) {
				case false:
					return (this.displayStyle = true);
				case true:
					return (this.displayStyle = false);
			}
		}
	},
	components: {
		EditCharacterStyle
	}
};
</script>


<style scoped>
.bottom-margin {
	margin-bottom: 75px;
}
</style>