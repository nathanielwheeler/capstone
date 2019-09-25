<template>
  <div class="Messages">
    {{messageProp.author.name}}
    <br />
    {{messageProp.body}}
  </div>
</template>


<script>
export default {
  name: "Messages",

  props: ["messageProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>