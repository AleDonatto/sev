<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row class="mt-3">
                    <v-col cols="12">
                        <v-row class="height-box bg-negro">
                            <v-col cols="4" class="mt-10 width-box" align="center">
                                <h1 class="font-lato font-size-50 ml-7 text-left text-white text-uppercase font-weight-smibold">Cargando un BEV</h1>

                                <p class="text-white font-size-50 ml-7 text-left">Tipos de cargador, conectores y mejores prácticas</p>

                                <v-btn rounded class="px-5" color="#FDBE2E" @click="continueStep">
                                    <span class="font-avenir font-size-30">Continuar</span>
                                </v-btn>
                            </v-col>
                            <v-col cols="8">
                                <v-img :src="poligono" class="size-img margin-left" max-heignt="450"></v-img>
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
import poligono from '../../assets/cargando/poligonoYellow.png'
import { useCounterStore } from '../../stores/counter';
import { useRoute, useRouter } from 'vue-router';


const router = useRoute()
const store = useCounterStore()

const {NextStep} = store

function continueStep(){
    const path = router.path
    NextStep(path)
}
</script>

<style scoped>
.bg-negro{
    background-image: url('../../assets/electricidad/fondopruebas.png');
}
.height-box{
    height: 500px;
}
.width-box{
    max-width: 40%;
}

.size-img{
    height: 800px;
}

.margin-left{
    margin-left: 270px;
    margin-top: -10px;
}
</style>