<template>
    <v-layout>
        <v-main class="bg-image">
            <instrucciones></instrucciones>
        </v-main>
    </v-layout>
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