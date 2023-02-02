<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p>Conceptos Básicos</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10" :class="{'mt-10':windowHeight>900, 'mt-0':windowHeight<700}">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="text-center font-avenir" :class="{'font-size-36':windowHeight>900, 'font-size-28':windowHeight<700}">
                                <span class="font-weight-bold">Volt:</span> unidad de medicion de fuerza eléctrica.
                            </p>
                        </v-col>
                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft">
                            <p class="font-weight-bold font-avenir" :class="{'font-size-36':windowHeight>900, 'font-size-28':windowHeight<700}">Corriente Directa</p>
                            <v-row justify="center">
                                <v-col cols="6">
                                    <v-img :src="pila" :max-height="windowHeight >900 ? '220': '150'"></v-img>
                                    <p class="font-weight-bold font-avenir font-size-24">9 V</p>
                                </v-col>
                                <v-col cols="6">
                                    <v-img :src="bateria" max-height="219"></v-img>
                                    <p class="font-weight-bold font-avenir font-size-24">12 V</p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="1">
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="5" class="animate__animated animate__backInRight">
                            <p class="font-weight-bold font-avenir text-center" :class="{'font-size-36':windowHeight>900, 'font-size-28':windowHeight<700}">Corriente Alterna</p>
                            <v-row justify="center">
                                <v-col cols="12">
                                    <v-img :src="contacto" :max-height="windowHeight >900 ? '220': '150'" ></v-img>
                                    <v-row justify="center" :class="{'mx-10':windowHeight>900, 'mx-2': windowHeight<700}">
                                        <v-col cols="6" align="center">
                                            <p class="font-avenir">El voltaje hace referencia a la “cantidad” de corriente</p>
                                        </v-col>
                                        <v-col cols="6" align="center">
                                            <p class="font-weight-bold font-avenir font-size-24">110 V</p>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>    
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
import pila from '@/assets/electricidad/pila.png'
import bateria from '@/assets/electricidad/bateria.png'
import contacto from '@/assets/electricidad/contacto.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted } from '@vue/runtime-core';

const store = useCounterStore()
const {canNext, windowHeight, windowSize} = storeToRefs(store)

onMounted(() => {
    canNext.value = true 
})
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