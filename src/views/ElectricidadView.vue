<template>
    <v-app>
        <v-main :class="{'bg-image' : step === 0}">
            <div v-if="$route.path === '/fundamentos-de-electricidad'">
                <Presentacion v-if="step === 0"/>
                <ConceptosBasicos v-if="step === 1"/>
                <ConceptosBasicos2 v-if="step === 2"/>
                <ConceptosBasicos3 v-if="step === 3"/>
                <ConceptosBasicos4 v-if="step === 4"/>
                <ConceptosBasicos5 v-if="step === 5"/>
                <ConceptosBasicos6 v-if="step === 6"/>
                <ConceptosBasicos7 v-if="step === 7"/>
            </div>
        </v-main>
    </v-app>
</template>

<script setup>
import Presentacion from '../components/electricidad/Presentacion.vue';
import ConceptosBasicos from '../components/electricidad/ConcentosBasicos.vue';
import ConceptosBasicos2 from '../components/electricidad/ConceptosBasicos2.vue';
import ConceptosBasicos3 from '../components/electricidad/ConceptosBasicos3.vue';
import ConceptosBasicos4 from '../components/electricidad/ConceptosBasicos4.vue';
import ConceptosBasicos5 from '../components/electricidad/ConceptosBasicos5.vue';
import ConceptosBasicos6 from '../components/electricidad/ConceptosBasicos6.vue';
import ConceptosBasicos7 from '../components/electricidad/ConceptosBasicos7.vue';
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';

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