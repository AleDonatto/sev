<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" style="background-color: black">
                        <v-row style="height: 620px">
                            <v-col cols="4">
                                <div class="">
                                    <h1 class="text-white">Instrucciones</h1>
                                    <!--<router-link to="/modulo-directivo">-->
                                        <v-btn class="" rounded color="#FDBE2E" @click="gotoModuloDirectivo">
                                            <span>Continuar</span>
                                        </v-btn>
                                    <!--</router-link>-->
                                </div>
                            </v-col>
                            <v-col cols="8">
                                <v-img :src="Mens" max-height="750"></v-img>
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
import Mens from '@/assets/instrucciones/men.png'
import { useCounterStore } from '../stores/counter';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {section} = storeToRefs(store)
const router = useRouter()

function gotoModuloDirectivo(){
    section.value = 2
    router.push('/modulo-directivo')
}
</script>

<style>
.bg-instrucciones {
  background-image: url('../assets/instrucciones/bg-instrucciones.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>