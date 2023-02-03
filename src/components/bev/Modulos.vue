<template>
    <div>
        <content-template subtitle="<p class='font-avenir'>Cargando un BEV</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 px-5 py-1 rounded-xl bg-boxstep-content" v-if="count === 0">
                        <v-col cols="3" class="animate__animated animate__backInDown">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 font-weight-bold font-avenir text-center" :class="{'py-2 font-size-28': windowHeight>900, 'font-size-20': windowHeight<700}">Modo 1</p>
                                    </div>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInUp">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 font-weight-bold font-avenir text-center" :class="{'py-2 font-size-28': windowHeight>900, 'font-size-20': windowHeight<700}">Modo 2</p>
                                    </div>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInDown">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 font-weight-bold font-avenir text-center" :class="{'py-2 font-size-28': windowHeight>900, 'font-size-20': windowHeight<700}">Modo 3</p>
                                    </div>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInUp">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 font-weight-bold font-avenir text-center" :class="{'py-2 font-size-28': windowHeight>900, 'font-size-20': windowHeight<700}">Modo 4</p>
                                    </div>
                                </template>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="h-100 mx-10 px-5 py-1 rounded-xl bg-boxstep-content" v-if="count === 1">
                        <v-col cols="3" class="animate__animated animate__backInDown">
                            <v-card class="rounded-lg pa-0" :height="windowHeight>900 ? '550': '330'" :width="windowHeight>900 ? '280': '190'">
                                <template v-slot:title>
                                    <v-img :src="modo1" :height="windowHeight > 900 ? '540': windowHeight<660 ? '320': '320'" contain></v-img>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInUp">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'" :width="windowHeight>900 ? '280': '190'">
                                <template v-slot:title>
                                    <v-img :src="modo2" :height="windowHeight > 900 ? '540': windowHeight<660 ? '320': '320'" contain></v-img>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInDown">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'" :width="windowHeight>900 ? '280': '190'">
                                <template v-slot:title>
                                    <v-img :src="modo3" :height="windowHeight > 900 ? '540': windowHeight<660 ? '320': '320'" contain></v-img>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInUp">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'" :width="windowHeight>900 ? '280': '190'">
                                <template v-slot:title>
                                    <v-img :src="modo2" :height="windowHeight > 900 ? '540': windowHeight<660 ? '320': '320'" contain></v-img>
                                </template>
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
import modo1 from '@/assets/cargando/modo1.png'
import modo2 from '@/assets/cargando/modo2.png'
import modo3 from '@/assets/cargando/modo3.png'
import modo4 from '@/assets/cargando/modo4.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted } from '@vue/runtime-core';

const store = useCounterStore()
const {windowHeight, windowSize, count} = storeToRefs(store)

onMounted(() => {
    count.value = 0 
})
</script>

<style scoped>
.height-100{
    height: 37vh;
}
</style>