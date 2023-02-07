<template>
    <div>
        <content-template title="" subtitle="Tipos de tren <br/> motriz mas comunes">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="space-between">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="2" align="end">
                            <v-img :src="Mcombustion" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count >= 1 && count <= 7"></v-img>
                            <v-img :src="Mcombustion" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count >= 8 && count <=14"></v-img>
                            <v-img :src="Mhibrido" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count >= 15 && count <=21"></v-img>
                            <v-img :src="Mcombustion" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count>=22 && count <=28"></v-img>
                            <v-img :src="Mbateria" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count>=29 && count <=35"></v-img>
                            <v-img :src="Mcombustion" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count>=36 && count<=42"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-5 animate__animated animate__backInLeft" :class="{'mt-4': windowHeight>900, 'mt-0': windowHeight<700}" v-if="count === 0">
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

                    <v-row justify="center" class="bg-gradient mx-5 animate__animated animate__backInRight" v-if="count === 0">
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
                    <v-row justify="center" v-if="count >= 1 && count <= 7">
                        <v-col cols="12">
                            <v-img :src="icm" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 1"></v-img>
                            <v-img :src="icm2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 2"></v-img>
                            <v-img :src="icm3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 3"></v-img>
                            <v-img :src="icm4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 4"></v-img>
                            <v-img :src="icm5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 5"></v-img>
                            <v-img :src="icm6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 6"></v-img>
                            <v-img :src="icm7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 7"></v-img>
                        </v-col>
                    </v-row>
                    <!--MHEV-->
                    <v-row justify="center" v-if="count >= 8 && count <=14">
                        <v-col cols="12">
                            <v-img :src="mhev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 8"></v-img>
                            <v-img :src="mhev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 9"></v-img>
                            <v-img :src="mhev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 10"></v-img>
                            <v-img :src="mhev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 11"></v-img>
                            <v-img :src="mhev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 12"></v-img>
                            <v-img :src="mhev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 13"></v-img>
                            <v-img :src="mhev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 14"></v-img>
                        </v-col>
                    </v-row>
                    <!--HEV-->
                    <v-row justify="center" v-if="count >= 15 && count <=21">
                        <v-col cols="12">
                            <v-img :src="hev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 15"></v-img>
                            <v-img :src="hev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 16"></v-img>
                            <v-img :src="hev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 17"></v-img>
                            <v-img :src="hev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 18"></v-img>
                            <v-img :src="hev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 19"></v-img>
                            <v-img :src="hev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 20"></v-img>
                            <v-img :src="hev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 21"></v-img>
                        </v-col>
                    </v-row>
                    <!--PHEV-->
                    <v-row justify="center" v-if="count>=22 && count <=28">
                        <v-col cols="12">
                            <v-img :src="phev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 22"></v-img>
                            <v-img :src="phev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 23"></v-img>
                            <v-img :src="phev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 24"></v-img>
                            <v-img :src="phev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 25"></v-img>
                            <v-img :src="phev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 26"></v-img>
                            <v-img :src="phev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 27"></v-img>
                            <v-img :src="phev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 28"></v-img>
                        </v-col>
                    </v-row>
                    <!--BEV-->
                    <v-row justify="center" v-if="count>=29 && count <=35">
                        <v-col cols="12">
                            <v-img :src="bev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 29"></v-img>
                            <v-img :src="bev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 30"></v-img>
                            <v-img :src="bev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 31"></v-img>
                            <v-img :src="bev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 32"></v-img>
                            <v-img :src="bev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 33"></v-img>
                            <v-img :src="bev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 34"></v-img>
                            <v-img :src="bev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 35"></v-img>
                        </v-col>
                    </v-row>
                    <!--fcev-->
                    <v-row justify="center" v-if="count>=36 && count<=42">
                        <v-col cols="12">
                            <v-img :src="fcev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 36"></v-img>
                            <v-img :src="fcev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 37"></v-img>
                            <v-img :src="fcev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 38"></v-img>
                            <v-img :src="fcev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 39"></v-img>
                            <v-img :src="fcev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 40"></v-img>
                            <v-img :src="fcev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 41"></v-img>
                            <v-img :src="fcev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 42"></v-img>
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

