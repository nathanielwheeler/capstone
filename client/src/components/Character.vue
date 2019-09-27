<template>
  <div class="character">
    <!-- <button
      type="button"
      data-toggle="modal"
      :data-target="'#create-character-modal' + characterProp._id"
    >Create Character</button>
    <character v-for="character in characters" :characterProp="character" :key="character._id" />
    <CreateCharacterModal :characterProp="characterProp" /> -->
  </div>
</template>


<script>
import CreateCharacterModal from "../components/CreateCharacterModal.vue";
export default {
  name: "character",
  prop: ["characterProp"],
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