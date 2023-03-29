<template>
    <div>
        <content-template subtitle="<p class='mt-6'>Tipos de cargadores</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-4': windowHeight>800, 'mt-3': windowHeight<800}">
                    <v-row justify="start" class="mb-0">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>800 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 800, 'mt-3': windowHeight < 800 }" v-if="boxText">
                                <v-card :height="windowHeight > 800 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                        Para los autos eléctricos es igual. En México la mayor parte de los cargadores corresponden al 
                                        Type 1 también conocido como SAE J 1772. Existen también varios del tipo GBT. Lo que es un hecho, 
                                        es que el conector del vehículo debe ser compatible con el del cargador, o bien, puede utilizarse 
                                        un adaptador.
                                        <br><br>
                                        También es importante destacar que hay tomas de corriente y cargadores específicos para carga 
                                        con corriente alterna (cargadores modo 2 y 3) y otros para carga con corriente directa 
                                        (cargadores modo 4).
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="start" class="mx-10 px-5 py-5 rounded-xl bg-boxstep-content mt-0">
                        <v-col cols="3" align-self="center" align="end" class="animate__animated animate__backInLeft">
                            <p class="font-weight-bold  text-right" :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                No todos los
                            </p>
                            <p class="font-weight-bold  text-right" :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                conectores son
                            </p>
                            <p class=" text-right" :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                <span class="font-weight-bold">Iguales,</span> hay que
                            </p>
                            <p class="font-weight-bold  text-right text-yellow-p" :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                escoger el adecuado
                            </p>
                            <p class=" text-right" :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                pára cada vehiculos
                            </p>
                        </v-col>
                        <v-col cols="9" class="animate__animated animate__backInRight">
                            <v-img src="@/assets/cargando/tableCargadores.png" contain :max-height="windowHeight<800 ? '305': '600'"></v-img>
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
        ContentTemplate,
    },
    mounted() {
        
        this.playAudio()
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize','boxText', 'soundOn'])
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/bev/SEV-bev-8.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },35500)
            }
            
        }
    }
}
</script>

<style scoped>

</style>