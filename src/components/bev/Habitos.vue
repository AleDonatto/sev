<template>
    <div>
        <content-template subtitle="<p class='mt-6'>Habitos de Carga de un BEV</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>800, 'mt-3': windowHeight<800}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>800 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 800, 'mt-3': windowHeight < 800 }" v-if="boxText">
                                <v-card :height="windowHeight > 800 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                        Algo que se puede percibir en la mayoría de los usuarios de vehículos eléctricos es que han 
                                        integrado los procesos de carga de sus vehículos fácilmente a su vida diaria. Va a ser en 
                                        los momentos en que no están ocupando el automóvil que aprovechan para conectarlo y recargar 
                                        las baterías. Como ejemplo se puede mencionar la carga durante la noche mientras el propietario 
                                        duerme, durante el día mientras se encuentra en su trabajo o cuando visita un centro comercial, 
                                        restaurante, cine, etc.
                                        <br><br>
                                        También vale la pena comentar que es más frecuente observar una carga parcial para la batería de 
                                        uno de estos autos que una carga completa desde 0 hasta el 100%.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-boxstep-content rounded-xl mx-10 px-5 py-5">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="" :class="{'font-size-22': windowHeight>800, 'font-size-19': windowHeight<800}">
                                <span class="font-weight-bold">El comportamiento o hábitos de recarga de un</span> <span class="text-yellow-p font-weight-bold">BEV</span> por parte de un cliente son 
                                muy distintos a los <span class="fonbt-weight-bold">hábitos de recarga de un tanque de combustible.</span>
                            </p>
                        </v-col>
                        <v-col cols="4" class="animate__animated animate__backInLeft">
                            <ul class=" px-7" :class="{'font-size-22': windowHeight>800, 'font-size-19': windowHeight<800}">
                                <li>
                                    La recarga de un vehículo eléctrico se puede integrar de manera fácil al día a día del usuario 
                                    aprovechando los periodos en los que el vehículo está estacionado.
                                </li>
                                <li>
                                    Los requerimientos de carga oscilan entre el 20% y 80%, y difícilmente se realizara una carga de 0% a 100%.
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="8" align="center" align-self="center" class="animate__animated animate__backInRight">
                            <v-img src="@/assets/cargando/sev1034.png" contain :max-height="windowHeight>800 ? '310': '210'"></v-img>
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
    data() {
        return {
        }
    },
    components: {
        ContentTemplate
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight','boxText', 'soundOn'])
    },
    mounted(){
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/bev/SEV-bev-6.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },39500)
            }
            
        }
    }
}
</script>

<style>

</style>