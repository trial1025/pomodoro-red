<template>
  <v-app>
    <v-app-bar color="primary">
      <v-container class="d-flex align-center">
        <v-app-bar-title>Applemodoro</v-app-bar-title>
        <v-btn prepend-icon="mdi-fruit-citrus" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-fruit-pineapple" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-fruit-watermelon" to="/settings">設定</v-btn>
      </v-container>
    </v-app-bar>
    <v-main class="bg-primary">
      <router-view v-slot="{ Component }">
        <keep-alive include="HomeView">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
</script>
