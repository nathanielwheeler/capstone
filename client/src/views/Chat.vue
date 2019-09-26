<template>
 
  <div class="chat">
    <div class="container-fluid">
      <div class="row">  
        <h3 class="col-12"> {{chat.title}}</h3>
      <div class="col-12 d-flex flex-column-reverse">
   
    <message v-for="message in messages" :messageProp="message" :key="message._id"></message>
  </div>
      </div>
        <div class="row"> 
        <div class="col-12"> 
         <messageInput /> 
        </div>
      </div>
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
.chat {
  text-align: center;
}
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