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

                    <v-row justify="center" class="rounded-xl bg-color mx-10 px-5">
                        <v-col cols="12" align="start" class="animate__animated animate__backInDown">
                            <p class="font-avenir font-size-30">El costo de carga de una bateria dependerá de: </p>
                        </v-col>
                        <v-col cols="10" class="animate__animated animate__backInLeft">
                            <p class="font-avenir font-size-24"><span class="font-weight-bold pr-3">1</span> La capacidad de la bateria (kWh) y su estado de carga.</p>
                            <p class="font-avenir font-size-24"><span class="font-weight-bold text-yellow-p pr-3">2</span> El precio por kWh sumistrado.</p>
                        </v-col>

                        <v-col cols="12" class="animate__animated animate__backInLeft">
                            <p class="font-avenir font-size-30">¿Cuanto cuesta cargar 20% hasta 100% de la bateria de un SEV E-WAN Bold (29.4 kWh)?</p>
                        </v-col>

                        <v-col cols="9" class="animate__animated animate__backInLeft">
                            <p class="font-avenir font-size-24">Consumo básico: $0.859/kWh 🡪 23.5 X 0.859 = $20.18.</p>
                            <p class="font-size-24 font-avenir">Consumo excedente: $3.042/kWh 🡪 23.5 X 3.042 = $71.48.</p>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10 px-5">
                        <v-col cols="3">
                            <v-img :src="costoLowBaterry" max-height="130"></v-img>
                        </v-col>
                        <v-col cols="2" align-self="center">
                            <v-img :src="comparation" max-height="50"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="costoCompleteBattery" max-height="130"></v-img>
                        </v-col>

                        <v-col cols="12">
                            <p class="font-avenir font-size-30">Ejercicio: ¿Cuánto cuesta cargar de 20% hasta 100% la batería de un vehículo eléctrico que cuenta con una batería de 50 kWh?</p>
                        </v-col>
                        <v-col cols="9">
                            <p class="font-avenir font-size-24">Consumo básico: $0.859/kWh 🡪 23.5 X 0.859 = $20.18.</p>
                            <p class="font-size-24 font-avenir">Consumo excedente: $3.042/kWh 🡪 23.5 X 3.042 = $71.48.</p>
                        </v-col>

                        <v-col cols="12" align="end">
                            <p class="">*Nota: revisar la tarifa que aplica en cada caso ya que puede cambiar dependiendo de varios factores.</p>
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
import costoLowBaterry from '@/assets/electricidad/costoLowBattery.png'
import costoCompleteBattery from '@/assets/electricidad/costoCompleteBattery.png'
import comparation from '@/assets/electricidad/comparation.png'
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>