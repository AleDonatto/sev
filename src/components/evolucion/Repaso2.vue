<template>
    <div>
        <content-template subtitle="REPASO">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-instructions py-6 px-4" :class="{'mt-10': windowHeight>900, 'mt-2': windowHeight<700}">
                                <p class="" :class="{'font-size-24':windowHeight>900, 'font-size-19': windowHeight<700}">Acomoda de mayor a menor generación de emisiones contaminantes las siguentes tecnologías</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row class="mx-16" :class="{'mt-10': windowHeight>900, 'mt-0': windowHeight<700}" justify="center" v-if="answeredQuiz2 === false">
                        <v-col cols="5">
                            <v-row>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">1</p>
                                        <div id="drop1" class="box-zone-drop size-zone-drop" @drop="dropZoneOne" @dragover="zoneDropOver"></div>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">2</p>
                                        <div id="drop2" class="box-zone-drop size-zone-drop" @drop="dropZoneTwo" @dragover="zoneDropOverTwo"></div>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">3</p>
                                        <div id="drop3" class="box-zone-drop size-zone-drop" @drop="dropZoneThree" @dragover="zoneDropOverThree"></div>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">4</p>
                                        <div id="drop4" class="box-zone-drop size-zone-drop" @drop="dropZoneFour" @dragover="zoneDropOverFour"></div>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">5</p>
                                        <div id="drop5" class="box-zone-drop size-zone-drop" @drop="dropZoneFive" @dragover="zoneDropOverFive"></div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="2"></v-col>
                        <v-col cols="5" align-self="center">
                            <v-row>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="box-zone-drag size-zone-drop text-center" @dragstart="drag" draggable="true" v-if="answers.a5 !== true">
                                        <p class="pa-2" id="electronicos">Eléctronicos</p>
                                    </div>
                                </v-col>
                                <v-col cols="12" align-self="center" :class="{'mt-0':windowHeight<700}">
                                    <div class="box-zone-drag size-zone-drop text-center" @dragstart="drag" draggable="true" v-if="answers.a4 !== true">
                                        <p class="pa-2" id="hibridos_enchufables">Híbridos Enchufables</p>
                                    </div>
                                </v-col>
                                <v-col cols="12" :class="{'margin-top-md':windowHeight<700}">
                                    <div class="box-zone-drag size-zone-drop text-center" @dragstart="drag" draggable="true" v-if="answers.a2 !== true">
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
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">1</p>
                                        <div id="drop1" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">ICE</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">2</p>
                                        <div id="drop2" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">Eléctricos</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">3</p>
                                        <div id="drop3" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">Híbridos Fuertes</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">4</p>
                                        <div id="drop4" class="box-zone-drop size-zone-drop">
                                            <p class="pa-2">Híbridos Enchufables</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex">
                                        <p class="text-yellow  font-size-24 font-weight-bold mx-2">5</p>
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
                            <v-btn class="" rounded color="#FDBD31" :disabled="(answers.a1 === false || answers.a2 === false || answers.a3 === false || answers.a4 === false || answers.a5 === false)"
                            @click="checkQuiz">
                                <span class="text-black text-none font-size-20">Continuar</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script>
import ContentTemplate from '../templates/ContentTemplate.vue';
import { mapActions, mapState } from 'vuex';

export default{
    data() {
        return {
            answers: {
                a1: false,
                a2: false,
                a3: false,
                a4: false,
                a5: false
            },
            zoneOne: null,
            zoneTwo: null,
            zoneThree: null,
            zoneFour: null,
            zoneFive: null
        }
    },
    components: {
        ContentTemplate,
    },
    mounted(){
        this.$store.commit('StateAssign', {canNext: false})
        this.playAudio()
        /*if(this.answeredQuiz2 === false){
            //this.canNext = false
            this.$store.commit('StateAssign', {canNext: false})
        }*/
    },
    computed: {
        ...mapState(['canNext', 'answeredQuiz2', 'windowHeight', 'windowSize'])
    },
    methods: {
        ...mapActions(['NextStep']),
        drag(ev) {
            let values = ev.target.querySelector('p')
            //console.log(test.id)
            ev.dataTransfer.setData("text", values.id);
        },

        zoneDropOver(ev){
            ev.preventDefault()
        },

        zoneDropOverTwo(ev){
            ev.preventDefault()
        },

        zoneDropOverThree(ev){
            ev.preventDefault()
        },

        zoneDropOverFour(ev){
            ev.preventDefault()
        },

        zoneDropOverFive(ev){
            ev.preventDefault()
        },

        dropZoneOne(ev){
            ev.preventDefault()
            if(this.zoneOne === null){
                
                let data = ev.dataTransfer.getData("text")
                if(data === 'ice'){
                    ev.target.appendChild(document.getElementById(data))
                    //console.log(data)
                    this.zoneOne = true 
                    this.answers.a1 = true
                }
            }
        },

        dropZoneTwo(ev){
            ev.preventDefault()
            if(this.zoneTwo === null){
                let data = ev.dataTransfer.getData("text")
                if(data === 'semihibridos'){
                    ev.target.appendChild(document.getElementById(data))
                    this.zoneTwo = true
                    this.answers.a2 = true
                }
                
            }
        },

        dropZoneThree(ev){
            ev.preventDefault()
            if(this.zoneThree === null){
                let data = ev.dataTransfer.getData("text")
                if(data === 'hibridos_fuertes'){
                    ev.target.appendChild(document.getElementById(data))
                    this.zoneThree = true 
                    this.answers.a3 = true 
                }
            }
        },

        dropZoneFour(ev){
            ev.preventDefault()
            if(this.zoneFour === null){
                let data = ev.dataTransfer.getData("text")
                if(data === 'hibridos_enchufables'){
                    ev.target.appendChild(document.getElementById(data))
                    this.zoneFour = true
                    this.answers.a4 = true
                }
            }
        },

        dropZoneFive(ev){
            ev.preventDefault()
            if(this.zoneFive === null){
                let data = ev.dataTransfer.getData("text")
                if(data === 'electronicos'){
                    ev.target.appendChild(document.getElementById(data))
                    this.zoneFive = true 
                    this.answers.a5 = true
                }
            }
        },

        checkQuiz(){
            if(this.answers.a1 === true && this.answers.a2 === true && this.answers.a3 === true && this.answers.a4 === true && this.answers.a5 === true){
                //this.answeredQuiz2 = true
                this.$store.commit('', {answeredQuiz2: true})
                let route = this.$route.path
                //NextStep(route)
                this.$store.dispatch('NextStep',route)
            }
        },
        playAudio(){
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-13.mp3')
            window.audio.play()
            /*setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },6500)*/
        }
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