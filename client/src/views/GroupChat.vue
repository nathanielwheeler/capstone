<template>
  <div class="groupChat">
    <div class="container-fluid"> 
      <div class="row nav"> 
         <h1>P&P</h1> 
    <button class="nav btn btn-info">Nav</button> 
    <button class="Current Character btn btn-info">Current Character</button>
    <button class="Characters btn btn-info">Characters</button> 
    <button class="Group btn btn-info">Group</button> 
    <button class="LogOut btn btn-danger">Log Out</button>
  </div>
  <div class="chat"> 
    {{chat.author}}, {{chat.description}} 
  </div>
  <input type="text" placeholder="your message" v-model=newchat.description" required /> 
    </div>
  </div>
  
</template>


<script>
export default {
  name: "groupChat",
  mounted() {
    this.$store.despatch('getChat'); 
  }, 
  data() {
    return {};
  },
  computed: {}
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
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