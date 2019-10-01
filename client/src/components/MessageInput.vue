<template>
  <div class="message-input">
    <form class="grid-container" @submit.prevent="addMessage">
      <input class="grid-input" type="text" placeholder="message" v-model="message.body" required />
      <div class="grid-button">
        <button class="btn btn-info" type="submit">Send</button>
      </div>
    </form>
  </div>
</template>


<script>
// import ActiveCharacter from "./";
export default {
  name: "message-input",
  data() {
    return {
      message: {
        body: ""
      }
    };
  },
  mounted() {
    return this.$route.params.chatId;
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
    addMessage() {
      let activeCharacter = this.activeCharacter;
      let message = {
        body: this.message.body,
        //author: this.user._id,
        chat: this.$route.params.chatId
      };
      if (activeCharacter.hasOwnProperty("_id")) {
        message.dialogueBool = true;
        message.character = activeCharacter._id;
      }
      this.$store.dispatch("addMessage", message);
      this.message = {};
    }
  },
  components: {}
};
</script>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 65px;
  grid-template-rows: auto;
  grid-template-areas: "input button";
}

.grid-input {
  grid-area: input;
  width: 100%;
}

.grid-button {
  grid-area: button;
  max-width: 65px;
}
.top-margin {
  margin-top: 5px;
}
</style>