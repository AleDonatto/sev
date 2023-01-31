<template>
    <div>
        <content-template title="" subtitle="Tipos de tren <br/> motriz mas comunes">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="9"></v-col>
                    </v-row>

                    <v-row justify="center" class="mx-5 animate__animated animate__backInLeft" :class="{'mt-4': windowHeight>900, 'mt-0': windowHeight<700}">
                        <v-col cols="3">
                            <v-img :src="combustion" :max-height="windowHeight>900 ? '450': '270'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="hibridos" :max-height="windowHeight>900 ? '450': '270'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="electricos" :max-height="windowHeight>900 ? '450': '270'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="otros" :max-height="windowHeight>900 ? '450': '270'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-gradient mx-5 animate__animated animate__backInRight">
                        <v-col cols="3" align="center">
                            <p class="font-weight-bold font-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">Altas</p>
                        </v-col>
                        <v-col cols="3" align="center">
                            <p class="font-weight-bold font-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">Medias/bajas</p>
                        </v-col>
                        <v-col cols="6" align="center">
                            <p class="font-weight-bold font-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">Cero emisiones</p>
                        </v-col>
                    </v-row>

                    <!--ICE-->
                    <v-row justify="center" v-if="tipos.ice">
                        <v-col cols="12">
                            <v-img :src="icm7" max-height="650"></v-img>
                        </v-col>
                    </v-row>
                    <!--MHEV-->
                    <v-row justify="center" v-if="tipos.mhev">
                        <v-col cols="12">
                            <v-img :src="mhev7" max-height="650"></v-img>
                        </v-col>
                    </v-row>
                    <!--HEV-->
                    <v-row justify="center" v-if="tipos.hev">
                        <v-col cols="12">
                            <v-img :src="hev7" max-height="650"></v-img>
                        </v-col>
                    </v-row>
                    <!--PHEV-->
                    <v-row justify="center" v-if="tipos.phev">
                        <v-col cols="12">
                            <v-img :src="phev7" max-height="650"></v-img>
                        </v-col>
                    </v-row>
                    <!--BEV-->
                    <v-row justify="center" v-if="tipos.bev">
                        <v-col cols="12">
                            <v-img :src="bev7" max-height="650"></v-img>
                        </v-col>
                    </v-row>
                    <v-row justify="center" v-if="tipos.fcev">
                        <v-col cols="12">
                            <v-img :src="fcev7" max-height="650"></v-img>
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
import combustion from '@/assets/evolucion/combustion.png'
import hibridos from '@/assets/evolucion/hibridos.png'
import electricos from '@/assets/evolucion/electricos.png'
import otros from '@/assets/evolucion/otros.png'
import icm7 from '@/assets/evolucion/icm/icm7.png'
import mhev7 from '@/assets/evolucion/mhev/mhev7.png'
import hev7 from '@/assets/evolucion/hev/hev7.png'
import phev7 from '@/assets/evolucion/phev/phev7.png'
import bev7 from '@/assets/evolucion/pev/pev7.png'
import fcev7 from '@/assets/evolucion/fcev/fcev7.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted, reactive } from '@vue/runtime-core';

const store = useCounterStore()
const {canNext, windowHeight, windowSize} = storeToRefs(store)

onMounted(() => {
    canNext.value = true
})

const tipos = reactive({
    motors: true,
    ice: false,
    mhev: false,
    hev: false,
    phev: false,
    bev: false,
    fcev: false
})
</script>

<style scoped>
.bg-gradient{
    background: linear-gradient( 270deg, #FED374 28.78%, rgba(254, 211, 116, 0) 136.06%);;
}
</style>