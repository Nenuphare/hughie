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
        <v-card-title>Etapes</v-card-title>

        <v-data-table
            :headers="headers"
            :items="etapes"
            disable-pagination
            :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editEtape(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteEtape(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import EtapeDataService from "../services/EtapeDataService";
export default {
  name: "etapes-list",
  data() {
    return {
      etapes: [],
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
    retrieveEtapes() {
      EtapeDataService.getAll()
          .then((response) => {
            this.etapes = response.data.map(this.getDisplayEtape);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveEtapes();
    },


    searchTitle() {
      EtapeDataService.findByTitle(this.title)
          .then((response) => {
            this.etapes = response.data.map(this.getDisplayEtape);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    editEtape(id) {
      this.$router.push({ name: "etape-details", params: { id: id } });
    },

    deleteEtape(id) {
      EtapeDataService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayEtape(etape) {
      return {
        id: etape.id,
        title: etape.title.length > 30 ? etape.title.substr(0, 30) + "..." : etape.title,
        description: etape.description.length > 30 ? etape.description.substr(0, 30) + "..." : etape.description,
        status: etape.published ? "Published" : "Pending",
      };
    },
  },
  mounted() {
    this.retrieveEtapes();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>