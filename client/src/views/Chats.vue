<template>
  <div class="container-fluid">
    <div class="Chats row">
      <div class="col-12">
        <form @submit.prevent="addChat">
          <input type="text" placeholder="title" v-model="newChat.title" required />
          <input type="text" placeholder="description" v-model="newChat.description" />
          <br>
          <button class="btn btn-success my-2" type="submit">Make a new chat!</button>
        </form>
      </div>
    </div>
    <hr class="top-margin">
    <div class="row justify-content-center">
      <strong>
        <div class="col-12 my-1" v-for="chat in chats" :key="chat._id">
          <strong>
            <router-link :to="{name:'chat' , params: {chatId: chat._id}}" class="route-color">{{chat.title}}
            </router-link>
          </strong>
          <div v-if="user._id != chat.author"></div>
          <div v-else class="col-12">
            <div class="row justify-content-right">
              <div class="col-2 offset-10">
                <button>
                  <i class="fas fa-trash-alt" @click="deleteChat(chat)"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </strong>
    </div>

  </div>
</template>

<script>
  export default {
    name: "chats",
    props: ["chat"],
    mounted() {
      this.$store.dispatch("getChats");
      // let payload = {
      //   author: this.chat.author._id,
      //   chatId: this.chatProp.chat._id
      // };
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
      },
      user() {
        return this.$store.state.user;
      }
    },
    methods: {
      addChat() {
        this.$store.dispatch("addChat", this.newChat);
        this.newChat = { title: "", description: "" };
      },

      deleteChat(chat) {
        this.$store.dispatch("deleteChat", chat);
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

  .route-color {
    color: #3a3a3a;
  }
</style>