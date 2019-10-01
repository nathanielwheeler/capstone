<template>
  <div class="editMessage">
    <button><i class="fas fa-pencil-alt" data-toggle="modal" :data-target="'#editMessageModal'+messageProp._id"></i></button>
    <!-- <a class="edit" data-toggle="modal" data-target="#editMessageModal"></a> -->
    <div class="modal" :id="'editMessageModal:'+messageProp._id" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            </button>
          </div>
         
          <form>
            <div class="form-group"> 
              <label for>Edit Here</label> 
              <input 
              type="text"
              class="form-control"
              id="messageBody"
              placeholder
            
              </div> 
              </form> 
          <div class="modal-body">
             <button
                    type="button"
                    @click="editMessage(messageProp)"
                    class="btn btn-success"
                  >Submit</button>
           </div>
           </div> 
          </div> 
          </div> 
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "editMessageModal",
  props: ['messageProp'], 
  data() {
    return {
      // message: {
      //   body: ""
      // },
    };
  },
  mounted() {
    // let payload = {
    //   author: this.messageProp.author._id,
    //   chatId: this.messageProp.chat._id, 
    //   messageId: this.messageProp._id
    // }; 
  }, 
  computed: {
    currentCharacter() {
return this.$store.state.currentCharacter; 
    },
    user() {
      return this.$store.state.user; 
    }
    },
  methods: {
  editMessage(message) {
    this.$store.dispatch("editMessage", message); 
  }
  },
  components: {}
};
</script>


<style scoped>
</style>