<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos Básicos">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row class="rounded-xl mx-10 bg-color" justify="center" :class="{'mt-10': windowHeight>900, 'mt-1': windowHeight<700}">
                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft">
                            <p class="font-weight-bold font-avenir" :class="{'font-size-30':windowHeight>900, 'font-size-24':windowHeight<700}">Corriente Alterna (CA)</p>
                            <v-img :src="talalterno" :max-height="windowHeight>900 ? '320': '160'" class="mt-0"></v-img>
                            <ul class="mt-2" :class="{'w-50': windowHeight>900, 'w-100':windowHeight<700}">
                                <li class="text-left">Se puede transmitir largas distancias sin grandes pérdidas.</li>
                                <li class="text-left">No se puede almacenar.</li>
                                <li class="text-left">Es la que se encuentra en las conexiones “de pared”.</li>
                            </ul>
                        </v-col>
                        <v-col cols="1">
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="5" class="animate__animated animate__backInRight">
                            <p class="font-weight-bold font-avenir text-center" :class="{'font-size-30':windowHeight>900, 'font-size-24':windowHeight<700}">Corriente Directa (CD)</p>
                            <v-img :src="taldirecta" :max-height="windowHeight>900 ? '320': '160'" class="mt-5"></v-img>
                            <ul class="mt-2" :class="{'w-50': windowHeight>900, 'w-100':windowHeight<700}">
                                <li class="text-left">No se puede transmitir largas distancias ya que habría grandes pérdidas de voltaje.</li>
                                <li class="text-left">Se puede almacenar en baterías de manera eficiente</li>
                            </ul>
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
import talalterno from '@/assets/electricidad/taladro-alterna.png'
import taldirecta from '@/assets/electricidad/taladro-directo.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {windowSize, windowHeight} = storeToRefs(store)
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.line-vertical{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: white;   
    z-index: 1;
}
</style>