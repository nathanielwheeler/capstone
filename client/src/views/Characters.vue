<template>
  <div class="characters container-fluid">
    <div class="row">
      <div class="col-12">
        <h3 class="offset-3 col-6 text-center">My Characters</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- <button class="btn btn-info" data-toggle="modal" :data-target="#create-character-modal">Make a new character!</button>    -->
      </div>
      <create-character-modal />
      <div class="col-12">
        <div v-for="character in characters" :key="character._id">
        <router-link :to="{name:'character' , params: {characterId: character._id}}">{{character.name}}</router-link>

    </div>
      </div>
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
    getCharacters() {},

    createCharacter() {
      this.$store.dispatch("createCharacter", this.newCharacter);
      this.newCharacter = { name: "", stats: "", description: "" };
    }
  },
  components: {
    CreateCharacterModal,
    ActiveCharacterModal
  }
};
</script>


<style scoped>
</style>