<template>
  <div id="app">
    <nav id="nav">
      <div class="row justify-content-around">
        <div class="col-md-3 col-5">
          <router-link to="/characters">
            <button class="space btn btn-dark">Characters</button>
          </router-link>
          <div class="row">
            <div class="col-12">
              <button class="space btn btn-dark" @click="logout()">Log Out</button>
            </div>
          </div>
        </div>

        <router-link to="/" class="col-md-3 col-2 logo">
          <br />
        </router-link>

        <div class="col-md-3 col-5">
          <router-link to="/chats">
            <button class="Chats space btn btn-dark">Chats</button>
          </router-link>
          <div class="row">
            <dice-sim class="space col-12" />
          </div>
        </div>
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

.logo {
  background-image: url(../public/P&PLogo.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.space {
  margin: 5px;
}

nav {
  background-color: black;
}
#nav {
  padding: 10px;
  padding-right: 25px;
  padding-left: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

h1 {
  font-size: 40px;
}
</style>
