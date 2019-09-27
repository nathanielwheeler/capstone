<template>
  <div class="Chats">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <form @submit.prevent="addChat">
            <input type="text" placeholder="title" v-model="newChat.title" required />
            <input type="text" placeholder="description" v-model="newChat.description" />
            <button type="submit">Create a Chat</button>
          </form>
        </div>
      </div>

      <div class="row">
        <div v-for="chat in chats" :key="chat._id">
          <div class="col-12">
            <router-link :to="{name:'chat' , params: {chatId: chat._id}}">{{chat.title}}</router-link>

            <button class="btn btn-primary mybutton" @click="subscribe(chat._id)">
              <b>+</b>
            </button>
          </div>
        </div>
        <br />
      </div>
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
    },
    subscribe(chatId) {
      this.$store.dispatch("subscribe", chatId);
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
