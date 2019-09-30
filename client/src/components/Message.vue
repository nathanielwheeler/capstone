<template>
  <div class="message container">
    <!-- NOTE This appears if a character is selected -->
    <div class="row" v-if="messageProp.dialogueBool === true">
      <div class="col-3">
        <div class="row">
          <strong>Character Name</strong>
        </div>
        <div class="row">
          <em>{{messageProp.author.name}}</em>
        </div>
      </div>
      <div class="col-9 dialogue-box">{{messageProp.body}}</div>
    </div>
    <!-- NOTE This appears if a character is not selected -->
    <div class="row" v-else>
      <!-- <h1>{{this.messageProp.author.name}}</h1> -->
      <br />
      <div class="col-3 col-md-2 text-right">
        <strong>{{messageProp.author.name}}:</strong>
      </div>
      <div class="col-9 col-md-10 text-left">
        {{messageProp.body}}
        <span class="dropdown">
          <button class="badge badge-pill badge-info dropdown-toggle" data-toggle="dropdown">..</button>
          <div class="dropdown-menu">
            <!-- <a @click="openEditor(editMessage)" class="dropdown-item" role="button" data-toggle="modal"
            data-target="#editMessageModal">edit</a>-->
            <editMessageModal />

            <!-- <button @click="showformModal = true">trigger</button>
            <quick-modal
              class="bg-dark text-light"
              :toggle="showformModal"
              @close="showformModal = false"
            >
              <form @submit.prevent="submit">
                <div class="form-group">
                  <label for>Something Here</label>
                  <input type="text" />
                </div>
              </form>
              <div slot="modal-footer">
                <button type="button" @click="submit" class="btn btn-success">Submit</button>
              </div>
            </quick-modal>-->

            <a @click="deleteMessage(messageProp)" class="dropdown-item">Delete</a>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import editMessageModal from "../components/EditMessageModal";
export default {
  props: ["messageProp", "editMessage"],
  data() {
    return {
      // editMessageModal
      showformModal: false
    };
  },
  mounted() {
    let payload = {
      author: this.messageProp.author._id,
      chatId: this.messageProp.chat._id,
      messageId: this.messageProp._id
    };
  },
  computed: {
    currentCharacter() {
      return this.$store.state.currentCharacter;
    }
  },
  methods: {
    openEditor(editMessage) {
      $("#editMessageModal").modal("show");
    },
    deleteMessage(message) {
      this.$store.dispatch("deleteMessage", message);
    },
    submit() {
      console.log("cool");
      this.showformModal = false;
    }
    // editMessage(message) {
    //   this.$store.dispatch("editMessage", message);
    // },
  },
  components: {
    editMessageModal
  }
};
</script>


<style scoped>
.dialogue-box {
  border: 1px solid black;
  padding: 10px;
}
</style>