<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Mode Emploi</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
            v-model="modeEmploi.title"
            :rules="[(v) => !!v || 'Title is required']"
            label="Title"
            required
        ></v-text-field>

        <v-text-field
            v-model="modeEmploi.description"
            :rules="[(v) => !!v || 'Description is required']"
            label="Description"
            required
        ></v-text-field>
      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveModeEmploi">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Submitted successfully!
        </v-card-title>

        <v-card-subtitle>
          Click the button to add new Mode Emploi.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newModeEmploi">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import ModeEmploiDataService from "../services/ModeEmploiDataService";

export default {
  name: "add-modeEmploi",
  data() {
    return {
      modeEmploi: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveModeEmploi() {
      var data = {
        title: this.modeEmploi.title,
        description: this.modeEmploi.description,
      };

      ModeEmploiDataService.create(data)
          .then((response) => {
            this.modeEmploi.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
    },

    newModeEmploi() {
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