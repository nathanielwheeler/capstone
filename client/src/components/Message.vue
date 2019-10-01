<template>
  <div class="message container">
    <!-- NOTE This appears if a character is selected -->
    <div class="row" v-if="messageProp.dialogueBool === true">
      <div class="col-3">
        <div class="row">
          <strong v-if="messageProp.style.name">{{messageProp.style.name}}</strong>
        </div>
        <div class="row">
          <em>{{messageProp.author.name}}</em>
        </div>
      </div>
      <div class="col-9 dialogue-box">{{messageProp.body}}</div>
    </div>
    <!--  NOTE This appears if a character is not selected -->
    <div class="row" v-else>
      <!-- <h1>{{this.messageProp.author.name}}</h1> -->
      <br />
      <div class="col-3 col-md-2 text-right">
        <strong>{{messageProp.author.name}}:</strong>
      </div>
      <div class="col-9 col-md-10 text-left">{{messageProp.body}}</div>
    </div>
    <!-- NOTE This appears on a new line after the message content -->
    <span class="timestamp">{{messageProp.createdAt}}</span>
    <span v-if="user._id != messageProp.author._id"></span>
    <span v-else>
      <span class="dropdown position-relative">
        <button class="badge badge-pill badge-info dropdown-toggle" data-toggle="dropdown">..</button>
        <div class="dropdown-menu">
          <!-- <a @click="openEditor(editMessage)" class="dropdown-item" role="button" data-toggle="modal"
          data-target="#editMessageModal">edit</a>-->

          <!-- <editMessageModal /> -->

          <button @click.stop="showformModal = true">Edit</button>
          <quick-modal
            class="bg-dark text-light position-relative z-index"
            :toggle="showformModal"
            @close="showformModal = false"
          >
            <form @submit.prevent="editMessage(messageProp)">
              <div class="form-group">
                <label for>Something Here</label>
                <input
                  type="text"
                  class="form-control"
                  id="messageBody"
                  placeholder
                  v-model="messageProp.body"
                />
              </div>
            </form>
            <div slot="modal-footer">
              <button type="button" @click="editMessage(messageProp)" class="btn btn-success">Submit</button>
            </div>
          </quick-modal>

          <a @click="deleteMessage(messageProp)" class="dropdown-item">Delete</a>
        </div>
      </span>
    </span>
  </div>
</template>


<script>
import editMessageModal from "../components/EditMessageModal";
export default {
  props: ["messageProp"],
  data() {
    return {
      message: {
        body: ""
      },
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
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    // openEditor(editMessage) {
    //   $("#editMessageModal").modal("show");
    // },
    deleteMessage(message) {
      this.$store.dispatch("deleteMessage", message);
    },
    // submit() {
    //   console.log("cool");
    //   this.showformModal = false;
    // },
    editMessage(message) {
      // debugger
      this.$store.dispatch("editMessage", message);
      this.showformModal = false;
    }
  },
  components: {
    editMessageModal
  }
};
</script>


<style scoped>
.timestamp {
  color: #bbb;
  font-size: 9pt;
}
.dialogue-box {
  border: 1px solid black;
  padding: 10px;
}

.z-index {
  /* position: relative !important; */
  z-index: 9999 !important;
}
</style>