<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row class="mt-3">
                    <v-col cols="12" class="bg-instructions">
                        <v-row class="size-instruction" style="background-color: black;">
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
                            <v-col cols="7" align-self="end">
                                <v-img :src="Mens" class="position-image" :class="{'size-image' : windowHeight > 900, 'size-image-md': windowHeight < 700}"></v-img>
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
  background-image: url('../assets/welcome/fondo-left.png');
}

.size.image{
  height: 910px;
}

.size-image-md{
    height: 530px;
}
@media(max-height: 700px) {
    .size-instruction{
        height: 450px;
    }
    .position-image{
        margin-top: -5.3vh;
        margin-left: 130px;
    }
}

@media(min-height: 900px){
    .size-instruction{
        height: 580px;
    }
    .position-image{
        margin-top: -4.8vh;
        margin-left: 150px;
    }
}
</style>