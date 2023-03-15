<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p>Conceptos Básicos</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        El primer concepto que vamos a explorar el VOLTIO o Volt. Se trata de unidad que mide 
                                        la diferencia de potencial eléctrico entre dos puntos; pero como esto no resulta del 
                                        todo claro, podemos decir también que el Voltaje nos habla de la "cantidad" de corriente 
                                        eléctrica.
                                        <br><br>
                                        Las pilas que conocemos pueden tener diferentes voltajes; las pequeñas AAA 1.5 Volts, las 
                                        cuadradas que se usaban para los despertadores tienen 9 Volts y los acumuladores de autos 
                                        normalmente trabajan a 12 Volts. Todas las pilas o baterías utilizan lo que se denomina 
                                        corriente directa.
                                        <br><br>
                                        Por otra parte, cuando vemos el enchufe de electricidad que tenemos en casa, ahi circula 
                                        corriente eléctrica que puede oscilar entre los 110 y los 240 Voltios dependiendo de la 
                                        instalación que se tenga en casa. A este tipo de contactos se suministra la corriente que 
                                        conocemos como corriente alterna.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10" :class="{'mt-10':windowHeight>900, 'mt-0':windowHeight<700}">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="text-center " :class="{'font-size-36':windowHeight>900, 'font-size-26':windowHeight<700}">
                                <span class="font-weight-bold">Volt:</span> unidad de medicion de fuerza eléctrica.
                            </p>
                        </v-col>
                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft">
                            <p class="font-weight-bold " :class="{'font-size-36':windowHeight>900, 'font-size-26':windowHeight<700}">Corriente Directa</p>
                            <v-row justify="center">
                                <v-col cols="6">
                                    <v-img src="@/assets/electricidad/pila.png" contain :max-height="windowHeight >900 ? '220': '150'"></v-img>
                                    <p class="font-weight-bold  font-size-24">9 V</p>
                                </v-col>
                                <v-col cols="6">
                                    <v-img src="@/assets/electricidad/bateria.png" contain max-height="219"></v-img>
                                    <p class="font-weight-bold font-size-24">12 V</p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="1">
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="5" class="animate__animated animate__backInRight">
                            <p class="font-weight-bold  text-center" :class="{'font-size-36':windowHeight>900, 'font-size-26':windowHeight<700}">Corriente Alterna</p>
                            <v-row justify="center">
                                <v-col cols="12">
                                    <v-img src="@/assets/electricidad/contacto.png" contain :max-height="windowHeight >900 ? '220': '150'" ></v-img>
                                    <v-row justify="center" :class="{'mx-10':windowHeight>900, 'mx-2': windowHeight<700}">
                                        <v-col cols="7" align="center">
                                            <p class="">El voltaje hace referencia a la “cantidad” de corriente</p>
                                        </v-col>
                                        <v-col cols="5" align="center">
                                            <p class="font-weight-bold  font-size-24">110 V</p>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>    
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script>
import ContentTemplate from '../templates/ContentTemplate.vue';
import { mapState } from 'vuex';

export default {
    data(){
        return {

        }
    },
    components: {
        ContentTemplate
    },
    mounted(){
        //this.canNext = true
        this.$store.commit('StateAssign', {canNext: false})
        this.playAudio()
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize'])
    },
    methods: {
        playAudio(){
            window.audio.src = require('@/assets/audios/intro.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },4000)
        }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
.line-vertical{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: white;   
    z-index: 1;
}
</style>