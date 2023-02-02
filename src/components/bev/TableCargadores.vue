<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="" :class="{'mt-4': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start" class="mb-0">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="start" class="mx-10 px-5 py-5 rounded-xl bg-boxstep-content mt-0">
                        <v-col cols="3" align-self="center" align="end" class="animate__animated animate__backInLeft">
                            <p class="font-weight-bold font-avenir text-right" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                No todos los
                            </p>
                            <p class="font-weight-bold font-avenir text-right" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                conectores son
                            </p>
                            <p class="font-avenir text-right" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                <span class="font-weight-bold">Iguales,</span> hay que
                            </p>
                            <p class="font-weight-bold font-avenir text-right text-yellow-p" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                escoger el adecuado
                            </p>
                            <p class="font-avenir text-right" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                pára cada vehiculoa
                            </p>
                        </v-col>
                        <v-col cols="9" class="animate__animated animate__backInRight">
                            <v-img :src="tableCargadore" :max-height="windowHeight<700 ? '310': ''"></v-img>
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
import tableCargadore from '@/assets/cargando/tableCargadores.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
</script>

<style scoped>

</style>