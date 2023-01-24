<template>
    <v-app>
        <v-main>
            <div v-if="$route.path === '/cargando-bev'">
                <CargandoBev  v-if="step === 0"/>
                <Inquietudes v-if="step === 1"/>
            </div>
        </v-main>
    </v-app>
</template>

<script setup>
import CargandoBev from '../components/bev/CargandoBev.vue';
import Inquietudes from '../components/bev/Inquietudes.vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore()
const {step} = storeToRefs(store)
</script>

<style>

</style>