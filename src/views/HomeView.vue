<template>
  <v-app>
    <v-main class="bg-image">
      <the-welcome></the-welcome>
    </v-main>
  </v-app>
</template>

<script>
  import TheWelcome from '../components/TheWelcome.vue'

  export default {
    name: 'Home',

    components: {
      TheWelcome,
    },
  }
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