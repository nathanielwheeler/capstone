<template>
  <div class="characters container-fluid">
    <div class="row">
      <div class="col-12">
        <strong>
          <h3 class="offset-3 col-6 text-center">My Characters</h3>
        </strong>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- <button class="btn btn-info" data-toggle="modal" :data-target="#create-character-modal">Make a new character!</button>    -->
        <create-character-modal />
      </div>
      <br>
      <br>
      <strong> 
      <div class="editcharacter col-12">
        <div v-for="character in characters" :key="character._id">
          <strong>
            <router-link :to="{name:'characters' , params: {characterId: character._id}}" class="route-color">
              {{character.name}}</router-link>
          </strong>

          <button class="btn btn-dark mx-2" data-toggle="modal"
            :data-target="'#editCharacterModal'+character._id">Edit</button>

          <div :id="'editCharacterModal'+character._id" class="modal" role="dialog">
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
                      <input type="text" class="form-control" id="charactername" placeholder v-model="character.name" />
                    </div>
                    <div class="form-group">
                      <label for="group name">Character Stats</label>
                      <textarea class="form-control" id="characterStats" placeholder v-model="character.stats" />
                      </div>
                    <div class="form-group">
                      <label for="character class">Character Description</label>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        id="characterDescription"
                        v-model="character.description"
                      ></textarea>
                      <!-- <input
                        type="text"
                        class="form-control"
                        id="characterDescription"
                        placeholder
                        v-model="character.description"
                      />-->
                      <button type="submit" @click="editCharacter(character)" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div> 
          <button class="btn btn-danger" type="button" @click="deleteCharacter(character._id)">Delete</button>
        </div>
      </div> 
      </strong> 
    </div>
  </div>
</template>



<script>
import CreateCharacterModal from "../components/CreateCharacterModal.vue";
import ActiveCharacterModal from "../components/ActiveCharacterModal.vue";

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
    CreateCharacterModal,
    ActiveCharacterModal
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