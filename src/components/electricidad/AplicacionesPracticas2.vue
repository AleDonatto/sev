<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Aplicaciones prácticas">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color mx-10 rounded-xl" v-if="count === 0">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="text-center font-avenir" :class="{'font-size-36': windowHeight>900, 'font-size-24': windowHeight<700}">El tiempo de carga de una batería dependerá principalmente de:</p>
                        </v-col>
                        <v-col cols="12" align="start" class="px-10 animate__animated animate__backInLeft">
                            <p class="" :class="{'font-size-36': windowHeight>900, 'font-size-24': windowHeight<700}">
                                <span class="font-weight-bold pr-3">1</span> La Capacidad de batería (kWh)
                            </p>
                            <p class="" :class="{'font-size-36': windowHeight>900, 'font-size-24': windowHeight<700}">
                                <span class="text-yellow-p font-weight-bold pr-3">2</span> Estado de carga (% de bateria)
                            </p>
                            <p class="" :class="{'font-size-36': windowHeight>900, 'font-size-24': windowHeight<700}">
                                <span class="font-weight-bold pr-3">3</span> La potencia del cargador utilizado (Voltaje X Amperaje/1,000) kW.
                            </p>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color mx-10 rounded-xl" v-if="count === 1">
                        <v-col cols="3">
                            <v-img :src="lowBaterry" :max-height="windowHeight>900 ? '130': '90'"></v-img>
                        </v-col>
                        <v-col cols="2" align-self="center">
                            <v-img :src="comparation" max-height="50"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="completBattery" :max-height="windowHeight>900 ? '130': '90'"></v-img>
                        </v-col>

                        <v-col cols="12" class="mt-6">
                            <p class="font-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-20': windowHeight<700}">
                                Ejemplo: Cuánto tiempo tardará en cargarse de 20% hasta 100% la batería de un vehículo eléctrico con 
                                una batería de 50 kWh si se utiliza una cargador que trabaja a 220 volts y 10 amper?
                            </p>
                        </v-col>
                        <v-col cols="8">
                            <p class="font-avenir" :class="{'font-size-24': windowHeight>900, 'font-size-20': windowHeight<700}">Potencia del cargador: 220 V X 10 A /1000 = 2.2 kW</p>
                            <p class="font-avenir" :class="{'font-size-24': windowHeight>900, 'font-size-20': windowHeight<700}">50 kWh X 0.8 = 40 kWh</p>
                            <p class="font-avenir" :class="{'font-size-24': windowHeight>900, 'font-size-20': windowHeight<700}">40 kWh / 2.2 kW = 18.8 h</p>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import lowBaterry from '@/assets/electricidad/low-battery.png'
import completBattery from '@/assets/electricidad/complet-battery.png'
import comparation from '@/assets/electricidad/comparation.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

const store = useCounterStore()
const {windowHeight, windowSize, count} = storeToRefs(store)

onMounted(() => {
    count.value = 0
})
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>