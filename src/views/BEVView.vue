<template>
    <v-app>
        <v-main :class="{'bg-image': step === 0}">
            <div v-if="$route.path === '/cargando-un-bev'">
                <CargandoBev  v-if="step === 0"/>
                <Inquietudes v-if="step === 1"/>
                <Modulos v-if="step === 2" />
                <Habitos v-if="step === 3" />
                <TiposCargadores v-if="step === 4" />
                <TableCargadores v-if="step === 5" />
                <Quiz v-if="step === 6" />
                <Quiz2 v-if="step === 7" />
                <Quiz3 v-if="step === 8" />
            </div>
        </v-main>
    </v-app>
</template>

<script setup>
import CargandoBev from '../components/bev/CargandoBev.vue';
import Inquietudes from '../components/bev/Inquietudes.vue'
import Modulos from '../components/bev/Modulos.vue';
import Habitos from '../components/bev/Habitos.vue'
import TiposCargadores from '../components/bev/TiposCargadores.vue';
import TableCargadores from '../components/bev/TableCargadores.vue';
import Quiz from '../components/bev/Quiz.vue'
import Quiz2 from '../components/bev/Quiz2.vue'
import Quiz3 from '../components/bev/Quiz3.vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore()
const {step} = storeToRefs(store)
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