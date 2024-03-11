<template>
  <v-app>
    <v-app-bar color="primary">
      <v-container class="d-flex align-center">
        <v-col lg="8" md="8" sm="12" class="d-flex justify-space-between mx-auto">
          <v-app-bar-title>Pomodoro</v-app-bar-title>
          <div>
            <v-btn icon="mdi-home" to="/"></v-btn>
            <v-btn icon="mdi-format-list-bulleted" to="/list"></v-btn>
            <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
            <v-btn icon="mdi-music" to="/settings"></v-btn>
          </div>
        </v-col>
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
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
