<template>
  <div id="app">
    <div id="nav">
      <div class="navBar">
        <div class="row">
          <h1 class="col-4">P&P</h1>
          <button class="nav btn col-4 btn-info">Nav</button>
          <button class="Current-Character col-4 btn btn-info">Current Character</button>
          <button class="Characters col-4 btn btn-info">Characters</button>
          <button class="Group btn col-4 btn-info">Group</button>
          <button class="LogOut btn col-4 btn-danger" @click="logout()">Log Out</button>
        </div>
      </div>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },

  // computed: {
  //   boards() {
  //     return this.$store.state.boards;
  //   }
  // },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      location.reload();
    }
  }
};
</script> 

<style>
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
.nav {
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.Current {
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
