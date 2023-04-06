<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Etape</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
            v-model="etape.title"
            :rules="[(v) => !!v || 'Title is required']"
            label="Title"
            required
        ></v-text-field>

        <v-text-field
            v-model="etape.description"
            :rules="[(v) => !!v || 'Description is required']"
            label="Description"
            required
        ></v-text-field>
      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveEtape">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Submitted successfully!
        </v-card-title>

        <v-card-subtitle>
          Click the button to add new Etape.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newEtape">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import EtapeDataService from "../services/EtapeDataService";

export default {
  name: "add-etape",
  data() {
    return {
      etape: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveEtape() {
      var data = {
        title: this.etape.title,
        description: this.etape.description,
      };

      EtapeDataService.create(data)
          .then((response) => {
            this.etape.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
    },

    newEtape() {
      this.submitted = false;
      this.etape = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>