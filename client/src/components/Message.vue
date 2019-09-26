<template>
  <div class="message">
    <!-- <h1>{{this.messageProp.author.name}}</h1> -->
    <br />
    <strong>{{messageProp.author.name}}:</strong>
    {{messageProp.body}}
    <div class="dropdown">
      <button class="badge badge-pill badge-info dropdown-toggle" data-toggle="dropdown">..</button>
      <div class="dropdown-menu">
        <a @click="editMessage" class="dropdown-item">edit</a>
        <a @click="deleteMessage" class="dropdown-item">delete</a>
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
  computed: {},
  methods: {
    editMessage() {
      this.$store.dispatch("editMessage", messageProp);
    },
    deleteMessage() {
      this.$store.dispatch("deleteMessage", messageProp);
    }
  },

  components: {}
};
</script>


<style scoped>
</style>