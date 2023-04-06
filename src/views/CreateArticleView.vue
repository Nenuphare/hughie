<template>
  <div class="Base">
    <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
    >
      <!-- Field to add an article -->
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
    </v-col>
  </div>
</template>
