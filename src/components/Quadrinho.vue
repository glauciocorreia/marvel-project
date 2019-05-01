<template>
    <v-flex>
      <v-card class="card-default">
        <v-card-title>{{ titulo }}</v-card-title>
        <v-img class="imagem-quadrinho" :src="imagem"></v-img>
        <v-card-actions>{{ descricao }}</v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
export default {
  name: "quadrinho",
  props: {
    imagem: {
      type: String
    },
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String
    }
  }
};
</script>

<style scoped>
.imagem-quadrinho {
  width: 120px;
}
.card-default {
  padding: 28px;
  margin: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #fff !important;
}
</style>