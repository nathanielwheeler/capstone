<template>
  <div class="message-input">
    <form class="grid-container" @submit.prevent="addMessage">
      <input class="grid-input" type="text" placeholder="message" v-model="message.body" required />
      <div class="grid-button">
        <button class="btn btn-info" type="submit">Send</button>
      </div>
      <!-- <active-character-modal /> -->
      <div class="col-12">
        <!-- <activecharacter
          v-for="activeCharacter in activeCharacters"
          :characterProp="activeCharacter"
          :key="activeCharacter._id"
        >{{activeCharacterProp.name}}</activecharacter>-->
      </div>
    </form>
  </div>
</template>


<script>
  // import ActiveCharacter from "./";
  import activeCharacterModal from "./ActiveCharacterModal";
  export default {
    name: "message-input",
    data() {
      return {
        message: {
          body: ""
        }
      };
    },
    mounted() {
      let chatId = this.$route.params.chatId;
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    methods: {
      addMessage() {
        let message = {
          body: this.message.body,
          //author: this.user._id,
          chat: this.$route.params.chatId
        };
        this.$store.dispatch("addMessage", message);
        this.message = {};
      }
    },
    components: {
      activeCharacterModal
    }
  };
</script>


<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 65px;
    grid-template-rows: auto;
    grid-template-areas: "input button";
  }

  .grid-input {
    grid-area: input;
    width: 100%;
  }

  .grid-button {
    grid-area: button;
    max-width: 65px;
  }

  .positioning {
    z-index: auto;
  }
</style>