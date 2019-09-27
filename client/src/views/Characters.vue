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
        <character
          v-for="character in characters"
          :characterProp="character"
          :key="character._id"
        >{{characterProp.name}}</character>
      </div>
    </div>
  </div>
</template>



<script>
import CreateCharacterModal from "../components/CreateCharacterModal.vue";
import Character from "../components/Character";
export default {
  name: "characters",
  prop: ["characterProp"],
  data() {
    return {
      newCharacter: ""
    };
  },
  mounted() {
    let characterProp = {
      UserId: this.$store.state.user._id
    };
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    }
  },
  methods: {},
  components: {
    Character,
    CreateCharacterModal
  }
};
</script>


<style scoped>
</style>