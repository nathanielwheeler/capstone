<template>
  <div class="createCharacter">
     <button class="btn btn-info" data-toggle="modal" data-target="#createCharacterModal">Make a new character!</button>

    <div id="createCharacterModal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create a character</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="group name">Character Name</label>
                <input type="text" class="form-control" id="charactername" placeholder="Character Name"
                  v-model="newCharacter.name" />
              </div>
              <div class="form-group">
                <label for="group name">Character Stats</label>
                <input type="text" class="form-control" id="characterStats" placeholder="Character Stats"
                  v-model="newCharacter.stats" />
              </div>
              <div class="form-group">
                <label for="character class">Character Description</label>
                <input type="text" class="form-control" id="characterDescription" placeholder="Character Description"
                  v-model="newCharacter.description" />
                        <button type="submit" @click="createCharacter(user)" class="btn btn-primary">Submit</button>
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
</template>


<script>
export default {
  name: "Create-Character-Modal",
  data() {
    return {
      newCharacter: {}
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    createCharacter(user) {
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