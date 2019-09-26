<template>
  <div class="message">
    <!-- <h1>{{this.messageProp.author.name}}</h1> -->
    <br /> 
    <strong> {{messageProp.author.name}}: </strong> {{messageProp.body}}
  </div>
</template>


<script>
export default {
  name: "message",

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