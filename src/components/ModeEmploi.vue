<template>
  <div v-if="currentModeEmploi" class="edit-form py-3">
    <p class="headline">Edit ModeEmploi</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="currentModeEmploi.title"
          :rules="[(v) => !!v || 'Title is required']"
          label="Title"
          required
      ></v-text-field>

      <v-text-field
          v-model="currentModeEmploi.description"
          :rules="[(v) => !!v || 'Description is required']"
          label="Description"
          required
      ></v-text-field>

      <label><strong>Status:</strong></label>
      {{ currentModeEmploi.published ? "Published" : "Pending" }}

      <v-divider class="my-5"></v-divider>

      <v-btn v-if="currentModeEmploi.published"
             @click="updatePublished(false)"
             color="primary" small class="mr-2"
      >
        UnPublish
      </v-btn>

      <v-btn v-else
             @click="updatePublished(true)"
             color="primary" small class="mr-2"
      >
        Publish
      </v-btn>

      <v-btn color="error" small class="mr-2" @click="deleteModeEmploi">
        Delete
      </v-btn>

      <v-btn color="success" small @click="updateModeEmploi">
        Update
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Please click on a ModeEmploi...</p>
  </div>
</template>

<script>
import ModeEmploiDataService from "../services/ModeEmploiDataService";

export default {
  name: "modeEmploi",
  data() {
    return {
      currentModeEmploi: null,
      message: "",
    };
  },
  methods: {
    getModeEmploi(id) {
      ModeEmploiDataService.get(id)
          .then((response) => {
            this.currentModeEmploi = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    updatePublished(status) {
      var data = {
        id: this.currentModeEmploi.id,
        title: this.currentModeEmploi.title,
        description: this.currentModeEmploi.description,
        published: status,
      };

      ModeEmploiDataService.update(this.currentModeEmploi.id, data)
          .then((response) => {
            this.currentModeEmploi.published = status;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    updateModeEmploi() {
      ModeEmploiDataService.update(this.currentModeEmploi.id, this.currentModeEmploi)
          .then((response) => {
            console.log(response.data);
            this.message = "The modeEmploi was updated successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
    },

    deleteModeEmploi() {
      ModeEmploiDataService.delete(this.currentModeEmploi.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "modeEmplois" });
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.message = "";
    this.getModeEmploi(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>