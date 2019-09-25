<template>
  <div class="Chat">
    <div class="container-fluid">
      <div class="chat">{{chat.title}}</div>
    </div>
    <message v-for="message in messages" :messageProp="message" :key="message._id" />
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

  props: ["chatProp"],
  data() {
    return {
      chatId: this.chatProp._id
    };
  },
  computed: {
    chat() {
      return this.$store.state.currentChat;
    },
    messages() {
      return this.$store.state.messages[chatId] || [];
    }
    //   comments() {
    //   return this.$store.state.comments[this.taskProp._id] || [];
    // }
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