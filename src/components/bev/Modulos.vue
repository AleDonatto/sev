<template>
    <div>
        <content-template subtitle="<p class='font-avenir'>Cargando un BEV</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-5': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="h-100 mx-10 px-5 py-5 rounded-xl bg-boxstep-content">
                        <v-col cols="3" class="animate__animated animate__backInDown">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '580': '480'">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 font-weight-bold font-avenir text-center" :class="{'py-2 font-size-28': windowHeight>900, 'font-size-20': windowHeight<700}">Modo 1</p>
                                    </div>
                                </template>

                                <v-card-text>
                                    <v-img :src="vehicles" max-height="80"></v-img>

                                    <div class="bg-yellow-p mt-5" :class="{'font-size-12': windowHeight<700}">
                                        <p class="px-1 py-2">
                                            Conexión de baja corriente (AC) por medio de un enchufe normal.
                                            <br><br>
                                            Se utiliza principalmente para vehículos ligeros.
                                        </p>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInUp">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '580': '480'">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 font-weight-bold font-avenir text-center" :class="{'py-2 font-size-28': windowHeight>900, 'font-size-20': windowHeight<700}">Modo 2</p>
                                    </div>
                                </template>

                                <v-card-text>
                                    <v-img :src="control" max-height="80"></v-img>

                                    <div class="bg-yellow-p mt-5 h-100">
                                        <p class="px-1 py-2" :class="{'font-size-12': windowHeight<700}">
                                            Se utiliza un cable que contiene una unidad de control y se conecta a un enchufe ordinario (CA).
                                            <br><br>
                                            Puede conectarse a 110V o a 220V, y con ello aumentar la velocidad de carga.
                                            <br><br>
                                            <span class="font-weight-bold">
                                            El Cable de Carga que se incluye con cada vehículo nuevo SEV es considerado modo 2 de carga.
                                            </span>
                                        </p>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInDown">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '580': '480'">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 font-weight-bold font-avenir text-center" :class="{'py-2 font-size-28': windowHeight>900, 'font-size-20': windowHeight<700}">Modo 3</p>
                                    </div>
                                </template>

                                <v-card-text>
                                    <v-img :src="comunicacion" max-height="80"></v-img>

                                    <div class="bg-yellow-p mt-5" :class="{'font-size-12': windowHeight<700}">
                                        <p class="px-1 py-2">
                                            Cargador de pared conectado a la red eléctrica (CA) a 220V.
                                            <br><br>
                                            La unidad de control se encuentra instalada en el cargador de pared o Wallbox.
                                            <br><br>
                                            <span class="font-weight-bold">
                                                Independientemente de la potencia que pueda suministrar el cargador, el vehículo podrá aprovechar la potencia de acuerdo a sus capacidades.
                                            </span>
                                        </p>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInUp">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '580': '480'">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 font-weight-bold font-avenir text-center" :class="{'py-2 font-size-28': windowHeight>900, 'font-size-20': windowHeight<700}">Modo 4</p>
                                    </div>
                                </template>
                                <v-card-text>
                                    <v-img :src="cable" max-height="80"></v-img>

                                    <div class="bg-yellow-p mt-5" :class="{'font-size-12': windowHeight<700}">
                                        <p class="px-1 py-2">
                                            Carga rápida de Corriente Directa (CD).
                                            <br><br>
                                            Se utiliza sólo para vehículos 100% eléctricos.
                                            <br><br>
                                            <span class="font-weight-bold">
                                            La potencia de estos cargadores puede llegar a superar los 300 kW, 
                                            sin embargo no todos los autos lo soportan.
                                            </span>
                                        </p>
                                    </div>
                                </v-card-text>
                            </v-card>
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
import cable from '@/assets/cargando/cable.png'
import comunicacion from '@/assets/cargando/comunicacion.png'
import control from '@/assets/cargando/control.png'
import vehicles from '@/assets/cargando/vehicles.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
</script>

<style scoped>

</style>