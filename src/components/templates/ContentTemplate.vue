<template>
    <div>
        <v-navigation-drawer permanent location="left" color="#FDBD31">
            <template v-slot:prepend>
                <v-list-item :class="{'my-4': windowHeight > 900, 'my-2':windowHeight < 700}">
                    <v-img :src="solologo" contain heigh max-height="40"></v-img>
                </v-list-item>
                <v-list-item class="text-center" :class="{'my-2': windowHeight > 900, 'my-1': windowHeight < 700}">
                    <v-icon icon="mdi-home" color="black" size="x-large"></v-icon>
                </v-list-item>
            </template>
            
            <v-divider></v-divider>

            <v-list density="compact" nav class="">
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="inicio" :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span>Inicio</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="actualidad" :class="{'h-nav' : windowHeight > 900, 'h-nav-md' : windowHeight < 700}">
                    <span>Actualidad</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="proximamente" :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span>Próximamente</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="tipos" :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span>Tipos de tren motriz</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="repaso" :class="{'h-nav':windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span>Repaso de Sección</span>
                </v-list-item>
                <v-list-item color="#000000" class="text-center bg-nav-black my-0 py-0 h-nav" value="fundamentos" :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="text-white">Fundamentos de electricidad</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-black my-0 py-0 h-nav" :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="text-white">Aplicaciones prácticas</span>
                </v-list-item>
            </v-list>
            <v-row justify="center" :class="{'mt-16':windowHeight > 900, 'mt-2': windowHeight < 700}">
                <v-col cols="6" align="center">
                    <v-btn icon="mdi-arrow-left" color="white" :disabled="step < 1" @click="retrocederPaso"></v-btn>
                </v-col>
                <v-col cols="6" align="center">
                    <v-btn icon="mdi-arrow-right" color="white" @click="SiguientePaso" :disabled="canNext!==true"></v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="6" align="center">
                    <v-btn icon="mdi-volume-high" color="black"></v-btn>
                </v-col>
                <v-col cols="6" align="center">
                    <v-btn icon="mdi-comment-processing-outline" color="black"></v-btn>
                </v-col>
            </v-row>
        </v-navigation-drawer>
        <div>
            <v-app-bar class="bg-appbar h-appbar" >
                <v-row>
                    <v-col cols="6" align="start" align-self="center">
                        <h1 class="mt-2 ml-7">{{props.title}}</h1>
                    </v-col>
                    <v-col cols="6" align="start" align-self="center">
                        <!--<div v-html="props.subtitle"></div>-->
                        <h1 class="text-white font-weight-thin m-left" v-html="props.subtitle"></h1> 
                    </v-col>
                </v-row> 
            </v-app-bar>
            <v-container fluid class="mt-0">
                <slot name="content" ></slot>
            </v-container>
        </div>
    </div>
</template>

<script setup>
import solologo from '@/assets/solo-logo.png'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useCounterStore } from '../../stores/counter';

const props = defineProps({
    title: String,
    subtitle: String
})

const store = useCounterStore()
const {step, canNext, windowHeight, windowSize} = storeToRefs(store)
const router = useRoute()

const { NextStep, PreviousStep } = store


function SiguientePaso(){
    //console.log(router.path)
    let route = router.path
    NextStep(route)
}

function retrocederPaso(){
    let route = router.path
    PreviousStep(route)
}
</script>

<style scoped>
.h-nav {
    height: 59px !important;
}

.h-nav-md {
    height: 49px !important;
}

.h-appbar{
    height: 95px !important;
}
.m-left{
    margin-top: 25px;
    margin-left: 17vh !important;
}

.bg-nav-yellow {
    background-color: #f0ce86 !important;
}

.bg-nav-black {
    background-color: #000000 !important;
}

.bg-appbar{
    background-image: url('../../assets/appbar.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>