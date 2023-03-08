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
                            <div class="border-box-evolution" :class="{'mt-10': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <p class="py-4 px-3">
                                    Menciona los tres tipos de trenes motrices que se desarrollaron a finales del siglo 19 y 
                                    que en la actualidad siguen siendo las opciones más comunes en la industria automotriz. 
                                    Arrastra la respuesta correcta a las casilla marcada.
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" :class="{'mt-15': windowHeight > 900, 'mt-1' : windowHeight < 700}">
                        <v-col cols="2">
                            <div class="text-center border-box-drag px-5 py-3" draggable="true" @dragstart="drag" v-if="drags.d1 === true">
                                <p id="gasolina_electricos">MCI híbridos hidrógeno-gasolina y eléctricos</p>
                            </div>
                        </v-col>
                        <!--<v-col cols="2">
                            <div class="text-center border-box-drag px-5 py-3" draggable="true" @dragstart="drag">
                                <p id="gasolina_electricos2">MCI híbridos hidrógeno-gasolina y eléctricos</p>
                            </div>
                        </v-col>-->
                        <v-col cols="2">
                            <div class="texdt-center border-box-drag px-4 py-3" draggable="true" @dragstart="drag" v-if="drags.d2 === true">
                                <p id="celda_hidrogeno">MCI eléctricos y vehículos de celdas de hidrógeno</p>
                            </div>
                        </v-col>
                        <!--<v-col cols="2">
                            <div class="text-center border-box-drag px-5 py-3" draggable="true" @dragstart="drag">
                                <p id="gasolina_electricos3">MCI híbridos hidrógeno-gasolina y eléctricos</p>
                            </div>
                        </v-col>-->
                        <v-col cols="2">
                            <div class="text-center border-box-drag px-5 py-3" draggable="true" @dragstart="drag"  v-if="drags.d3 === true">
                                <p id="electrico_gasolina">MCI híbridos eléctrico-gasolina y eléctricos</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row :class="{'mt-15':windowHeight>900, 'mt-4': windowHeight<700}" justify="center">
                        <!--<v-col cols="4" align-self="center">
                            <v-row no-gutters>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/1.png" contain max-height="80" class="mt-6" :class="{'mt-6':windowHeight>900, 'mt-0':windowHeight<700}"></v-img>
                                </v-col>
                                <v-col cols="10">
                                    <div @drop="dropZoneOne" @dragover="zoneDropOver" 
                                    :class="{
                                        'border-box-zone':answers.a1 === false, 
                                        'border-box-zone-correct text-center pt-5':answers.a1===true,
                                        'size-box-drop-lg': windowHeight>900, 
                                        'size-box-drop-sm':windowHeight<700
                                    }">
                                            <drag :transfer-data="{name:'hidrogeno-gasolina-electrico'}" :effect-allowed="['move']" drop-effect="move" >
                                                <p>Arrastre aqui</p>
                                            </drag>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>-->
                        <!--<v-col cols="4" align-self="center">
                            <v-row no-gutters>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/2.png" contain max-height="80" class="mt-6"></v-img>
                                </v-col>
                                <v-col cols="10">
                                    <div @drop="dropZoneTwo" @dragover="zoneDropOverTwo" 
                                    :class="{
                                        'border-box-zone':answers.a2 === false, 
                                        'border-box-zone-correct text-center pt-5':answers.a2 === true,
                                        'size-box-drop-lg': windowHeight>900, 
                                        'size-box-drop-sm':windowHeight<700
                                    }">
                                            <drag :transfer-data="{name: 'vehiculos-celda-hidorgeno'}" :effect-allowed="['move']" drop-effect="move">
                                                <p>Arrastre aqui</p>
                                            </drag>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>-->
                        <v-col cols="3" class="px-8" align="center">
                            <div @drop="dropZoneThree" @dragover="zoneDropOverThree" 
                                    :class="{
                                        'border-box-zone': answers.a3 === false, 
                                        'border-box-zone-correct text-center pt-5':answers.a3 === true,
                                        'size-box-drop-lg': windowHeight>900, 
                                        'size-box-drop-sm':windowHeight<700
                                    }">
                                       
                                    </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" :class="{'mt-15':windowHeight > 900, 'mt-4': windowHeight < 700}">
                        <v-col cols="2" align="center">
                            <v-btn rounded class="" color="#FDBE2E" :disabled="answers.a1 === false && answers.a2 === false && answers.a3 === false" @click="checkQuiz">
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

export default {
    data(){
        return {
            answers: {
                a1: false,
                a2: false,
                a3: false
            },
            drags:{
                d1: true,
                d2: true,
                d3: true
            },
            zoneOne: null,
            zoneTwo: null,
            zoneThree: null

        }
    },
    components: {
        ContentTemplate
    },
    computed: {
        ...mapState(['canNext', 'answeredQuiz1', 'windowHeight', 'windowSize'])
    },
    mounted() {
        if(this.answeredQuiz1 === false){
            //this.canNext = false
            this.$store.commit('StateAssign',{canNext: false})
        }
    },
    methods: {
        ...mapActions(['NextStep']),
        allowDrop(ev) {
            ev.preventDefault();
        },
        zoneDropOver(ev){
            ev.preventDefault()
        },

        dropZoneOne(ev){
            ev.preventDefault()
            if(this.zoneOne === null){
                
                let data = ev.dataTransfer.getData("text")
                
                if(data === 'gasolina_electricos' || data === 'celda_hidrogeno'|| data === 'electrico_gasolina'){
                    //console.log(data)
                    ev.target.appendChild(document.getElementById(data))
                    this.zoneOne = true
                    this.answers.a1 = true
                    this.showDrag(data)
                }
                
            }
        },

        zoneDropOverTwo(ev){
            ev.preventDefault()
        },

        dropZoneTwo(ev){
            ev.preventDefault()
            if(this.zoneTwo === null){
                
                let data = ev.dataTransfer.getData("text")
                
                if(data === 'gasolina_electricos' || data === 'celda_hidrogeno'|| data === 'electrico_gasolina'){
                    //console.log(data)
                    ev.target.appendChild(document.getElementById(data))
                    this.zoneTwo = true
                    this.answers.a2 = true
                    this.showDrag(data)
                }
            }
        },

        zoneDropOverThree(ev){
            ev.preventDefault()
        },

        dropZoneThree(ev){
            ev.preventDefault()
            if(this.zoneThree === null){
                
                let data = ev.dataTransfer.getData("text")
                if(data === 'gasolina_electricos'){
                    ev.target.appendChild(document.getElementById(data))
                    //console.log(data)
                    this.zoneThree = true
                    this.answers.a3 = true
                    this.showDrag(data)
                }
            }
        },

        drag(ev) {
            let values = ev.target.querySelector('p')
            ev.dataTransfer.setData("text", values.id);
        },


        /*drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
            console.log(data)
        }*/

        checkQuiz(){
            if(this.answers.a3 === true){
                //this.answeredQuiz1 = true
                let route = this.$route.path
                this.$store.dispatch('NextStep', route)
                //NextStep(route)
            }
        },

        showDrag(item){
            switch(item){
                case 'gasolina_electricos':
                    this.drags.d1 = false 
                    break
                case 'celda_hidrogeno':
                    this.drags.d2 = false
                    break
                case 'electrico_gasolina':
                    this.drags.d3 = false
                    break
            }
        }
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
