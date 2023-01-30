<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row justify="start" class="" :class="{'bg-gracias mt-2': windowHeight> 900, 'bg-gracias-md': windowHeight<700}">
                    <v-row justify="start" class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                        <v-col cols="4">
                            <v-img :src="userLG" :max-height="windowHeight>900 ? '350': '210'"></v-img>
                        </v-col>
                    </v-row>
                    <v-row justify="start" class="mt-0 mb-16">
                        <v-col cols="5">
                            <p class="font-avenir text-white px-10" :class="{'font-size-26':windowHeight>900, 'font-size-22': windowHeight<700}">
                                Haz acabado el primer módulo de nuestra series de cursos que tenemos preparados para ti.
                                <span class="font-weight-bold">Estamos muy contentos de que hayas formado una parte activa de este curso</span>
                                y de parte del equipo de SEV agradecemos el tiempo que le dedicaste al curso. <br>
                                <span class="text-yellow-p font-weight-bold">¡Muchas Gracias!</span>
                            </p>
                        </v-col>
                    </v-row>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script setup>
import MainTemplate from './templates/MainTemplate.vue';
import userLG from '@/assets/user-lg.png'
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
</script>

<style scoped>
.bg-gracias {
    background-image: url('../assets/gracias.png');
    background-size: cover;
    height: 86vh;
}

.bg-gracias-md{
    background-image: url('../assets/gracias.png');
    background-size: cover;
    height: 82vh;
    margin-top: -4vh;
}
</style>