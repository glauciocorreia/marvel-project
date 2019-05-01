<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div
          class=""
          :style="`background-image: url(backgroundAds)`">
          
        </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ads',
  data () {
    return {

    }
  },
  computed: {
    backgroundAds: (() => require('../assets/imagens/backgroundADS.png'))
  }

}
</script>

<style>

</style>
