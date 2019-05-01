<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Comic/>
    </v-content>
  </v-app>
</template>

<script>
import MarvelApi from './services/MarvelAPI'
import Comic from './components/Comic'

export default {
  name: 'App',
  components: {
    Comic
  },
  data () {
    return {
      comics: []
    }
  },
  created() {
    MarvelApi.getAllComics(10, comics => this.comics = comics.data.results);
  },
  methods: {
    getImage(comics) {
      if (comics.images.length) {
        return comics.images[0].path + '/portrait_medium.jpg';
      }
    }
  }
}
</script>
