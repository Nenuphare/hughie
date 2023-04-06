<template>
  <div v-if="currentEtape" class="edit-form py-3">
    <p class="headline">Edit Etape</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="currentEtape.title"
          :rules="[(v) => !!v || 'Title is required']"
          label="Title"
          required
      ></v-text-field>

      <v-text-field
          v-model="currentEtape.description"
          :rules="[(v) => !!v || 'Description is required']"
          label="Description"
          required
      ></v-text-field>

      <label><strong>Status:</strong></label>
      {{ currentEtape.published ? "Published" : "Pending" }}

      <v-divider class="my-5"></v-divider>

      <v-btn v-if="currentEtape.published"
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

      <v-btn color="error" small class="mr-2" @click="deleteEtape">
        Delete
      </v-btn>

      <v-btn color="success" small @click="updateEtape">
        Update
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Please click on an Etape...</p>
  </div>
</template>

<script>
import EtapeDataService from "../services/EtapeDataService";

export default {
  name: "etape",
  data() {
    return {
      currentEtape: null,
      message: "",
    };
  },
  methods: {
    getEtape(id) {
      EtapeDataService.get(id)
          .then((response) => {
            this.currentEtape = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    updatePublished(status) {
      var data = {
        id: this.currentEtape.id,
        title: this.currentEtape.title,
        description: this.currentEtape.description,
        published: status,
      };

      EtapeDataService.update(this.currentEtape.id, data)
          .then((response) => {
            this.currentEtape.published = status;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    updateEtape() {
      EtapeDataService.update(this.currentEtape.id, this.currentEtape)
          .then((response) => {
            console.log(response.data);
            this.message = "The etape was updated successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
    },

    deleteEtape() {
      EtapeDataService.delete(this.currentEtape.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "etapes" });
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.message = "";
    this.getEtape(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>