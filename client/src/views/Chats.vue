<template>
  <div class="Chats">
    <div class="col-12"></div>
    <form @submit.prevent="addChat">
      <input type="text" placeholder="title" v-model="newChat.title" required />
      <input type="text" placeholder="description" v-model="newChat.description" />
      <button type="submit">Create a Chat</button>
    </form>
    <div v-for="chat in chats" :key="chat._id">
      <div>
        <router-link :to="{name:'chat' , params: {chatId: chat._id}}">{{chat.title}}</router-link>

        <button class="btn btn-primary mybutton">
          <b>+</b>
        </button>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "chats",
  mounted() {
    this.$store.dispatch("getChats");
  },
  data() {
    return {
      newChat: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    chats() {
      return this.$store.state.chats;
    }
  },
  methods: {
    addChat() {
      this.$store.dispatch("addChat", this.newChat);
      this.newChat = { title: "", description: "" };
    }
  },
  components: {}
};
</script>


<style scoped>
.chats {
  text-align: center;
}
.mybutton {
  padding: 0px;
}
</style>
