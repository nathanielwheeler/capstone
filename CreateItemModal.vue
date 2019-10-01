<template>
  <div class="ItemModal">
    <div id="create-item-modal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add an Item</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="item name">Item Name</label>
                <input type="text" class="form-control" id="itemname" placeholder="Item Name"
                  v-model="newItem.name" />
              </div>
              <div class="form-group">
                <label for="item description">Item Description</label>
                <input type="text" class="form-control" id="itemdescription" placeholder="Item Description"
                  v-model="newItem.description" />
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
  name: "Create-Item-Modal",
  data() {
    return {
      newItem: {}
    };
  },
  computed: {},
  methods: {
    createItem() {
      this.newItem.characterId = this.character._id;
      this.$store.disptach("createItem", this.newItem);
      this.newItem = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>