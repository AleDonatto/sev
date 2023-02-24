<template>
    <v-app>
        <v-main class="bg-image">
            <temario></temario>
        </v-main>
    </v-app>
</template>

<script>
import Temario from '../components/Temario.vue';

export default {
    data(){
        return{}
    },
    components: {
        Temario
    }
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