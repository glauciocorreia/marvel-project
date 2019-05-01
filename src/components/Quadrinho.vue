<template>
  <v-hover>
    <v-card class="card-default" height="300px">
      <v-img class="imagem-quadrinho" :src="imagem"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0 text-xs-center">{{ titulo }}</h3>
          <div>{{ descricao }}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
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