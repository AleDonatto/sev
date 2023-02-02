<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos básicos">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10">
                        <v-col cols="12" align="center" class="animate__animated animate__backInDown">
                            <p class="font-avenir" :class="{'font-size-30':windowHeight>900, 'font-size-26':windowHeight<700}"><span class="font-weight-bold">Amper:</span> unidad de medición de la intensidad de la corriente eléctrica</p>
                        </v-col>
                        
                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft mt-5">
                            <v-img :src="cubito" :max-height="windowHeight>900 ? '230': '150'"></v-img>
                            <p class="font-weight-bold font-avenir font-size-30 mt-5">5 Volts, 1 Amper </p>
                        </v-col>
                        <v-col cols="1">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" class="mt-5 animate__animated animate__backInRight">
                            <v-img :src="cubo" :max-height="windowHeight>900 ? '230': '150'"></v-img>
                            <p class="font-avenir font-size-30 font-weight-bold text-center mt-5">5 Volts, 2.1 Amper</p>
                        </v-col>

                    </v-row>

                    <v-snackbar v-model="snackbar" location="bottom right" color="#FDBD31" timeout="10000" class="mx-16" height="200" width="320" rounded="xl" multi-line vertical>
                        <p class="font-weight-bold text-black font-avenir font-size-20 px-5 py-4">
                            El amperaje hace referencia a qué tan intensa es la corriente. Por ejemplo: a mayor amperaje, mayor velocidad de carga
                        </p>
                    </v-snackbar>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import cubito from '@/assets/electricidad/cubito.png'
import cubo from '@/assets/electricidad/cubo.png'
import { useCounterStore } from '../../stores/counter';
import { ref } from '@vue/reactivity';
import { storeToRefs } from 'pinia';

const snackbar = ref(true)
const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)

</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.vertical-line{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: white;   
    z-index: 1;
}
</style>