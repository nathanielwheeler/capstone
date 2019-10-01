<template>
  <div class="character-select">
    <span class="dropdown show">
      <button class="btn btn-info btn-block dropdown-toggle top-margin" data-toggle="dropdown">
        <span v-if="activeCharacter != {} || ''">Voice: {{activeCharacter.name}}</span>
        <span v-else>Voice: (No Character Selected)</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" @click="resetActiveCharacter">(None)</a>
        <a
          v-for="character in characters"
          :key="character._id"
          class="dropdown-item"
          @click="changeActiveCharacter(character)"
        >{{character.name}}</a>
      </div>
    </span>
  </div>
</template>


<script>
export default {
  name: "character-select",
  data() {
    return {};
  },
  mounted() {
    return this.$store.dispatch("getCharacters");
    return this.$route.params.chatId;
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    characters() {
      return this.$store.state.characters;
    },
    activeCharacter() {
      return this.$store.state.activeCharacter;
    }
  },
  methods: {
    resetActiveCharacter() {
      this.$store.dispatch("resetActiveCharacter");
      this.activeCharacter = {};
    },
    changeActiveCharacter(character) {
      let characterId = character._id;
      this.$store.dispatch("changeActiveCharacter", characterId);
    }
  },
  components: {}
};
</script>


<style scoped>
.dropdown-menu {
  transform: unset !important;
}
</style>