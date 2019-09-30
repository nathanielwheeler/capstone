<template>
  <div class="activeCharacter">
    <button
      class="btn btn-info"
      data-toggle="modal"
      data-target="#activeCharacterModal"
    >Edit your character!</button>

    <div id="activeCharacterModal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">My Active Character</h4>
          </div>
          <div class="modal-body">
            <form>
              <label for="group name">{{character.name}}</label>
              <label for="group name">{{character.stats}}</label>
              <label for="character class">{{character.description}}</label>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" @click="editcharacter()" class="btn btn-info">Submit</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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
    }
    // character() {
    //   return this.$store.state.character;
    // }
  },
  methods: {
    getActiveCharacter() {
      debugger;
      this.newCharacter.authorId = user._id;
      this.$store.dispatch("createCharacter", this.newCharacter);
      this.newCharacter = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>