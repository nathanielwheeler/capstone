<template>
  <div class="editMessage">
    <button><i class="fas fa-pencil-alt" data-toggle="modal" data-target="#editMessageModal"></i></button>
    <!-- <a class="edit" data-toggle="modal" data-target="#editMessageModal"></a> -->
    <div id="editMessageModal" class="modal" role="dialog">
    <div class="modal fade" id="editMessageModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            </button>
          </div>
          </div> 
          <form @submit.prevent="editMessageModal(messageProp)">
            <div class="form-group"> 
              <label for>Edit Here</label> 
              <input 
              type="text"
              class="form-control"
              id="messageBody"
              placeholder
              v-model="messageProp.body"/> 
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
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
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
      message: {
        body: ""
      },
    };
  },
  mounted() {
    let payload = {
      author: this.messageProp.author._id,
      chatId: this.messageProp.chat._id, 
      messageId: this.messageProp._id
    }; 
  }, 
  computed: {},
  methods: {},
  components: {}
};debugger
</script>


<style scoped>
</style>