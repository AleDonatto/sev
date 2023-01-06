<template>
    <v-app>
        <v-main class="bg-image">
            <instrucciones></instrucciones>
        </v-main>
    </v-app>
</template>

<script setup>
import Instrucciones from '../components/Instrucciones.vue'
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