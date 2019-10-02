<template>
  <div class="container-fluid">
    <div class="Chats row">
      <div class="col-12">
        <form @submit.prevent="addChat">
          <input type="text" placeholder="title" v-model="newChat.title" required />
          <input type="text" placeholder="description" v-model="newChat.description" />
          <br>
          <button class="btn btn-success my-2" type="submit">Create a Chat</button>
        </form>
      </div>
    </div>
    <hr class="top-margin">
    <div class="row justify-content-center">
      <strong> 
      <div class="col-12 my-1" v-for="chat in chats" :key="chat._id">
        <router-link :to="{name:'chat' , params: {chatId: chat._id}}">{{chat.title}}</router-link>
      </div> 
      </strong>
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
    width: auto;
  }

  .mybutton {
    padding: 0px;
  }

  .top-margin {
    margin-top: 5px !important;
  }
</style>