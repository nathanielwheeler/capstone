<template>
  <div id="app">
    <nav id="nav">
      <div class="row">
        <router-link to="/" class="col-3">
          <h1>P&P</h1>
        </router-link>
        <router-link to="/chats" class="col-3" >
          <button class="Chats btn btn-info">Chats</button>
        </router-link>
        <!-- <router-link to="/currentCharacter" class="col-4">
          <button class="Current-Character col-4 btn btn-info">Current Character</button>
        </router-link> -->
        <router-link to="/characters" class="col-3">
          <button class="Characters btn btn-info">Characters</button>
        </router-link>
        <!-- <router-link to="/groups" class="col-4"> 
        <button class="Group btn col-4 btn-info">Group</button>
        </router-link>-->
        <div class="col-3"> 
        <button class="Logout btn btn btn-danger" @click="logout()">Log Out</button>
      </div>
      </div>
    </nav> 
    <div class="img"> 
    <router-view />
  </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
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
.img {
  background-image: url("./assets/D.jpg"); 
  height: 85vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
nav {
  background-color: black;
  height: 15vh;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.Chats {
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
}
h1 {
  font-size: 40px;
}
</style>
