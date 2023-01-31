<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row :class="{'mt-3':windowHeight > 900}">
                    <v-col cols="12" class="" :class="{'bg-presentacion': windowHeight> 900, 'bg-presentacion-md': windowHeight<700}">
                        <v-row class="">
                            <v-col cols="4" class="margin-top-text">
                                <h1 class="font-lato text-uppercase text-white text-center" :class="{'font-size-72': windowHeight>900, 'font-size-48': windowHeight<700}">electricidad</h1>
                                <p class="text-white font-size-50 ml-7" :class="{'font-size-50': windowHeight > 900, 'font-size-36': windowHeight < 700}">Conceptos básicos para vehículos eléctricos</p>
                                <p class="text-white">{{windowHeight}}</p>
                                <p class="text-white">{{windowSize}}</p>
                                <div class="d-flex justify-center">
                                    <v-btn @click="continueStep" rounded color="#FDBE2E" class="mt-10">
                                        <span class="font-avenir font-size-30 font-weight-thin">Continuar</span>
                                    </v-btn>
                                </div>
                            </v-col>
                            <v-col cols="8">
                                <!--<v-img :src="electricidad" class="size-img margin-left" max-heignt="450"></v-img>-->
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script setup>
import MainTemplate from '../templates/MainTemplate.vue';
import electricidad from '../../assets/electricidad/electricidad.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const store = useCounterStore()
const {step, windowHeight, windowSize} =  storeToRefs(store)
const {NextStep} = store 
const router = useRoute()

function continueStep(){
    let route = router.path
    NextStep(route)
}
</script>

<style scoped>
.bg-presentacion{
    background-image: url('../../assets/electricidad/presentacion.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 810px;
}

.bg-presentacion-md{
    background-image: url('../../assets/electricidad/presentacion.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 510px;
    margin-top: -1.3vh;
}
.bg-mensajes{
    background-image: url('../../assets/electricidad/fondotest.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}

.bg-negro{
    background-image: url('../../assets/electricidad/fondopruebas.png');
}

.bg-mensajes1{
    background-image: url('../../assets/welcome/fondo-left.png');
}

.height-box{
    height: 500px;
}

.width-box{
    max-width: 40%;
}

.bg-foco{
    background-image: url('../../assets/electricidad/foco.png');
    height: 900px;
}

.size-img{
    height: 800px;
}

.margin-left{
    margin-left: 270px;
    margin-top: -10px;
}

.margin-top-text{
    margin-top: 10vh;
    margin-left: 7vh;
}
</style>