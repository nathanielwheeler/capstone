<template>
  <div class="subscribedChats">
    <div class="row"></div>
    <div v-for="chat in chats" :key="chat._id">
      <div class="col-12">
        <div class="row justify-content-center">
          <router-link :to="{name:'chat' , params: {chatId: chat._id}}" class="col-6">{{chat.title}}</router-link>
          <button
            type="button"
            class="btn btn-danger col-1 mybutton"
            @click="unsubscribe(chat._id)"
          >
            <b>-</b>
          </button>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>


<script>
export default {
  name: "subscribedChats",
  mounted() {
    this.$store.dispatch("getSubscribedChats");
  },
  data() {
    return {};
  },
  computed: {
    chats() {
      return this.$store.state.subscribedChats;
    }
  },
  methods: {
    unsubscribe(chatId) {
      this.$store.dispatch("unsubscribe", chatId);
    }
  },
  components: {}
};
</script>


<style scoped>
.mybutton {
  padding: 0px;
}
</style>