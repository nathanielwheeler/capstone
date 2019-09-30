<template>
  <div class="card show" id="modal" v-if="toggle">
    <slot>
      <h1>MODAL GOES HERE</h1>
    </slot>
    <div class="modal-footer d-flex align-items-center">
      <slot name="modal-footer"></slot>
      <button class="ml-1 btn btn-danger" @click="closeModal">CLOSE</button>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      toggle: { type: Boolean, required: true }
    },
    name: "QuickModal",
    methods: {
      closeModal() {
        this.$emit("close");
      }
    }
  };
</script>

<style scoped>
  #modal {
    z-index: 1000;
  }
</style>