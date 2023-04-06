<template>
  <br>
  <v-app >
    <h1>{{articleList.length}} articles trouvés</h1>
   <v-main>
     <v-card
        class="mx-auto"
        width="70%"
    >
      <!-- <select>
         <div v-for="item in articleList">
           <option :value="item._id" :label="item.code"></option>
         </div>
       </select>-->

        <v-list lines="one">
          <v-list-item v-for="item in articleList"
                       :key="item._id"
                       :title="item.Code"
          >
            <v-btn color="red" class="ma-auto" >
                        <v-icon end icon="mdi-delete"></v-icon>
            </v-btn>
            <v-btn color="green" class="ma-auto" @click=modif(item._id) >
                        <v-icon end icon="mdi-pencil"></v-icon>
            </v-btn>
          </v-list-item>
        </v-list>

    </v-card>
   </v-main>
  </v-app>
</template>

<script>

import ArticleService from "../services/Article.Service";


export default {
  name: "ListeView",
  data(){
    return{
      articleList:[]
    }
  },
  async mounted(){
    this.displayArticle();
  },
  methods:{
    async displayArticle(){
      var article = await ArticleService.getAll();
      this.articleList = article.data;
      console.log(article.data);
    },
    async modif(id){
      await this.$store.commit("setIdArticle", id);
      this.$router.push({name: "ModeEmplois"});
      //console.log(id)
    }
  }

  /*data: () => ({

    //list content
    items: [
      {
        name: 'Produit ####',
        id: 1,
        props: {
          appendIcon: 'mdi-delete',
        },
      },
      {
        name: 'Produit ####',
        id: 2,
        props: {
          appendIcon: 'mdi-delete',
        },
      },
      {
        name: 'Produit ####',
        id: 3,
        props: {
          appendIcon: 'mdi-delete',
        },
      },
    ],
  }),*/
}
</script>

<style scoped></style>