<template>
    <div>
        <v-navigation-drawer permanent location="left" color="#FDBD31">
            <template v-slot:prepend>
                <v-list-item class="my-4">
                    <v-img :src="solologo" contain heigh max-height="40"></v-img>
                </v-list-item>
                <v-list-item class="text-center my-2">
                    <v-icon icon="mdi-home" color="black" size="x-large"></v-icon>
                </v-list-item>
            </template>
            
            <v-divider></v-divider>

            <v-list density="compact" nav class="">
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="inicio">
                    <span>Inicio</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="actualidad">
                    <span>Actualidad</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="proximamente">
                    <span>Próximamente</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="tipos">
                    <span>Tipos de tren motriz</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0 h-nav" value="repaso">
                    <span>Repaso de Sección</span>
                </v-list-item>
                <v-list-item color="#000000" class="text-center bg-nav-black my-0 py-0 h-nav" value="fundamentos">
                    <span class="text-white">Fundamentos de electricidad</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-black my-0 py-0 h-nav">
                    <span class="text-white">Aplicaciones prácticas</span>
                </v-list-item>
            </v-list>
            <v-row justify="center" class="mt-16">
                <v-col cols="6" align="center">
                    <v-btn icon="mdi-arrow-left" color="white" :disabled="step < 1"></v-btn>
                </v-col>
                <v-col cols="6" align="center">
                    <v-btn icon="mdi-arrow-right" color="white" @click="SiguientePaso"></v-btn>
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
                        <h1 class="mt-2 ml-7">Los Inicios</h1>
                    </v-col>
                    <v-col cols="6" align="start" align-self="center">
                        <h1 class="text-white m-left">Evolución <br> de la movilidad</h1> 
                    </v-col>
                </v-row> 
            </v-app-bar>
            <v-container class="mt-15">
                <slot name="content"></slot>
            </v-container>
        </div>
    </div>
</template>

<script setup>
import solologo from '@/assets/solo-logo.png'
import { useRoute } from 'vue-router';
import { useCounterStore } from '../../stores/counter';


const store = useCounterStore()
const {step} = store
const router = useRoute()

const { NextStep } = store


function SiguientePaso(){
    console.log(router.path)
    let route = router.path
    NextStep(route)
}

function retrocederPaso(){

}
</script>

<style scoped>
.h-nav {
    height: 59px !important;
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