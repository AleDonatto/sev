<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Aplicaciones prácticas">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color mx-10 rounded-xl">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="text-center font-avenir font-size-36">El tiempo de carga de una batería dependerá principalmente de:</p>
                        </v-col>
                        <v-col cols="12" align="start" class="px-10 animate__animated animate__backInLeft">
                            <p class="font-size-30"><span class="font-weight-bold pr-3">1</span> La Capacidad de batería (kWh)</p>
                            <p class="font-size-30"><span class="text-yellow-p font-weight-bold pr-3">2</span> Estado de carga (% de bateria)</p>
                            <p class="font-size-30"><span class="font-weight-bold pr-3">3</span> La potencia del cargador utilizado (Voltaje X Amperaje/1,000) kW.</p>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color mx-10 rounded-xl">
                        <v-col cols="3">
                            <v-img :src="lowBaterry" max-height="130"></v-img>
                        </v-col>
                        <v-col cols="2" align-self="center">
                            <v-img :src="comparation" max-height="50"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="completBattery" max-height="130"></v-img>
                        </v-col>

                        <v-col cols="12" class="mt-6">
                            <p class="font-size-30 font-avenir">
                                Ejemplo: Cuánto tiempo tardará en cargarse de 20% hasta 100% la batería de un vehículo eléctrico con 
                                una batería de 50 kWh si se utiliza una cargador que trabaja a 220 volts y 10 amper?
                            </p>
                        </v-col>
                        <v-col cols="8">
                            <p class="font-size-24 font-avenir">Potencia del cargador: 220 V X 10 A /1000 = 2.2 kW</p>
                            <p class="font-size-24 font-avenir">50 kWh X 0.8 = 40 kWh</p>
                            <p class="font-size-24 font-avenir">40 kWh / 2.2 kW = 18.8 h</p>
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
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>