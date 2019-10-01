<template>
  <div class="activeCharacter">
    <br> 
    <button
      class="btn btn-info"
      data-toggle="modal"
      data-target="#activeCharacterModal"
    >Current Active Character!</button>
    <div id="activeCharacterModal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Current Active Character</h4>
          </div>
          <div class="modal-body">
            <form>
              <h1>Character Name</h1>
              <label for="group name">{{activeCharacter.name}}</label>
              <br> 
              <h3>Character Stats</h3>
              <label for="group name">{{activeCharacter.stats}}</label>
              <br> 
              <h3>Character Description</h3> 
              <label for="character class">{{activeCharacter.description}}</label>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" @click="editcharacter()" class="btn btn-info"> Edit Character</button>
            <button type="button" class="btn btn-danger border" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Active-Character-Modal",
  data() {
    return {
      character: {}
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
    }
  },
  components: {}
};
</script>


<style scoped>
</style>