<template>
  <div class="GroupModal">
    <div id="create-group-modal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create a Group</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="group name">Group Name</label>
                <input type="text" class="form-control" id="groupname" placeholder="Group Name"
                  v-model="newGroup.name" />
              </div>
              <div class="form-group">
                <label for="group name">Group Type</label>
                <input type="text" class="form-control" id="grouptype" placeholder="Group Type"
                  v-model="newGroup.type" />
              </div>
              <div class="form-group">
                <label for="group description">Group Description</label>
                <input type="text" class="form-control" id="groupdescription" placeholder="Group Description"
                  v-model="newGroup.description" />
              </div>
              <button type="submit" @click="createGroup()" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "createGroup",
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