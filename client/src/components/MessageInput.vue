<template>
  <div class="message-input">
   <div class="input-group mb-3">
    <form @submit.prevent="addMessage">
      <input type="text" placeholder="message" v-model="message.body" required />
      <div class="input-group-append">
         <button class="btn btn-info" type="submit">Send</button>
      </div>
    </form>
  </div>
</div>
</template>


<script>
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
    let chatId = this.$route.params.chatId;
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>