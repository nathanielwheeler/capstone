<template>
  <div class="home">
    <br> 
    <br> 
    <br> 
    <br> 
    <div class="welcome"> 
    <strong> 
    Welcome to Post & Play, an app that lets people play tabletop games, without the tabletop!
    </strong> 
    <br />
   </div>
    <div v-if="user._id">
      <div class="current-chats"> 
      Your Current Chats:
      </div>
      <subscribed-chats />
    </div>    
    <div v-else>
      <router-link to="/login">login</router-link>to join a chat, keep track of basic character stats, and have fun!
    </div>
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

<style scoped>
.home {
  color: black;
}
.welcome {
  font-size: 5vw;
}
.current-chats {
  color: black;
  font-size: 5vw;
}
</style>
