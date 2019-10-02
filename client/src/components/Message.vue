<template>
  <div class="message container">
    <!-- NOTE This appears if a character is selected -->
    <div class="row" v-if="messageProp.dialogueBool === true">
      <div class="col-3">
        <div class="row">
          <strong v-if="messageProp.character">{{messageProp.character.name}}</strong>
        </div>
        <div class="row">
          <em>{{messageProp.author.name}}</em>
        </div>
      </div>
      <p
        v-bind:style="messageProp.character.style"
        :contentEditable="user._id == messageProp.author._id"
        v-text="messageProp.body"
        @blur="updateText"
        class="col-9 dialogue-box"
      >{{messageProp.body}}</p>

      <div v-if="user._id != messageProp.author._id"></div>
      <div v-else class="col-12">
        <div class="row justify-content-right">
          <div class="col-2 offset-10">
            <button>
              <i class="fas fa-trash-alt" @click="deleteMessage(messageProp)"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  NOTE This appears if a character is not selected -->
    <div class="row" v-else>
      <!-- <h1>{{this.messageProp.author.name}}</h1> -->
      <br />
      <div class="col-3 col-md-2 text-right">
        <strong>{{messageProp.author.name}}:</strong>
      </div>
      <div class="col-9 col-md-10 text-left">
        <p
          :contentEditable="user._id == messageProp.author._id"
          v-text="messageProp.body"
          @blur="updateText"
        ></p>
        <div v-if="user._id != messageProp.author._id"></div>
        <div v-else>
          <div class="row">
            <div class="col-6">
              <!-- <editMessageModal :messageProp="messageProp"/> -->
              <button>
                <i class="fas fa-trash-alt" @click="deleteMessage(this.messageProp._id)"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- </span> -->
      </div>
      <!-- </span> -->
    </div>
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
    updateText(evt) {
      var updated = evt.target.innerText;
      this.messageProp.body = updated;
      this.$store.dispatch("editMessage", this.messageProp);
      this.showformModal = false;
    },

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
    editMessage(event) {
      this.messageProp.body = event.target;
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
  border-radius: 8px;
}

.z-index {
  /* position: relative !important; */
  z-index: 9999 !important;
}
</style>