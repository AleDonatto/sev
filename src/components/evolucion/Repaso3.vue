<template>
    <div>
        <content-template subtitle="REPASO">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9" align="start">
                            <div class="box-color-instructions py-6 px-4" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}" v-if="boxText">
                                <p class=" font-size-26">
                                    Las siglas <span class="text-yellow front-weight-bold">BEV</span> (por su acrónimo en inglés), corresponden a:
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                    
                    <v-row class="mx-16" justify="center" :class="{'mt-10': windowHeight>900, 'mt-0': windowHeight<700}">
                        <v-col cols="12" lg="5" md="6">
                            <v-radio-group v-model="answers.a1" v-if="answeredQuiz3 === false">
                                <v-radio value="battery-efficient" class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value" >
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-4">Battery Efficient Vehicle</p>
                                    </template>
                                </v-radio>
                                <v-radio value="beatifull-efficent" class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-4">Beautiful Efficient Vehicle</p>
                                    </template>
                                </v-radio>
                                <v-radio value="battery-electric" class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-4">Battery Electric Vehicle</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                            <v-radio-group v-else v-model="response">
                                <v-radio value="battery-efficient" class="my-4" color="#FDBD31" disabled>
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-3">Battery Efficient Vehicle</p>
                                    </template>
                                </v-radio>
                                <v-radio value="beatifull-efficent" class="my-4" color="#FDBD31" disabled>
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-3">Beautiful Efficient Vehicle</p>
                                    </template>
                                </v-radio>
                                <v-radio value="battery-electric" label="text" class="my-4" color="#FDBD31" disabled>
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-3">Battery Electric Vehicle</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row justify="center" :class="{'mt-15': windowHeight>900, 'mt-0': windowHeight<700}">
                        <v-col cols="2">
                            <v-btn class="" rounded color="#FDBD31" :disabled="answers.a1 !== 'battery-electric'"
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
                a1: null, 
                a2: null,
                a3: null,
            },
            response: 'battery-efficient'
        }
    },
    components: {
        ContentTemplate,   

    },
    computed: {
        ...mapState(['answeredQuiz3','canNext', 'windowHeight', 'windowSize','boxText','soundOn'])
    },
    mounted() {
        this.$store.commit('StateAssign', {canNext: false})

        this.playAudio()
        /*if(this.answeredQuiz3 === false){
            //this.canNext = false
            this.$store.commit('StateAssign', {canNext: false})
        }*/
    },
    methods: {
        ...mapActions(['NextStep']),
        checkQuiz(){
            if(this.answers.a1 === 'battery-electric'){
                this.$store.commit('StateAssign', {answeredQuiz3: true})
                //this.answeredQuiz3 = true
                let route = this.$route.path
                this.$store.dispatch('NextStep', route)
                //NextStep(route)
            }
        },
        playAudio(){
            if(this.soundOn === true){
                window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-14.mp3')
                window.audio.play()
            }
            
            /*setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },4500)*/
        }
    }
}
</script>

<style scoped>
.box-color-instructions{
    border: 1px 1px;
    border-style: solid;
    border-color: #FDBD31;
    border-width: 4px;
    border-radius: 10px;
}

.text-yellow{
    color: #FDBD31;
}

.v-slider--horizontal .v-slider__track-container{
    height: 16px;
    top: 10%
}
.v-slider__thumb-label{
    background-color: transparent !important;
}
.v-slider__thumb{
    display: none;
}
.v-slider__track-fill{
    border-radius: 20px;
}
.v-slider__track-background{
    border-radius: 20px;
}
</style>