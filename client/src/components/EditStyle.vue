<template>
  <div class="edit-style">
    <h2>Message Style</h2>
    <p>
      <strong>Text Color:</strong>
      <span
        :contentEditable="user._id == activeCharacter.author"
        v-text="activeCharacter.style.color"
        @blue="updateColor(hex)"
      ></span>
    </p>
    <p>
      <strong>Background Color:</strong>
      <span
        :contentEditable="user._id == activeCharacter.author"
        v-text="activeCharacter.style.background"
        @blue="updateBackground(hex)"
      ></span>
    </p>
    <p>
      <strong>Border Color:</strong>
      <span
        :contentEditable="user._id == activeCharacter.author"
        v-text="activeCharacter.style.borderColor"
        @blue="updateBordorColor(hex)"
      ></span>
    </p>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-3">
          <strong class="row">{{activeCharacter.name}}</strong>
          <em class="row">{{user.name}}</em>
        </div>
        <p
          class="col-9 dialogue-box"
          v-bind:style="activeCharacter.style"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, doloribus quisquam.</p>
      </div>
    </div>
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
  methods: {
    updateColor(hex) {
      let updated = hex.target.innerText;
      if (hexValidate(updated) === false) {
        console.error("invalid hex");
      } else {
        this.activeCharacter.style.color = updated;
        this.$store.dispatch("editColor", this.activeCharacter);
      }
    },
    updateBackground(hex) {
      let updated = hex.target.innerText;
      if (hexValidate(updated) === false) {
        console.error("invalid hex");
      } else {
        this.activeCharacter.style.background = updated;
        this.$store.dispatch("editColor", this.activeCharacter);
      }
    },
    updateBordorColor(hex) {
      let updated = hex.target.innerText;
      if (hexValidate(updated) === false) {
        console.error("invalid hex");
      } else {
        this.activeCharacter.style.borderColor = updated;
        this.$store.dispatch("editColor", this.activeCharacter);
      }
    },
    hexValidate(hex) {
      let arr = hex.split("");
      let re = /[0-9A-Fa-f]{6}/g;
      if (arr[0] === "#" && arr.length === 7) {
        for (let i = 1; i < arr.length; i++) {
          let char = arr[i];
          if (!re.test(char)) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  },
  components: {}
};
</script>


<style scoped>
</style>