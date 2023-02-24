<template>
    <v-app>
        <v-main class="bg-gradient">
            <gracias />
        </v-main>
    </v-app>
</template>

<script>
import Gracias from '../components/Gracias.vue';

export default {
    data(){
        return {}
    },
    components: {
        Gracias
    }
}
</script>

<style scoped>
.bg-gracias {
  background-image: url('../assets/gracias.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
}

.bg-gradient{
    background: linear-gradient(268.36deg, #000000 25.91%, rgba(0, 0, 0, 0) 86.83%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}
</style>