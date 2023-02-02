<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos básicos">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 rounded-xl bg-color">
                        <v-col cols="12" align="start" class="animate__animated animate__backInDown">
                            <p class="front-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">
                                <span class="font-weight-bold">Watt:</span> unidad de medicion de la potencía eláctrica.
                            </p>
                            <p class="font-avenit" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">
                                <span class="font-weight-bold">Watt:</span>Volt X Amper.
                            </p>
                        </v-col>

                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft">
                            <v-img :src="cubito" :max-height="windowHeight>900 ? '230': '140'"></v-img>
                            <p class="font-weight-bold mt-2" :class="{'font-size-22': windowHeight>900, 'font-size-19': windowHeight<700}">5 Volts, <br> 1 Amper <br> 5W</p>
                        </v-col>
                        <v-col cols="1" align="center">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" align="center" class="animate__animated animate__backInRight">
                            <v-img :src="cubo" :max-height="windowHeight>900 ? '230': '140'"></v-img>
                            <p class="font-weight-bold mt-2" :class="{'font-size-22': windowHeight>900, 'font-size-19': windowHeight<700}">5 Volts, <br> 2.1 Amper <br> 10.2W</p>
                        </v-col>
                    </v-row>

                    <v-snackbar v-model="snackbar" location="bottom right" color="#FDBD31" timeout="10000" class="mx-16" height="200" width="320" rounded="xl" multi-line vertical>
                        <p class="font-weight-bold text-black font-avenir font-size-20 px-5 py-4">
                            <span class="text-white">A</span> mayor potencia eléctrica <span class="text-white">en un cargador</span> más rápido <span class="text-white">se puede cargar una batería.</span>
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