import Mcombustion from '@/assets/evolucion/combustion-interna.png'
import Mhibrido from '@/assets/evolucion/hibrido-fuerte.png'
import Mbateria from '@/assets/evolucion/motor-bateria.png'

import icm from '@/assets/evolucion/icm/icm1.png'
import icm2 from '@/assets/evolucion/icm/icm2.png'
import icm3 from '@/assets/evolucion/icm/icm3.png'
import icm4 from '@/assets/evolucion/icm/icm4.png'
import icm5 from '@/assets/evolucion/icm/icm5.png'
import icm6 from '@/assets/evolucion/icm/icm6.png'
import icm7 from '@/assets/evolucion/icm/icm7.png'

import mhev from '@/assets/evolucion/mhev/mhev1.png'
import mhev2 from '@/assets/evolucion/mhev/mhev2.png'
import mhev3 from '@/assets/evolucion/mhev/mhev3.png'
import mhev4 from '@/assets/evolucion/mhev/mhev4.png'
import mhev5 from '@/assets/evolucion/mhev/mhev5.png'
import mhev6 from '@/assets/evolucion/mhev/mhev6.png'
import mhev7 from '@/assets/evolucion/mhev/mhev7.png'

import hev from '@/assets/evolucion/hev/hev1.png'
import hev2 from '@/assets/evolucion/hev/hev2.png'
import hev3 from '@/assets/evolucion/hev/hev3.png'
import hev4 from '@/assets/evolucion/hev/hev4.png'
import hev5 from '@/assets/evolucion/hev/hev5.png'
import hev6 from '@/assets/evolucion/hev/hev6.png'
import hev7 from '@/assets/evolucion/hev/hev7.png'

import phev from '@/assets/evolucion/phev/phev1.png'
import phev2 from '@/assets/evolucion/phev/phev2.png'
import phev3 from '@/assets/evolucion/phev/phev3.png'
import phev4 from '@/assets/evolucion/phev/phev4.png'
import phev5 from '@/assets/evolucion/phev/phev5.png'
import phev6 from '@/assets/evolucion/phev/phev6.png'
import phev7 from '@/assets/evolucion/phev/phev7.png'

import bev from '@/assets/evolucion/pev/pev1.png'
import bev2 from '@/assets/evolucion/pev/pev2.png'
import bev3 from '@/assets/evolucion/pev/pev3.png'
import bev4 from '@/assets/evolucion/pev/pev4.png'
import bev5 from '@/assets/evolucion/pev/pev5.png'
import bev6 from '@/assets/evolucion/pev/pev6.png'
import bev7 from '@/assets/evolucion/pev/pev7.png'

import fcev from '@/assets/evolucion/fcev/fcev1.png'
import fcev2 from '@/assets/evolucion/fcev/fcev2.png'
import fcev3 from '@/assets/evolucion/fcev/fcev3.png'
import fcev4 from '@/assets/evolucion/fcev/fcev4.png'
import fcev5 from '@/assets/evolucion/fcev/fcev5.png'
import fcev6 from '@/assets/evolucion/fcev/fcev6.png'
import fcev7 from '@/assets/evolucion/fcev/fcev7.png'

import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted, reactive } from '@vue/runtime-core';

const store = useCounterStore()
const {canNext, windowHeight, windowSize, count} = storeToRefs(store)

onMounted(() => {
    canNext.value = true
    count.value = 0
})
</script>

<style scoped>
.bg-gradient{
    background: linear-gradient( 270deg, #FED374 28.78%, rgba(254, 211, 116, 0) 136.06%);;
}
</style>