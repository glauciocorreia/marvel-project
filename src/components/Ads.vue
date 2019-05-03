<template>
        <div
          class=""
          :style="`background-image: url(backgroundAds)`">
          
        </div>

</template>

<script>
export default {
  name: 'ads',
  data () {
    return {

    }
  },
  computed: {
    backgroundAds() {
      require('../assets/imagens/backgroundADS.png')
    }
  }

}
</script>

<style>

</style>
