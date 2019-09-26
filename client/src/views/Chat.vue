<template>
 
  <div class="chat">
    <div class="container-fluid">
      <div class="row">  
        <h3 class="col-12"> {{chat.title}}</h3>
      <div class="messageBox col-12 d-flex flex-column-reverse border " v-chat-scroll>
    <message v-for="message in messages" :messageProp="message" :key="message._id"></message>
  </div>
      </div>
         <messageInput /> 
        </div>
      </div>
</template>


<script>
import message from "../components/Message";
import messageInput from "../components/MessageInput";

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
  },
  methods: {},
  components: {
    message,
    messageInput
  }
};
</script>


<style scoped>
messageInput {
  text-align: center;
}
.messageBox {
  height: 450px;
  overflow-y: auto;
  overflow-wrap: break-word;
}
h3 {
  text-align: center;
}
.chat {
  text-align: center;
}
.nav {
  border-radius: 20%;
  width: 80px;
  height: 40px;
  z-index: 10000;
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