<template>
  <div class="Chat">
    <div class="chat">{{chat.title}}</div>
    <message v-for="message in messages" :messageProp="message" :key="message._id" />
  </div>
</template>


<script>
import Message from "../components/Messages";
export default {
  name: "chat",
  mounted() {
    let chatId = this.$route.params.chatId;
    this.$store.dispatch("getChat", chatId);
    this.$store.dispatch("getMessages", chatId);
  },

  props: [],
  data() {
    return {};
  },
  computed: {
    chat() {
      return this.$store.state.currentChat;
    },
    messages() {
      return this.$store.state.messages[this.$route.params.chatId];
    }
    //   comments() {
    //   return this.$store.state.comments[this.taskProp._id] || [];
    // }
  }
};
methods: {
}
components: {
  Message;
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