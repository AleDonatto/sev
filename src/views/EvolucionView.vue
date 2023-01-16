<template>
    <v-app>
        <v-main class="bg-image">
            <div v-if="$route.path === '/evolucion-de-movilidad'">
                <Evolucion1 v-if="step === 0"/>
                <Evolucion2 v-if="step === 1" />
                <Evolucion3 v-if="step === 2" />
                <Evolucion4 v-if="step === 3" />
                <Tipostren v-if="step === 4" />
                <TipotrenTable v-if="step === 5" />
                <Repaso v-if="step === 6" />
                <Repaso2 v-if="step === 7" />
                <Repaso3 v-if="step === 8" />
            </div>
        </v-main>
        
        <!--<v-footer color="black" class="">
            <p>pruebas</p>
        </v-footer>-->
    </v-app>
</template>

<script setup>
import Evolucion1 from '@/components/evolucion/Evolucion1.vue'
import Evolucion2 from '../components/evolucion/Evolucion2.vue';
import Evolucion3 from '../components/evolucion/Evolucion3.vue';
import Evolucion4 from '../components/evolucion/Evolucion4.vue';
import Tipostren from '../components/evolucion/Tipostren.vue';
import TipotrenTable from '../components/evolucion/TipotrenTable.vue';
import Repaso from '../components/evolucion/Repaso.vue';
import Repaso2 from '../components/evolucion/Repaso2.vue';
import Repaso3 from '../components/evolucion/Repaso3.vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore()

const {step} = storeToRefs(store)

</script>

<style scoped>

</style>