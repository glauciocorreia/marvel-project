<template>
  <v-card>
    <v-card-title>
      <h2>{{ title }}</h2>
      <v-img :src="imagem"></v-img>
      <p>{{ description }}</p>
    </v-card-title>
    <v-card-actions>
    </v-card-actions>
  </v-card>
  
</template>

<script>
export default {
  name: 'comic',
  props: {
    imagem: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }

}
</script>

<style scoped>

</style>
