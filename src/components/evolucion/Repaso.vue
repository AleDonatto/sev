<template>
    <div>
        <content-template subtitle="REPASO">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-evolution" :class="{'mt-10': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <p class="py-4 px-3">
                                    Menciona los tres tipos de trenes motrices que se desarrollaron a finales del siglo 19 y 
                                    que en la actualidad siguen siendo las opciones más comunes en la industria automotriz. 
                                    Arrastra la respuesta correcta a las casillas marcadas.
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row :class="{'mt-15':windowHeight>900, 'mt-4': windowHeight<700}" justify="center">
                        <v-col cols="4" align-self="center">
                            <v-row no-gutters>
                                <v-col cols="2">
                                    <v-img :src="one" max-height="80" class="mt-6"></v-img>
                                </v-col>
                                <v-col cols="10">
                                    <div  class="size-box-drop-lg" @drop="dropZoneOne" @dragover="zoneDropOver" 
                                    :class="{'border-box-zone':answers.a1 === false, 'border-box-zone-correct text-center pt-10':answers.a1===true}">
                                            <!--<drag :transfer-data="{name:'hidrogeno-gasolina-electrico'}" :effect-allowed="['move']" drop-effect="move" >
                                                <p>Arrastre aqui</p>
                                            </drag>-->
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4" align-self="center">
                            <v-row no-gutters>
                                <v-col cols="2">
                                    <v-img :src="two" max-height="80" class="mt-6"></v-img>
                                </v-col>
                                <v-col cols="10">
                                    <div class="size-box-drop-lg"  @drop="dropZoneTwo" @dragover="zoneDropOverTwo" 
                                    :class="{'border-box-zone':answers.a2 === false, 'border-box-zone-correct text-center pt-10':answers.a2 === true}">
                                            <!--<drag :transfer-data="{name: 'vehiculos-celda-hidorgeno'}" :effect-allowed="['move']" drop-effect="move">
                                                <p>Arrastre aqui</p>
                                            </drag>-->
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4" align-self="center">
                            <v-row no-gutters>
                                <v-col cols="2">
                                    <v-img :src="three" max-height="80" class="mt-6"></v-img>
                                </v-col>
                                <v-col cols="10">
                                    <div class="size-box-drop-lg" @drop="dropZoneThree" @dragover="zoneDropOverThree" 
                                    :class="{
                                        'border-box-zone': answers.a3 === false, 
                                        'border-box-zone-correct text-center pt-10':answers.a3 === true}">
                                        <!--<drag :transfer-data="{name: 'electrico-gasolina-electrico'}" :effect-allowed="['move']" drop-effect="move">
                                            <p>Arrastre aqui</p>
                                        </drag>-->
                                    </div>
                                </v-col>
                            </v-row>
                            <div class="d-flex">
                                
                                
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" :class="{'mt-15': windowHeight > 900, 'mt-4' : windowHeight < 700}">
                        <v-col cols="2">
                            <div class="text-center border-box-drag px-5 py-3" draggable="true" @dragstart="drag" v-if="drags.d1 === true">
                                <p id="gasolina_electricos">MCI híbridos hidrógeno-gasolina y eléctricos</p>
                            </div>
                        </v-col>
                        <v-col cols="2">
                            <div class="text-center border-box-drag px-5 py-3" draggable="true" @dragstart="drag">
                                <p id="gasolina_electricos2">MCI híbridos hidrógeno-gasolina y eléctricos</p>
                            </div>
                        </v-col>
                        <v-col cols="2">
                            <div class="texdt-center border-box-drag px-4 py-3" draggable="true" @dragstart="drag" v-if="drags.d2 === true">
                                <p id="celda_hidrogeno">MCI eléctricos y vehículos de celdas de hidrógeno</p>
                            </div>
                        </v-col>
                        <v-col cols="2">
                            <div class="text-center border-box-drag px-5 py-3" draggable="true" @dragstart="drag">
                                <p id="gasolina_electricos3">MCI híbridos hidrógeno-gasolina y eléctricos</p>
                            </div>
                        </v-col>
                        <v-col cols="2">
                            <div class="text-center border-box-drag px-5 py-3" draggable="true" @dragstart="drag"  v-if="drags.d3 === true">
                                <p id="electrico_gasolina">MCI híbridos eléctrico-gasolina y eléctricos</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" :class="{'mt-15':windowHeight > 900, 'mt-4': windowHeight < 700}">
                        <v-col cols="2">
                            <v-btn rounded class="" color="#FDBE2E" :disabled="answers.a1 === false && answers.a2 === false && answers.a3 === false" @click="checkQuiz">
                                <span class="text-black text-none font-lato font-size-20">Continuar</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import one from '@/assets/evolucion/1.png'
