<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Search by Title"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle">
        Search
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Modes Emploi</v-card-title>

        <v-data-table
            :headers="headers"
            :items="articles"
            disable-pagination
            :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editModeEmploi(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteModeEmploi(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ModeEmploiDataService from "../services/ModeEmploiDataService";
export default {
  name: "modeEmplois-list",
  data() {
    return {
      modeEmplois: [],
      title: "",
      headers: [
        { text: "Title", align: "start", sortable: false, value: "title" },
        { text: "Description", value: "description", sortable: false },
        { text: "Status", value: "status", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveModeEmploi() {
      ModeEmploiDataService.getAll()
          .then((response) => {
            this.modeEmplois = response.data.map(this.getDisplayModeEmploi);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveModeEmploi();
    },


    searchTitle() {
      ModeEmploiDataService.findByTitle(this.title)
          .then((response) => {
            this.modeEmplois = response.data.map(this.getDisplayModeEmploi);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    editModeEmploi(id) {
      this.$router.push({ name: "modeEmploi-details", params: { id: id } });
    },

    deleteModeEmploi(id) {
      ModeEmploiDataService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayModeEmploi(modeEmploi) {
      return {
        id: modeEmploi.id,
        title: modeEmploi.title.length > 30 ? modeEmploi.title.substr(0, 30) + "..." : modeEmploi.title,
        description: modeEmploi.description.length > 30 ? modeEmploi.description.substr(0, 30) + "..." : modeEmploi.description,
        status: modeEmploi.published ? "Published" : "Pending",
      };
    },
  },
  mounted() {
    this.retrieveModeEmploi();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>