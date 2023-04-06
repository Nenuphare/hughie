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
        <v-card-title>Articles</v-card-title>

        <v-data-table
            :headers="headers"
            :items="articles"
            disable-pagination
            :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editArticle(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteArticle(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ArticleDataService from "../services/Article.Service.js";
export default {
  name: "articles-list",
  data() {
    return {
      articles: [],
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
    retrieveArticles() {
      ArticleDataService.getAll()
          .then((response) => {
            this.articles = response.data.map(this.getDisplayArticle);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveArticles();
    },


    searchTitle() {
      ArticleDataService.findByTitle(this.title)
          .then((response) => {
            this.articles = response.data.map(this.getDisplayArticle);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    editArticle(id) {
      this.$router.push({ name: "article-details", params: { id: id } });
    },

    deleteArticle(id) {
      ArticleDataService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayArticle(article) {
      return {
        id: article.id,
          title: article.title.length > 30 ? article.title.substr(0, 30) + "..." : article.title,
        description: article.description.length > 30 ? article.description.substr(0, 30) + "..." : article.description,
        status: article.published ? "Published" : "Pending",
      };
    },
  },
  mounted() {
    this.retrieveArticles();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>