<template>
  <div id="app" class="md-layout">
    <v-container grid-list-xl>
      <v-layout row wrap>
        <div v-for="quadrinho in quadrinhos" :key="quadrinho.id" xs12 sm12 md6 lg4 xl2>
          <quadrinho
            :titulo="quadrinho.title"
            :descricao="quadrinho.description"
            :imagem="getImagem(quadrinho)"
          ></quadrinho>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import MarvelApi from "@/services/MarvelAPI";
import Quadrinho from "@/components/Quadrinho";
export default {
  name: "App",
  components: {
    Quadrinho
  },
  data() {
    return {
      quadrinhos: []
    };
  },
  created() {
    var self = this;
    MarvelApi.getAllComics(10, comics => {
      self.quadrinhos = comics.data.data.results;
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
