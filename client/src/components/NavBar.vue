<template>
  <div class="navBar">
    <h1>P&P</h1> 
    <button class="nav btn btn-info"></button> 
    <button class="Current Character btn btn-info"></button>
    <button class="Characters btn btn-info"></button> 
    <button class="Group btn btn-info"></button> 
  </div>
</template>


<script>
export default {
  name: "navBar",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.nav {
  border-radius: 50%;
}
.current {
  border-radius: 50%;
}
.characters {
  border-radius: 50%;
}
.group {
  border-radius: 50%;
}
</style>