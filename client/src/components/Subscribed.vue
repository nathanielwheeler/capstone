<template>
  <div class="subscribedChats">
    <div v-for="chat in chats" :key="chat._id">
      <router-link :to="{name:'chat' , params: {chatId: chat._id}}">{{chat.title}}</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "subscribedChats",
  data() {
    return {};
  },
  computed: {
    chats() {
      return this.$store.state.subscribedChats;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>