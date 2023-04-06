<template>
  <div v-if="currentArticle" class="edit-form py-3">
    <p class="headline">Edit Article</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="currentArticle.title"
          :rules="[(v) => !!v || 'Title is required']"
          label="Title"
          required
      ></v-text-field>

      <v-text-field
          v-model="currentArticle.description"
          :rules="[(v) => !!v || 'Description is required']"
          label="Description"
          required
      ></v-text-field>

      <label><strong>Status:</strong></label>
      {{ currentArticle.published ? "Published" : "Pending" }}

      <v-divider class="my-5"></v-divider>

      <v-btn v-if="currentArticle.published"
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

      <v-btn color="error" small class="mr-2" @click="deleteArticle">
        Delete
      </v-btn>

      <v-btn color="success" small @click="updateArticle">
        Update
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Please click on a Article...</p>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "article",
  data() {
    return {
      currentArticle: null,
      message: "",
    };
  },
  methods: {
    getArticle(id) {
      ArticleDataService.get(id)
          .then((response) => {
            this.currentArticle = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    updatePublished(status) {
      var data = {
        id: this.currentArticle.id,
        title: this.currentArticle.title,
        description: this.currentArticle.description,
        published: status,
      };

      ArticleDataService.update(this.currentArticle.id, data)
          .then((response) => {
            this.currentArticle.published = status;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    updateArticle() {
      ArticleDataService.update(this.currentArticle.id, this.currentArticle)
          .then((response) => {
            console.log(response.data);
            this.message = "The article was updated successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
    },

    deleteArticle() {
      ArticleDataService.delete(this.currentArticle.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "articles" });
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.message = "";
    this.getArticle(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>