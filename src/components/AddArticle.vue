<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Article</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
            v-model="article.title"
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

      <v-btn color="primary" class="mt-3" @click="saveArticle">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Submitted successfully!
        </v-card-title>

        <v-card-subtitle>
          Click the button to add new Article.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newArticle">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "add-article",
  data() {
    return {
      article: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveArticle() {
      var data = {
        title: this.article.title,
        description: this.article.description,
      };

      ArticleDataService.create(data)
          .then((response) => {
            this.article.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
    },

    newArticle() {
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