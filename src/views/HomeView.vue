<template>
  <v-layout>
    <v-main class="bg-image">
      <the-welcome></the-welcome>
    </v-main>
  </v-layout>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<style scoped>
.bg-image {
  background-image: url('../assets/welcome/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
}
</style>

