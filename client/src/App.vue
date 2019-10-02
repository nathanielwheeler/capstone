<template>
  <div id="app">
    <nav id="nav">
      <div class="row justify-content-center">
        <router-link to="/" class="col-3">
          <h1>P&P</h1>
        </router-link>
        <router-link to="/chats" class="col-3 offset-1">
          <button class="Chats btn btn-dark">Chats</button>
        </router-link>
        <!-- <router-link to="/currentCharacter" class="col-4">
          <button class="Current-Character col-4 btn btn-info">Current Character</button>
        </router-link>-->
        <router-link to="/characters" class="col-3 offset-1">
          <button class="Characters btn btn-dark">Characters</button>
        </router-link>
      </div>
      <div class="row justify-content-center">
        <!-- <router-link to="/groups" class="col-4"> 
        <button class="Group btn col-4 btn-info">Group</button>
        </router-link>-->
        <div class="col-5 offset-1">
          <button class="Logout btn btn btn-dark" @click="logout()">Log Out</button>
        </div>
        <dice-sim class="col-5 offset-1" />
      </div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import DiceSim from "../src/components/DiceSim.vue";
export default {
  name: "App",

  data() {
    return {};
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: {
    DiceSim
  }
};
</script> 

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: black;
}
#nav {
  padding: 10px;
  padding-right: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.Characters {
  padding-right: 6px;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
/* .Chats {
  border-radius: 20%;
  width: 120px;
  height: 40px;
}
.Characters {
  border-radius: 20%;
  width: 120px;
  height: 40px;
}
.Logout {
  border-radius: 20%;
  width: 120px;
  height: 40px;
} */
h1 {
  font-size: 40px;
}
</style>
