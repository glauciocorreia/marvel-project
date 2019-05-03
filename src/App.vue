<template>
  <div id="app">
    <Ads></Ads>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex v-for="quadrinho in quadrinhos" :key="quadrinho.id" xs12 sm12 md6 lg6 xl4>
          <quadrinho
            :titulo="quadrinho.title"
            :descricao="quadrinho.description"
            :imagem="getImagem(quadrinho)"
          ></quadrinho>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import MarvelApi from "@/services/MarvelAPI";
import Ads from "@/components/Ads";
import Quadrinho from "@/components/Quadrinho";
export default {
  name: "App",
  components: {
    Ads,
    Quadrinho
  },
  data() {
    return {
      quadrinhos: []
    };
  },
  created() {
    MarvelApi.getAllComics(10, comics => {
      this.quadrinhos = comics.data.data.results;
    });
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + "/portrait_medium.jpg";
      }
    }
  }
};
</script>
