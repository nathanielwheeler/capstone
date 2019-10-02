<template>
  <div class="edit-style">
    <h2>Message Style</h2>
    <p>Something Something</p>
  </div>
</template>


<script>
export default {
  name: "edit-style",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    activeCharacter() {
      return this.$store.state.activeCharacter;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>