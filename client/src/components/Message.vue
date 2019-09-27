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
            <a @click="editMessage(messageProp)" class="dropdown-item">edit</a>
            <a @click="deleteMessage(messageProp)" class="dropdown-item">delete</a>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "message",

  props: ["messageProp"],
  data() {
    return {};
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
    editMessage(message) {
      this.$store.dispatch("editMessage", message);
    },
    deleteMessage(message) {
      this.$store.dispatch("deleteMessage", message);
    }
  },

  components: {}
};
</script>


<style scoped>
.dialogue-box {
  border: 1px solid black;
  padding: 10px;
}
</style>