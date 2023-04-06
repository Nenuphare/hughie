<template>
<br>
<br>
<br>
<br>
<h1>Ici mode emplois de l'objet  choisi</h1>
    <div v-for="(photo, explication) in modeEmplois">
        {{photo}}
        {{explication}}

    </div>
  {{$store.state.idArticle}}
  {{$store.destroy("idArticle")}}
</template>
<script>
export default{
  name: "ModeEmploisView"
}

</script>