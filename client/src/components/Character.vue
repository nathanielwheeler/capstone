<template>
  <div class="character">
    <div class="container-fluid"> 
      <div class="row"> 
        <h3 class="col-12">{{character.name}}</h3>
         <div class="col-12">
        <div v-for="activeCharacter in character" :key="activeCharacter._id">
        <router-link :to="{name:'CurrentCharacter' , params: {characterId: character._id}}">{{character.name}}</router-link>
        
    </div>
  </div>
    </div>
    </div> 
</template>


<script>
export default {
  name: "activeCharacter",
  prop: ["activeCharacterProp"],
  mounted() {
    this.$store.dispatch("getActiveCharacter");
  },
  data() {
    return {};
  },
  computed: {
    activeCharacter() {
      return this.$store.state.activeCharacter;
    }
  },
  methods: {
    getActiveCharacter() {
      this.$store.dispatch("getActiveCharacter", this.activeCharacter);
      this.activeCharacter = { name: "", stats: "", description: "" };
    }
  },
  components: {}
};
</script>


<style scoped>
</style>