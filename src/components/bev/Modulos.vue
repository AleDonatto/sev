<template>
    <div>
        <content-template subtitle="<p class='mt-6'>Cargando un BEV</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<780}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 780 }" v-if="boxText">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<780}">
                                        Los cargadores Modo 1 son los cargadores portátiles que se suelen proporcionar a los compradores 
                                        de vehículos eléctricos o híbridos enchufables. Pueden trabajar entre 110 y 240 volts y 
                                        normalmente se conectan a las tomas domésticas. Dependiendo de las características de la 
                                        instalación eléctrica en cuestión, pueden trabajar a mayor o menor voltaje y amperaje y, por 
                                        consecuencia, tardar más o menos tiempo en cargar un vehículo.
                                        <br><br>
                                        Los cargadores Modo 2, también conocidos como Wallbox, trabajan a mayor voltaje y amperaje y, 
                                        por lo mismo, tienen una mayor potencia y pueden cargar a los vehículos eléctricos a mayor 
                                        velocidad. Este tipo de cargadores se instalan frecuentemente en el domicilio de los propietarios 
                                        de los autos eléctricos y también se encuentran con frecuencia en los estacionamientos de centros 
                                        comerciales, restaurantes, edificios corporativos, etc. Este tipo de cargador es el que más se 
                                        recomienda para la carga de un vehículo eléctrico.
                                        <br><br>
                                        Los cargadores Modo 3, también llamados cargadores rápidos o supercargadores, trabajan con 
                                        corriente directa y a alto voltaje. Es por esto que pueden cargar la batería de un vehículo 
                                        eléctrico con mucha más velocidad. Normalmente este tipo de cargadores los encontraremos en la 
                                        red de carreteras o puntos de carga específicos y se recomienda utilizarlos únicamente cuando 
                                        se necesite un tiempo de carga muy rápido. De lo contrario, es mejor utilizar un cargador Modo 3.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="h-100 mx-10 px-5 py-1 rounded-xl bg-boxstep-content" v-if="countModos >= 1">
                        <v-col cols="3" class="animate__animated animate__backInDown" v-if="countModos >= 1">
                            <v-card class="rounded-lg pa-0" :height="windowHeight>900 ? '550': '330'" :width="windowHeight>900 ? '280': '190'">
                                <v-img src="@/assets/cargando/modo1.png" :height="windowHeight > 900 ? '540': windowHeight<660 ? '320': '320'" contain></v-img>

                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInUp" v-if="countModos >= 2">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'" :width="windowHeight>900 ? '280': '190'">
                                <v-img src="@/assets/cargando/modo2.png" :height="windowHeight > 900 ? '540': windowHeight<660 ? '320': '320'" contain></v-img>

                            </v-card>
                        </v-col>
                        <v-col cols="3" class="animate__animated animate__backInDown" v-if="countModos >= 3">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'" :width="windowHeight>900 ? '280': '190'">
                               <v-img src="@/assets/cargando/modo3.png" :height="windowHeight > 900 ? '540': windowHeight<660 ? '320': '320'" contain></v-img>

                            </v-card>
                        </v-col>
                        <!--<v-col cols="3" class="animate__animated animate__backInUp" v-if="countModos >= 4">
                            <v-card class="rounded-lg" :height="windowHeight>900 ? '550': '330'" :width="windowHeight>900 ? '280': '190'">
                                <v-img src="@/assets/cargando/modo4.png" :height="windowHeight > 900 ? '540': windowHeight<660 ? '320': '320'" contain></v-img>
                            </v-card>
                        </v-col>-->
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script>
import ContentTemplate from '../templates/ContentTemplate.vue';
import { mapState } from 'vuex';

export default{
    data() {
        return {
            countModos: 1
        }
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize', 'count', 'soundOn', 'boxText'])
    },
    components: {
        ContentTemplate,
    },
    mounted(){
        //this.count = 0
        this.$store.commit('StateAssign', {count: 0})
       

        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/bev/SEV-bev-2.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.playAudioModo2()
                },22500)
            }else{
                this.countModos = 4
            }
            
        },
        playAudioModo2(){
            this.countModos = 2
            window.audio.src = require('@/assets/audios/bev/SEV-bev-3.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.playAudioModo3()
            },26500)
        },
        playAudioModo3(){
            this.countModos = 3
            window.audio.src = require('@/assets/audios/bev/SEV-bev-4.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext: true})
            },32500)
        },
        playAudioModo4(){
            this.countModos = 4
            window.audio.src = require('@/assets/audios/bev/SEV-bev-5.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext: true})
            },30500)
        }
    }
}
</script>

<style scoped>
.height-100{
    height: 37vh;
}
</style>