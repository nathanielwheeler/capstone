<template>
  <div class="Chat">
    <div class="container-fluid">
      <div class="chat">{{Chat.title}}</div>
      <input type="text" placeholder="your message" v-model="newchat.description" required />
    </div>
    <message v-for="message in meassages" :messageProp="message" :key="message._id" />
  </div>
</template>


<script>
export default {
  name: "chat",
  mounted() {
    let chatId = this.$route.params.chatId;
    this.$store.dispatch("getChat", chatId);
    this.$store.dispatch("getMessages", chatId);
  },
  data() {
    return {};
  },
  computed: {
    Chat() {
      return this.$store.state.currentChat;
    }
  }
};
methods: {
}
components: {
}
</script>


<style scoped>
.nav {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.Current {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.Characters {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.Group {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.LogOut {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
</style>