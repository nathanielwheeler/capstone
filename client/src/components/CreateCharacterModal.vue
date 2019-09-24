<template>
  <div class="createCharacter">
    <div id="create-character-modal" class="modal" role="dialog">
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
                <label for="group name">Character Race</label>
                <input type="text" class="form-control" id="characterrace" placeholder="Character Race"
                  v-model="newCharacter.race" />
              </div>
              <div class="form-group">
                <label for="character class">Character Class</label>
                <input type="text" class="form-control" id="characterclass" placeholder="Character Class"
                  v-model="newCharacter.class" />
              </div>
              <div class="row"> 
                <div class="col-6"> 
                  <div class="form-group">
                    <label for="HP">HP</label>
                    <input type="text" class="form-control" id="hp" placeholder="hp"
                    v-model="newCharacter.hp" />
                    <div class="form-group">
                      <label for="LVL">LVL</label>
                      <input type="text" class="form-control" id="lvl" placeholder="lvl"
                      v-model="newCharacter.lvl" />
                      </div> 
                      </div> 
                      <div class="row"> 
                      <div class="col-6"> 
                  <div class="form-group">
                    <label for="STR">STR</label>
                    <input type="text" class="form-control" id="str" placeholder="str"
                    v-model="newCharacter.str" /> 
                    <div class="form-group"> 
                      <label for="DEX">DEX</label>
                      <input type="text" class="form-control" id="dex" placeholder="dex"
                      v-model="newCharacter.dex" /> 
                      </div> 
                      </div> 
                      <div class="row"> 
                      <div class="col-6"> 
                        <div classs="form-group"> 
                          <label for="CONST">CONST</label>
                        <button type="submit" @click="createCharacter()" class="btn btn-primary">Submit</button>

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
  computed: {},
  methods: {
    createCharacter() {
      this.newCharacter.authorId = this.author._id;
      this.$store.dispatch("createCharacter", this.newCharacter);
      this.newCharacter = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>