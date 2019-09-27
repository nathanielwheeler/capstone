<template>
  <div class="characters container-fluid">
    <div class="row">
      <div class="col-12">
        <h3 class="offset-3 col-6 text-center">My Characters</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="btn btn-info">Make a new character!</button>
      </div>
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
import Character from "../components/Character";
export default {
  name: "characters",
  mounted() {},
  data() {
    return {};
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    }
  },
  methods: {},
  components: {
    Character
  }
};
</script>


<style scoped>
</style>