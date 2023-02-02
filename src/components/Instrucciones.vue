<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row class="mt-3">
                    <v-col cols="12" class="p-0 m-0" :class="{
                        'bg-instructions': windowHeight>900, 
                        'bg-instructions-md': windowHeight< 700 && windowHeight> 660, 
                        'bg-instructions-sm': windowHeight<660}">
                        <v-row class="">
                            <v-col cols="5">
                                <div class="ml-5">
                                    <h1 class="text-white font-lato font-weight-light text-center" :class="{'font-size-96': windowHeight > 900, 'font-size-50':windowHeight < 700}">Instrucciones</h1>
                                    <p class="text-white font-avenir font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-20': windowHeight < 700}">
                                        Evolución de la movilidad: desde los primeros vehículos automóviles hasta las tecnologías 0 emisiones.
                                    </p>
                                    <p class="text-white font-avenir font-weight-regular ml-5 my-4" :class="{'font-size-22':windowHeight > 900, 'font-size-20': windowHeight < 700}">
                                        Fundamentos de electricidad en un vehículo eléctrico: cómo entenderlos y explicarlos de manera sencilla.
                                    </p>
                                    <p class="text-white font-avenir font-weight-regular ml-5" :class="{'font-size-22':windowHeight > 900,  'font-size-20': windowHeight < 700}">
                                        Autos eléctricos: entendiendo un BEV (vehículo eléctrico a baterías) y aplicaciones reales.
                                    </p>
                                    
                                    <div class="d-flex justify-center mt-4">
                                        <v-btn class="" rounded color="#FDBE2E" @click="gotoModuloDirectivo">
                                            <span class="font-avenir font-size-30 font-weight-thin" :class="{'font-size-30': windowHeight > 900, 'font-size-24': windowHeight < 700}">Continuar</span>
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="4"></v-col>
                            <v-col cols="3">
                                <v-img :src="user" max-height="410" class="position-image"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script setup>
import MainTemplate from './templates/MainTemplate.vue';
import Mens from '@/assets/instrucciones/narrador.png'
import user from '@/assets/instrucciones/user.png'
import { useCounterStore } from '../stores/counter';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {section, windowSize, windowHeight} = storeToRefs(store)
const router = useRouter()

function gotoModuloDirectivo(){
    section.value = 2
    router.push('/modulo-directivo')
}
</script>

<style scoped>

.bg-instructions{
  background-image: url('../assets/instrucciones/instrucciones2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 810px;
}

.bg-instructions-md{
  background-image: url('../assets/instrucciones/instrucciones2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 540px;
  margin-top: -22px;
}

.bg-instructions-sm{
  background-image: url('../assets/instrucciones/instrucciones2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 510px;
  margin-top: -22px;
}

@media(max-height: 700px) {
    .size-instruction{
        height: 450px;
    }
    .position-image{
        margin-top: -6vh;
    }
}

@media(min-height: 900px){
    .size-instruction{
        height: 580px;
    }
    .position-image{
        margin-top: -6vh;
    }
}
</style>