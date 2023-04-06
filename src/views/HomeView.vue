<script setup lang="ts">
</script>

<template>
  <v-row  >
    <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
    >
      <!-- Field to search an article -->
      <v-card-text>
        <h2>Rechercher un article</h2>
        <v-text-field
            ref="article"
            v-model="article"
            :rules="[() => !!article || 'Ce champ est requis.']"
            label="Nom de l'article"
            required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="red"
            class="ma-2"
            @click="searchArticle"
        >
          Rechercher
        </v-btn>
      </v-card-actions>
    </v-col>

   <!--- <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
    >
      //Field to add an article
      <v-card-text>
        <h2>Ajouter un article</h2>
        <v-text-field
            ref="newArticle"
            v-model="newArticle"
            :rules="[() => !!newArticle || 'Ce champ est requis.']"
            label="Nom de l'article"
            required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="red"
            class="ma-2"
            @click="addArticle"
        >
          Ajouter
        </v-btn>
      </v-card-actions>
    </v-col> -->

    <!-- Button to scan qr code -->
    <v-btn color="blue" class="ma-auto" size="x-large">
      Rechercher par QR Code
      <v-icon end icon="mdi-qrcode-scan"></v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "HomeView",

  computed: { //nom des computed à changer car pas pertinent
    articles () {
      return {
        article: this.article
      }
    },
    newArticles () {
      return {
        newArticle: this.newArticle
      }
    },
  },

  //nom des méthodes à changer car pas pertinent
  //Check if the fields are not empty
  methods: {
    searchArticle () {

      Object.keys(this.articles).forEach(f => {
        this.$refs[f].validate(true)
      })
    },
    addArticle () {
      Object.keys(this.newArticles).forEach(f => {
        this.$refs[f].validate(true)
      })
    }
  },
}
</script>