<template>
    <div>
        <content-template subtitle="REPASO">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-instructions py-6 px-4" :class="{'mt-10': windowHeight>900, 'mt-2': windowHeight<700}">
                                <p class="font-avenir" :class="{'font-size-24':windowHeight>900, 'font-size-19': windowHeight<700}">Acomoda de mayor a menor generación de emisiones contaminantes las siguentes tecnologías</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row class="mx-16" :class="{'mt-10': windowHeight>900, 'mt-0': windowHeight<700}" justify="center" v-if="answeredQuiz2 === false">
                        <v-col cols="5">
                            <v-row>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">1</p>
                                        <div id="drop1" class="box-zone-drop size-zone-drop" @drop="dropZoneOne" @dragover="zoneDropOver"></div>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">2</p>
                                        <div id="drop2" class="box-zone-drop size-zone-drop" @drop="dropZoneTwo" @dragover="zoneDropOverTwo"></div>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">3</p>
                                        <div id="drop3" class="box-zone-drop size-zone-drop" @drop="dropZoneThree" @dragover="zoneDropOverThree"></div>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">4</p>
                                        <div id="drop4" class="box-zone-drop size-zone-drop" @drop="dropZoneFour" @dragover="zoneDropOverFour"></div>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">5</p>
                                        <div id="drop5" class="box-zone-drop size-zone-drop" @drop="dropZoneFive" @dragover="zoneDropOverFive"></div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="2"></v-col>
                        <v-col cols="5" align-self="center">
                            <v-row>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="box-zone-drag size-zone-drop text-center" @dragstart="drag" draggable="true" v-if="answers.a2 !== true">
                                        <p class="pa-2" id="electronicos">Eléctronicos</p>
                                    </div>
                                </v-col>
                                <v-col cols="12" align-self="center" :class="{'mt-0':windowHeight<700}">
                                    <div class="box-zone-drag size-zone-drop text-center" @dragstart="drag" draggable="true" v-if="answers.a4 !== true">
                                        <p class="pa-2" id="hibridos_enchufables">Híbridos Enchufables</p>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="box-zone-drag size-zone-drop text-center" @dragstart="drag" draggable="true" v-if="answers.a5 !== true">
                                        <p class="pa-2" id="semihibridos">Semihíbridos</p>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="box-zone-drag size-zone-drop text-center" @dragstart="drag" draggable="true" v-if="answers.a3 !== true">
                                        <p class="pa-2" id="hibridos_fuertes">Híbridos Fuertes</p>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="box-zone-drag size-zone-drop text-center" @dragstart="drag" draggable="true" v-if="answers.a1 !== true">
                                        <p class="pa-2" id="ice">ICE</p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row v-else class="mt-10 mx-16" justify="center">
                        <v-col cols="5">
                            <v-row>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">1</p>
                                        <div id="drop1" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">ICE</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">2</p>
                                        <div id="drop2" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">Eléctricos</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">3</p>
                                        <div id="drop3" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">Híbridos Fuertes</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">4</p>
                                        <div id="drop4" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">Híbridos Enchufables</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow font-avenir font-size-24 font-weight-bold mx-2">5</p>
                                        <div id="drop5" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">Semihíbridos</p>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="2"></v-col>
                        <v-col cols="5" align-self="center">
                        </v-col>
                    </v-row>
                    <v-row justify="center" :class="{'mt-15': windowHeight>900, 'mt-0': windowHeight<700}">
                        <v-col cols="2">
                            <v-btn class="" rounded color="#FDBD31" :disabled="(answers.a1 === false && answers.a2 === false && answers.a3 === false && answers.a4 === false && answers.a5 === false)"
                            @click="checkQuiz">
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
import { onMounted, reactive, ref } from 'vue';
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const store = useCounterStore()
const {NextStep} = store
const {canNext, answeredQuiz2, windowHeight, windowSize} = storeToRefs(store)

const router = useRouter()

onMounted(() => {
    if(answeredQuiz2.value === false){
        canNext.value = false
    }
    
})

const answers = reactive({
    a1: false,
    a2: false,
    a3: false,
    a4: false,
    a5: false
})

const zoneOne = ref(null)
const zoneTwo = ref(null)
const zoneThree = ref(null)
const zoneFour = ref(null)
const zoneFive = ref(null)

function drag(ev) {
    let values = ev.target.querySelector('p')
    //console.log(test.id)
    ev.dataTransfer.setData("text", values.id);
}

function zoneDropOver(ev){
    ev.preventDefault()
}

function zoneDropOverTwo(ev){
    ev.preventDefault()
}

function zoneDropOverThree(ev){
    ev.preventDefault()
}

function zoneDropOverFour(ev){
    ev.preventDefault()
}

function zoneDropOverFive(ev){
    ev.preventDefault()
}

function dropZoneOne(ev){
    ev.preventDefault()
    if(zoneOne.value === null){
        
        let data = ev.dataTransfer.getData("text")
        if(data === 'ice'){
            ev.target.appendChild(document.getElementById(data))
            //console.log(data)
            zoneOne.value = true 
            answers.a1 = true
        }
    }
}

function dropZoneTwo(ev){
    ev.preventDefault()
    if(zoneTwo.value === null){
        let data = ev.dataTransfer.getData("text")
        if(data === 'electronicos'){
            ev.target.appendChild(document.getElementById(data))
            zoneTwo.value = true
            answers.a2 = true
        }
        
    }
}

function dropZoneThree(ev){
    ev.preventDefault()
    if(zoneThree.value === null){
        let data = ev.dataTransfer.getData("text")
        if(data === 'hibridos_fuertes'){
            ev.target.appendChild(document.getElementById(data))
            zoneThree.value = true 
            answers.a3 = true 
        }
    }
}

function dropZoneFour(ev){
    ev.preventDefault()
    if(zoneFour.value === null){
        let data = ev.dataTransfer.getData("text")
        if(data === 'hibridos_enchufables'){
            ev.target.appendChild(document.getElementById(data))
            zoneFour.value = true
            answers.a4 = true
        }
    }
}

function dropZoneFive(ev){
    ev.preventDefault()
    if(zoneFive.value === null){
        let data = ev.dataTransfer.getData("text")
        if(data === 'semihibridos'){
            ev.target.appendChild(document.getElementById(data))
            zoneFive.value = true 
            answers.a5 = true
        }
    }
}

function checkQuiz(){
    if(answers.a1 === true && answers.a2 === true && answers.a3 === true && answers.a4 === true && answers.a5 === true){
        answeredQuiz2.value = true
        let route = router.path
        NextStep(route)
    }
}
</script>

<style scoped>
.border-box-instructions{
    border: 1px 1px;
    border-style: solid;
    border-color: black;
    border-width: 4px;
    border-radius: 15px;
}

.text-yellow{
    color:#FDBD31 ;
}

.box-zone-drop{
    border: 1px 1px;
    border-style: solid;
    border-color: #FDBD31;
    border-width: 2px;
    border-radius: 10px;
}

.box-zone-drag{
    border: 1px 1px;
    border-style: solid;
    border-color: #B3B3B3;
    border-width: 2px;
    border-radius: 10px;
}

.size-zone-drop{
    height: 45px;
    width: 100%;
}

.margin-top-md{
    margin-top: -1vh;
}
</style>