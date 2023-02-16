<template>
    <div>
        <content-template subtitle="Tipos de cargadores">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="font-size-22 font-avenir">
                                        ¿Alguna vez has visto estos contactos para dispositivos eléctricos? Seguramente hay algunos 
                                        que te son conocidos y otros que nunca habrás visto a menos de que hayas salido de viaje a 
                                        otros países. Algo que resulta evidente es que para poder conectar un dispositivo eléctrico 
                                        o electrónico en estos contactos, debe contar con la conexión adecuada o con un adaptador.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 px-5 py-5 rounded-xl bg-boxstep-content animate__animated animate__backInLeft">
                        <v-col cols="3">
                            <v-img :src="conector1" :max-height="windowHeight>900 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="conector2" :max-height="windowHeight>900 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="conector3" :max-height="windowHeight>900 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="conector4" :max-height="windowHeight>900 ? '240': '140'"></v-img>
                        </v-col>

                        <v-col cols="4">
                            <v-img :src="conector5" :max-height="windowHeight>900 ? '240': '120'"></v-img>
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="conector6" :max-height="windowHeight>900 ? '240': '120'"></v-img>
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="conector7" :max-height="windowHeight>900 ? '240': '120'"></v-img>
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
import conector1 from '@/assets/cargando/enchufe1.png'
import conector2 from '@/assets/cargando/Enchufe2.png'
import conector3 from '@/assets/cargando/Enchufe3.png'
import conector4 from '@/assets/cargando/Enchufe4.png'
import conector5 from '@/assets/cargando/Enchufe5.png'
import conector6 from '@/assets/cargando/Enchufe6.png'
import conector7 from '@/assets/cargando/Enchufe7.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
</script>

<style scoped>

</style>