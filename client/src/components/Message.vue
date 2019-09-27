<template>
<<<<<<< HEAD
  <div class="message">
    <!-- <h1>{{this.messageProp.author.name}}</h1> -->
    <br />
    <strong>{{messageProp.author.name}}:</strong>
    {{messageProp.body}}
    <div class="dropdown">
      <button class="badge badge-pill badge-info dropdown-toggle" data-toggle="dropdown">..</button>
      <div class="dropdown-menu">
        <a href="#" data-toggle="modal" data-target="#editMessage">Edit</a>
        <!-- <a @click="editMessage(messageProp)" class="dropdown-item">edit</a> -->
        <a @click="deleteMessage(messageProp)" class="dropdown-item">delete</a>
=======
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
      <div class="col-3 col-md-2">
        <strong>{{messageProp.author.name}}:</strong>
      </div>
      <div class="col-9 col-md-10">
        {{messageProp.body}}
        <span class="dropdown">
          <button class="badge badge-pill badge-info dropdown-toggle" data-toggle="dropdown">..</button>
          <div class="dropdown-menu">
            <a @click="editMessage(messageProp)" class="dropdown-item">edit</a>
            <a @click="deleteMessage(messageProp)" class="dropdown-item">delete</a>
          </div>
        </span>
>>>>>>> 93a480a53a333c78a29de01716730178dfd71b09
      </div>
    </div>
  </div>
</template>


<script>
  // import EditMessageModal from "../components/EditMesssageModal";

<<<<<<< HEAD
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
    computed: {},
    methods: {
      editMessage(message) {
        this.$store.dispatch("editMessage", message);
      },
      deleteMessage(message) {
        this.$store.dispatch("deleteMessage", message);
      }
=======
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
>>>>>>> 93a480a53a333c78a29de01716730178dfd71b09
    },

    components: {
      // FIXME EditMessageModal
    }
  };
</script>


<style scoped>
</style>