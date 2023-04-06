<script setup lang="ts">
</script>

<template>
  <v-app id="inspire">


      <v-app-bar>
        <img src="/logo_tn2.png" alt="Logo Tech-Nature" height="64" length="64"/>
        <v-card-title>Bienvenue sur HUGHIE!</v-card-title>
        <v-toolbar-title>
          <v-btn to="/" rounded color="blue">Accueil</v-btn>
          <v-btn to="/liste" color="blue" rounded>Liste des produits</v-btn>

          <v-btn to="/liste/ModeEmploisView" color="blue" rounded>TestModeEmplois</v-btn> <!-- Button test pour mode emplois, cette page ne doit pas etre accessible par la -->
          <v-btn to="/CreateArticleView" color="red" rounded>CreateArticle</v-btn>

        </v-toolbar-title>
      </v-app-bar>

      <v-main class="ma-11">
        <RouterView />
      </v-main>

      <v-footer border app bottom fixed padless>
        <v-row class="center">
         <v-col >
            {{ new Date().getFullYear() }} — <strong>Tech-Nature</strong>
         </v-col>
        </v-row>
      </v-footer>
  </v-app>
</template>