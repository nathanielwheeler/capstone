<template>
  <div id="app">
    <div id="nav">
      <div class="container-fluid">
        <div class="row">
          <router-link to="/" class="col-4">
            <h1>P&P</h1>
          </router-link>
          <router-link to="/chats" class="col-4">
            <button class="Chats btn btn-info">Chats</button>
          </router-link>
          <button class="Current-Character col-4 btn btn-info">Current Character</button>
          <button class="Characters col-4 btn btn-info">Characters</button>
          <button class="Group btn col-4 btn-info">Group</button>
          <button class="LogOut btn col-4 btn-danger" @click="logout()">Log Out</button>
        </div>

        <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>-->
        <router-view />
      </div>
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
  width: 80px;
  height: 40px;
}
.Current-Character {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.Characters {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.Group {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.LogOut {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
</style>
