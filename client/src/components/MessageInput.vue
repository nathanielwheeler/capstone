<template>
  <div class="message-input">
   <div class="input-group flex-nowrap mb-3">
    <form @submit.prevent="addMessage">
      <input class="form-control"  type="text" placeholder="message" v-model="message.body" required />
      <div class="input-group-append">
         <span class="btn btn-info input-group-text" type="submit">Send</span>
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
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    addMessage() {
      let message = {
        body: this.message.body,
        //author: this.user._id,
        chat: this.$route.params.chatId
      };
      this.$store.dispatch("addMessage", message);
      this.message = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>