<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos Básicos">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="font-avenir font-size-22">
                                        La segunda unidad que vamos a conocer se llama Amperio o Amper. Esta unidad mide la intensidad de 
                                        la corriente eléctrica, en palabras coloquiales, que tan "fuerte" es esta corriente.
                                        <br><br>
                                        En este ejemplo podemos observar un convertidor de corriente para conectar un teléfono móvil. 
                                        En ambos casos se pasa de 110 Voltios de corriente alterna (la toma de corriente de "pared") y 
                                        se transforma a 5 Voltios de corriente directa que es lo que manejan los dispositivos USB. 
                                        Sin embargo, en el "cuadrito" pequeño de la izquierda se maneja 1 amperio de intensidad y en 
                                        el de la derecha es de 2.1 amperios.
                                        <br><br>
                                        En consecuencia, la corriente eléctrica suministrada por el adaptador de la derecha tiene un 
                                        poco más del doble de intensidad y, por lo mismo, podrá cargar los dispositivos con mayor 
                                        velocidad. Por eso es que se les conoce como "cargadores rápidos".
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10">
                        <v-col cols="12" align="center" class="animate__animated animate__backInDown">
                            <p class="font-avenir" :class="{'font-size-30':windowHeight>900, 'font-size-26':windowHeight<700}"><span class="font-weight-bold">Amper:</span> unidad de medición de la intensidad de la corriente eléctrica</p>
                        </v-col>
                        
                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft mt-5">
                            <v-img :src="cubito" :max-height="windowHeight>900 ? '230': '150'"></v-img>
                            <p class="font-weight-bold font-avenir font-size-30 mt-5">5 Volts, 1 Amper </p>
                        </v-col>
                        <v-col cols="1">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" class="mt-5 animate__animated animate__backInRight">
                            <v-img :src="cubo" :max-height="windowHeight>900 ? '230': '150'"></v-img>
                            <p class="font-avenir font-size-30 font-weight-bold text-center mt-5">5 Volts, 2.1 Amper</p>
                        </v-col>

                    </v-row>

                    <v-snackbar v-model="snackbar" location="bottom right" color="#FDBD31" timeout="10000" class="mx-16" height="200" width="320" rounded="xl" multi-line vertical>
                        <template v-slot:actions>
                            <v-btn @click="snackbar=!snackbar"><span class="text-black">Cerrar</span></v-btn>
                        </template>
                        <p class="font-weight-bold text-black font-avenir font-size-20 px-5 py-4">
                            El amperaje hace referencia a qué tan intensa es la corriente. Por ejemplo: a mayor amperaje, mayor velocidad de carga
                        </p>
                    </v-snackbar>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import cubito from '@/assets/electricidad/cubito.png'
import cubo from '@/assets/electricidad/cubo.png'
import { useCounterStore } from '../../stores/counter';
import { ref } from '@vue/reactivity';
import { storeToRefs } from 'pinia';

const snackbar = ref(true)
const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)

</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.vertical-line{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: white;   
    z-index: 1;
}
</style>