import two from '@/assets/evolucion/2.png'
import three from '@/assets/evolucion/3.png'
import { useCounterStore } from '../../stores/counter';
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { onMounted } from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router';

const zoneOne = ref(null)
const zoneTwo = ref(null)
const zoneThree = ref(null)

const store = useCounterStore()
const {NextStep} = store
const {canNext, answeredQuiz1, windowHeight, windowSize} = storeToRefs(store)

const router = useRoute()

const answers = reactive({
    a1: false,
    a2: false,
    a3: false
})

const drags = reactive({
    d1: true,
    d2: true,
    d3: true
})

onMounted(() => {
    if(answeredQuiz1.value === false){
        canNext.value = false
    }
})

function allowDrop(ev) {
    ev.preventDefault();
}
function zoneDropOver(ev){
    ev.preventDefault()
}

function dropZoneOne(ev){
    ev.preventDefault()
    if(zoneOne.value === null){
        
        let data = ev.dataTransfer.getData("text")
        
        if(data === 'gasolina_electricos' || data === 'celda_hidrogeno'|| data === 'electrico_gasolina'){
            //console.log(data)
            ev.target.appendChild(document.getElementById(data))
            zoneOne.value = true
            answers.a1 = true
            showDrag(data)
        }
        
    }
}

function zoneDropOverTwo(ev){
    ev.preventDefault()
}

function dropZoneTwo(ev){
    ev.preventDefault()
    if(zoneTwo.value === null){
        
        let data = ev.dataTransfer.getData("text")
        
        if(data === 'gasolina_electricos' || data === 'celda_hidrogeno'|| data === 'electrico_gasolina'){
            //console.log(data)
            ev.target.appendChild(document.getElementById(data))
            zoneTwo.value = true
            answers.a2 = true
            showDrag(data)
        }
    }
}

function zoneDropOverThree(ev){
    ev.preventDefault()
}

function dropZoneThree(ev){
    ev.preventDefault()
    if(zoneThree.value === null){
        
        let data = ev.dataTransfer.getData("text")
        if(data === 'gasolina_electricos' || data === 'celda_hidrogeno'|| data === 'electrico_gasolina'){
            ev.target.appendChild(document.getElementById(data))
            //console.log(data)
            zoneThree.value = true
            answers.a3 = true
            showDrag(data)
        }
    }
}

function drag(ev) {
    let values = ev.target.querySelector('p')
    ev.dataTransfer.setData("text", values.id);
}


/*function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(data)
}*/

function checkQuiz(){
    if(answers.a1 === true && answers.a2 === true && answers.a3 === true){
        answeredQuiz1.value = true
        let route = router.path
        NextStep(route)
    }
}

function showDrag(item){
    switch(item){
        case 'gasolina_electricos':
            drags.d1 = false 
            break
        case 'celda_hidrogeno':
            drags.d2 = false
            break
        case 'electrico_gasolina':
            drags.d3 = false
            break
    }
}
</script>

<style scoped>
.border-box-evolution{
    border: 1px 1px;
    border-style: solid;
    border-color: #FDBD31;
    border-width: 4px;
    border-radius: 15px;
}

.size-box-drop-sm{
    height: 100px !important;
    width: 190px !important;
}

.size-box-drop-lg{
    height: 140px !important;
    width: 210px !important;
}

.border-box-drag{
    border: 1px;
    border-style: solid;
    border-color: black;
    border-width: 4px;
    border-radius: 15px;
}
.margin-box-zone-md{
    margin-left: -70px !important;
}

.margin-box-zone-lg{
    margin-left: -235px !important;
}

.border-box-zone{
    border: 1px;
    border-style: solid;
    /*border-color: #FDBD31;*/
    /*border-width: 4px;*/
    border-radius: 15px;
    border-color: #B3B3B3;
    background-color: #B3B3B3;
}
.border-box-zone-correct{
    border: 1px;
    border-style: solid;
    border-radius: 15px;
    border-color: #FDBD31;
    background-color: #FDBD31;
}
.bg-yellow{
    background-color: #FDBD31;
}
</style>
