<template>
  <div class="message-input">
    <form class="grid-container" @submit.prevent="addMessage">
      <span class="dropdown">
        <button class="btn btn-info dropdown-toggle" data-toggle="dropdown">Voice</button>
        <div class="dropdown-menu" v-for="character in characters" :key="character._id"></div>
      </span>
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
      return this.$route.params.chatId;
      return this.$store.dispatch("getCharacters");
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      characters() {
        return this.$store.state.characters;
      }
    },
    methods: {
      addMessage() {
        let message = {
          body: this.message.body,
          //author: this.user._id,
          chat: this.$route.params.chatId
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
    }
  }
</script>


<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 80px 1fr 65px;
    grid-template-rows: auto;
    grid-template-areas: "dropdown input button";
  }

  .grid-dropdown {
    grid-area: dropdown;
    max-width: 80px;
  }

  .grid-input {
    grid-area: input;
    width: 100%;
  }

  .grid-button {
    grid-area: button;
    max-width: 65px;
  }
</style>