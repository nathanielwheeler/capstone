<template>
  <div class="home">
    <br />
    <br />
    <br />
    <br />
    <div class="welcome">
      <strong>Welcome to Post & Play, an app that lets people play tabletop games, without the tabletop!</strong>
      <br>
      <br> 
      <br> 
    </div>
    <div v-if="user._id">
      <strong><div class="current-chats"><u>Your Current Chats:</u></div></strong>
      <br> 
      <subscribed-chats />
    </div>
    <div v-else>
      To use all the features and join the fun please
      <router-link to="/login">login</router-link>!
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
  text-align: center; 
}
.welcome {
  font-size: 4vh;
  text-align: center; 
  font-weight: 400;
  text-shadow: 10px 10px 5px rgb(118, 111, 179); 
  
}
.current-chats {
  color: black;
  font-size: 5vh;
  text-align: center; 
}
</style>
