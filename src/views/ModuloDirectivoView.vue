<template>
    <v-app>
        <v-main class="bg-image">
            <modulo></modulo>
        </v-main>
    </v-app>
</template>

<script setup>
import Modulo from '../components/ModuloDirectivo.vue';
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