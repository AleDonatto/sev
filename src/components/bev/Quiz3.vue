<template>
    <div>
        <content-template title="REPASO DE SECCION" subtitle="Cargando un BEV">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>800, 'mt-5': windowHeight<780}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>800 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz" v-if="boxText">
                                <p class="py-5 px-4  font-size-24">
                                    Cuando un vehículo eléctrico cuenta con capacidad de carga utilizando cargadores modo 4 de 
                                    corriente directa, se puede tener un tiempo de carga mucho más reducido (dependiendo de la 
                                    potencia del cargador CD utilizado)
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="12" lg="4" md="6">
                            <v-radio-group v-model="answers.a1">
                                <v-radio class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value" value="cierto">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">Cierto</p>
                                    </template>
                                </v-radio>
                                <v-radio value="falso" class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value" >
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">Falso</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="2" align="center">
                            <v-btn rounded color="#FDBD31" :disabled="answers.a1 !== 'cierto'" @click="checkQuiz">
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
import user from '@/assets/evolucion/user.png'
import { mapActions, mapState } from 'vuex';

export default{
    data(){
        return {
            answers: {
                a1: null,
                a2: null,
            }
        }
    },
    components: {
        ContentTemplate
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize', 'soundOn', 'boxText'])
    },
    mounted() {
        //this.canNext = false
        this.$store.commit('StateAssign', {canNext: false})
        this.playAudio()
    },
    methods: {
        ...mapActions(['NextStep']),
        checkQuiz(){
            if(this.answers.a1 === 'cierto'){
                const path = this.$route.path 
                this.$store.dispatch('NextStep', path)
                //NextStep(path)
            }
        },
        playAudio(){
            if(this.soundOn === true){
                window.audio.src = require('@/assets/audios/bev/SEV-bev-11.mp3')
                window.audio.play()
            }
            
        }
    }
}
</script>

<style>

</style>