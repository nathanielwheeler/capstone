<template>
  <div class="DiceSim">
    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#diceModal">Dice Sim</button>

    <div class="modal" id="diceModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row justify-content-around">
                <div class="col-3 bttn">
                  <button class="btn btn-secondary" type="button " @click="d20">Roll D20</button>
                </div>
                <div class="col-3 bttn">
                  <button class="btn btn-secondary" type="button " @click="d12">Roll D12</button>
                </div>
                <div class="col-3 bttn">
                  <button class="btn btn-secondary" type="button " @click="d10">Roll D10</button>
                </div>
                <div class="col-3 bttn">
                  <button class="btn btn-secondary" type="button " @click="d8">Roll D8</button>
                </div>
                <div class="col-3 bttn">
                  <button class="btn btn-secondary" type="button " @click="d6">Roll D6</button>
                </div>
                <div class="col-3 bttn">
                  <button class="btn btn-secondary" type="button " @click="d4">Roll D4</button>
                </div>
                <div class="col-3 bttn">
                  <button class="btn btn-secondary" type="button " @click="dPercent">Roll D%</button>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-12">
                  <p>Modifier</p>
                </div>

                <div class="col-6">
                  <input type="number" class="form-control" v-model="modifier" />
                </div>
              </div>

              <div id="results">-</div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
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
      if (x == 20) {
        document.getElementById(
          "results"
        ).innerText = `NAT 20! CRITICAL SUCCESS!`;
      } else if (x == 1) {
        document.getElementById("results").innerText = `NAT 1! CRITICAL FAIL! `;
      } else {
        x += +this.modifier;
        document.getElementById("results").innerText = `Result: ${x}`;
      }
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
.bttn {
  margin: 2px;
}
</style>