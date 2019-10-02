<template>
  <div class="subscribedChats">
    <div class="row"></div>
    <div v-for="chat in chats" :key="chat._id">
      <div class="col-12">
        <div class="row justify-content-center">
          <strong>
            <router-link
              :to="{name:'chat' , params: {chatId: chat._id}}"
              class="col-6 route-color"
            >{{chat.title}}</router-link>
          </strong>
          <button type="button" class="btn btn-danger mybutton" @click="unsubscribe(chat._id)">
            <b>Unsubscribe</b>
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

.route-color {
  color: #3a3a3a;
  font-weight: bolder;
  font-size: large;
}
</style>