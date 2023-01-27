<template>
    <div>
        <v-navigation-drawer permanent location="left" color="#FDBD31" class="index-1">
            <template v-slot:prepend>
                <v-list-item :class="{'my-4': windowHeight > 900, 'my-2':windowHeight < 700}">
                    <v-img :src="solologo" contain heigh max-height="40"></v-img>
                </v-list-item>
                <v-list-item class="text-center" :class="{'my-2': windowHeight > 900, 'my-1': windowHeight < 700}">
                    <v-icon icon="mdi-home" color="black" size="x-large"></v-icon>
                </v-list-item>
            </template>
            
            <v-divider></v-divider>

            <v-list density="compact" nav class="pa-0" v-if="$route.path === '/evolucion-de-movilidad'">
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}" 
                @click="step = 0">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step >= 0 && step <2}">
                        Inicio
                    </span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav' : windowHeight > 900, 'h-nav-md' : windowHeight < 700}" 
                :disabled="step < 2"
                @click="step = 2">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step === 2}">
                        Actualidad
                    </span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}"
                :disabled="step < 3"
                @click="step = 3">
                    <span class="font-size-20 font-avenir" :class="{'font-weight-bold': step === 3}">
                        Próximamente
                    </span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}"
                :disabled="step<4"
                @click="step = 4">
                    <span class="font-size-20 font-avenir" :class="{'font-weight-bold': step >= 4 && step <6}">
                        Tipos de tren motriz
                    </span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav':windowHeight > 900, 'h-nav-md': windowHeight < 700}"
                :disabled="step <6"
                @click="step = 6">
                    <span class="font-size-20 font-avenir" :class="{'font-weight-bold': step >= 6}">
                        Repaso de Sección
                    </span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-black my-0 py-0 not-cursor" :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="text-white font-avenir font-size-20">
                        Electricidad
                    </span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-black my-0 py-0 not-cursor" :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="text-white font-avenir font-size-20">
                        Cargando un BEV
                    </span>
                </v-list-item>
            </v-list>

            <v-list density="compact" nav class="pa-0 font-avenir" v-if="$route.path === '/fundamentos-de-electricidad'">
                <v-list-item class="text-center bg-nav-black my-0 py-0" @click="moduloEvolucion"
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="font-avenir font-size-20 text-white">Inicio</span>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" :class="{'h-nav' : windowHeight > 900, 'h-nav-md' : windowHeight < 700}"
                :disabled="step <1"
                @click="step = 1">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step === 1}">Fundamentos de Electricidad</span>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="step = 2" :disabled="step<2"
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step>=2 && step <12 }">Conceptos Basicos</span>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="step = 12" :disabled="step<12"
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step>=12 && step <17 }">Aplicaciones Practicas</span>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="step = 17" :disabled="step<16"
                :class="{'h-nav':windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step >=17}">Repaso de Sección</span>
                </v-list-item>

                <v-list-item class="text-center bg-nav-black my-0 py-0 not-cursor" :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="text-white font-avenir font-size-20">Cargando un BEV</span>
                </v-list-item>
            </v-list>

            <v-list density="compact" nav class="pa-0" v-if="$route.path === '/cargando-un-bev'">
                <v-list-item class="text-center bg-nav-black my-0 py-0" @click="moduloEvolucion"
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="text-white font-avenir font-size-20">Inicio</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-black my-0 py-0" value="actualidad"  @click="moduloElectricidad"
                :class="{'h-nav' : windowHeight > 900, 'h-nav-md' : windowHeight < 700}">
                    <span class="text-white font-avenir font-size-20">Electricidad</span>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="step = 1"
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step === 1}">Cargando un BEV</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="step = 2"
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step === 2}">Modos de Carga</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="step = 3"
                :class="{'h-nav':windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step === 3}">Hábitos de carga</span>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="step = 4"
                :class="{'h-nav': windowHeight > 900, 'h-nav-md': windowHeight < 700}">
                    <span class="font-avenir font-size-20" :class="{'font-weight-bold': step > 4}">Tipos de Cargadores</span>
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
import { useRoute, useRouter } from 'vue-router';
import { useCounterStore } from '../../stores/counter';

const props = defineProps({
    title: String,
    subtitle: String
})

const store = useCounterStore()
const {step, canNext, windowHeight, windowSize} = storeToRefs(store)
const router = useRoute()

const { NextStep, PreviousStep } = store
const route = useRouter()


function SiguientePaso(){
    //console.log(router.path)
    let route = router.path
    NextStep(route)
}

function retrocederPaso(){
    let route = router.path
    PreviousStep(route)
}

function moduloEvolucion(){
    route.push('/evolucion-de-movilidad')
}

function moduloElectricidad(){
    route.push('/fundamentos-de-electricidad')
}
</script>

<style scoped>
.h-nav {
    height: 59px !important;
    width: 450px !important;
    margin-top: 1px !important;
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
    /*background-color: #FDBD31 !important;
    opacity: 0.5;*/
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

.index-1{
    z-index: 1 !important;
}
.index-2{
    z-index:3 !important;
}
</style>