<template>
  <div class="groups">
    <div class="row">
      <div class="col-12">
        <input type="text" placeholder="search"> <button @click="search" class="btn btn-info"></button> 
       <div v-for="group in groups" :key="groups._id"> 
         <router-link :to="{name: 'group', params: {groupId: group._id}}">
           {{group.name}}
         </router-link>
     </div>
      </div>
    </div>
              </div>
</template>


<script>
export default {
  name: "Groups",
  mounted() {
    this.$store.dispatch("getGroups");
  },
  data() {
    return {};
  },
  computed: {
    groups() {
      return this.$store.state.groups;
    }
  },
  methods: {
    // createGroup() {
    //   this.$store.dispatch('createGroup', this.newGroup);
    //   this.newGroup = (name: "", description: "");
    // },
    // searchGroup() {
    //   this.$store.dispatch('searchGroup', this.searchGroup);
    //   this.searchGroup =
    // }
  },
  components: {}
};
</script>


<style scoped>
</style>