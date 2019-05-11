<template>
  <div id="app">
    <Home />
    
    <v-card class="pa-5" color="indigo" flat>
      <Menu/>
      <v-container fluid grid-list-md text-xs-center>
        <v-layout row wrap>
          
          <!-- <Ads></Ads> -->
          <ListagemQuadrinhos/>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>


<script>
import Home from "@/views/Home"
// import MarvelApi from "@/services/MarvelAPI";
import Menu from "@/components/Menu";
// import Ads from "@/components/Ads";
import ListagemQuadrinhos from "@/components/ListagemQuadrinhos";
// import Quadrinho from "@/components/Quadrinho";
export default {
  name: "App",
  components: {
    Home,
    Menu,
    // Ads,
    ListagemQuadrinhos
    // Quadrinho
  }
};
</script>
