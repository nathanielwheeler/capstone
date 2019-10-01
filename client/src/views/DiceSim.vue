<template>
  <div class="DiceSim">
    <button class="btn btn-secondary" type="button " @click="d20">Roll D20</button>
    <button class="btn btn-secondary" type="button " @click="d12">Roll D12</button>
    <button class="btn btn-secondary" type="button " @click="d10">Roll D10</button>
    <button class="btn btn-secondary" type="button " @click="d8">Roll D8</button>
    <button class="btn btn-secondary" type="button " @click="d6">Roll D6</button>
    <button class="btn btn-secondary" type="button " @click="d4">Roll D4</button>
    <button class="btn btn-secondary" type="button " @click="dPercent">Roll D%</button>
    <br />

    <p>Modifier</p>
    <input type="number" class="form-control" v-model="modifier" />

    <br />
    <div id="results">-</div>
  </div>
</template>


<script>
export default {
  name: "DiceSim",
  data() {
    return {
      modifier: 0
    };
  },
  computed: {},
  methods: {
    d20() {
      let x = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

      x += +this.modifier;

      document.getElementById("results").innerText = `Result: ${x}`;
    },

    d12() {
      let x = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

      x += +this.modifier;

      document.getElementById("results").innerText = `Result: ${x}`;
    },

    d10() {
      let x = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

      x += +this.modifier;

      document.getElementById("results").innerText = `Result: ${x}`;
    },

    d8() {
      let x = Math.floor(Math.random() * (8 - 1 + 1)) + 1;

      x += +this.modifier;

      document.getElementById("results").innerText = `Result: ${x}`;
    },

    d6() {
      let x = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

      x += +this.modifier;

      document.getElementById("results").innerText = `Result: ${x}`;
    },

    d4() {
      let x = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

      x += +this.modifier;

      document.getElementById("results").innerText = `Result: ${x}`;
    },

    dPercent() {
      let x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      document.getElementById("results").innerText = `Result: ${x}%`;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>