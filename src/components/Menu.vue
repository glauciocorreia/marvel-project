<template>
  <v-card class="d-inline-block elevation-12">
    <v-navigation-drawer floating permanent stateless value="true">
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" },
        { title: "Quadrinhos", icon: "question_answer" },
        { title: "Personagens", icon: "question_answer" },
        { title: "About", icon: "question_answer" },
        { title: "About", icon: "question_answer" }
      ],
      right: null
    };
  }
};
</script>
<style>
</style>
