<template>
    <div>
        <content-template title="LOS INICIOS" subtitle='<p>Evolución <br/> <span class="font-weight-bold">de la movilidad</span></p>'>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-4 animate__animated animate__backInLeft">
                        <v-col cols="4">
                            <v-img :src="men" :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                        </v-col>
                        <v-col cols="4" class="d-flex justify-space-between ">
                            <hr class="line-vertical">
                            <v-img :src="guerrero" :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="4" class="">
                            <v-img :src="siglo" :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                        </v-col>
                        
                        <v-col cols="4">
                            <v-img :src="division" max-width="850"></v-img>
                            <div class="text-center bg-gray-1 size-box mx-1">
                                <span class="font-avenir font-size-34 font-weight-thin text-white">3,600</span>
                                <p class="font-avenir font-size-24 font-weight-thin text-white">Millones de años</p>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="division" max-width="850"></v-img>
                            <div class="text-center bg-gray-2 size-box mx-1 py-3">
                                <span class="font-avenir font-size-34 font-weigth-thin text-white">800 a.C</span>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="division" max-width="850"></v-img>
                            <div class="text-center bg-gray-3 size-box mx-1 py-3">
                                <span class="font-avenir font-size-34 text-white">Fines del siglo XIX</span>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from "../templates/ContentTemplate.vue";
import user from '../../assets/evolucion/user.png'
import men from '../../assets/evolucion/men.png'
import guerrero from '../../assets/evolucion/guerrero.png'
import siglo from '../../assets/evolucion/siglo.png'
import division from '../../assets/evolucion/division.png'
import { useCounterStore } from "../../stores/counter";
import { storeToRefs } from "pinia";
import { onMounted } from "@vue/runtime-core";

const store = useCounterStore()
const {canNext, windowHeight, windowSize} = storeToRefs(store)

onMounted(() => {
    canNext.value = true
})

</script>

<style scoped>
.bg-gray-1{
    background-color: #929292;
    opacity: 0.6;
}
.bg-gray-2{
    background-color: #929292;
    opacity: 0.8;
}
.bg-gray-3{
    background-color: #929292;
}

.size-box{
    height: 85px !important;
    width: 99% !important;
}
.line-vertical{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: #FDBD31;   
    z-index: 1;
}
</style>