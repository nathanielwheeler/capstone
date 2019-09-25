<template>
  <div class="groupChat">
    <div class="container-fluid">
      <div class="chat">{{chat.author}}, {{chat.description}}</div>
      <input type="text" placeholder="your message" v-model="newchat.description" required />
    </div>
  </div>
</template>


<script>
export default {
  name: "CurrentChat",
  mounted() {
    this.$store.despatch("getChat");
  },
  data() {
    return {};
  },
  computed: {}
};
methods: {
}
components: {
}
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