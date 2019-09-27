<template>
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
      </div>
    </div>
  </div>
</template>


<script>
  // import EditMessageModal from "../components/EditMesssageModal";

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
    },

    components: {
      // FIXME EditMessageModal
    }
  };
</script>


<style scoped>
</style>