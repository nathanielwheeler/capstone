<template>
  <div class="character">
    <div class="container-fluid"> 
      <div class="row"> 
        <h3 class="col-12">{{character.name}}</h3>
         <div class="col-12">
    </div>
  </div>
    </div>
    </div> 
</template>


<script>
export default {
  name: "activeCharacter",
  prop: [],
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