<template>
  <div class="home">
    Welcome to Post & Play, an app that lets people play tabletop games, without the tabletop!
    <br />
    <div v-if="user._id">
      <subscribed-chats />
    </div>
    <div v-else>
      <router-link to="/login">login</router-link>to join a chat, keep track of basic character stats, and have fun!
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import subscribedChats from "../components/Subscribed.vue";
export default {
  name: "home",
  components: {
    subscribedChats
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>