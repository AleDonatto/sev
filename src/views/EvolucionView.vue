<template>
    <v-layout>
        <v-main class="bg-image">
            <div v-if="$route.path === '/evolucion-de-movilidad'">
                <Evolucion1 v-if="step === 0"/>
                <Evolucion2 v-if="step === 1" />
                <Evolucion3 v-if="step === 2" />
                <Evolucion4 v-if="step === 3" />
                <Tipostren v-if="step === 4" />
                <TipotrenTable v-if="step === 5" />
                <Repaso v-if="step === 6" />
                <Correcto v-if="step === 7" />
                <Repaso2 v-if="step === 8" />
                <Correcto v-if="step === 9" />
                <Repaso3 v-if="step === 10" />
                <Correcto v-if="step === 11" />
            </div>
        </v-main>
        
        <!--<v-footer color="black" class="">
            <p>pruebas</p>
        </v-footer>-->
    </v-layout>
    <v-footer color="black" class="index-2" inset app v-if="!(step === 7) && !(step === 9) && !(step === 11)">
        <p>© 2022 Todos los derechos reservados</p>
    </v-footer>
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
import Correcto from '../components/Correcto.vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore()

const {step} = storeToRefs(store)

</script>

<style scoped>

</style>