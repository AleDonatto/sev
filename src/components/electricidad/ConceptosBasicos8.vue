<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p class='mt-6'>Conceptos Básicos</p>">
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
                                        Regresando al ejemplo anterior. Si multiplicamos el voltaje por el amperaje de cada uno 
                                        de estos adaptadores USB, podremos notar que el de la izquierda trabaja a 5 Watts de potencia 
                                        mientras que el de la derecha trabaja a 10.2 Watts de potencia. Es por esto que carga más 
                                        rápido a los dispositivos eléctricos.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 rounded-xl bg-color">
                        <v-col cols="12" align="start" class="animate__animated animate__backInDown">
                            <p class="" :class="{'font-size-30': windowHeight>800, 'font-size-20': windowHeight<800}">
                                <span class="font-weight-bold">Watt:</span> Unidad de medicion de la potencía eléctrica.
                            </p>
                            <p class="" :class="{'font-size-30': windowHeight>800, 'font-size-20': windowHeight<800}">
                                <span class="font-weight-bold">Watt:</span>Volt X Amper.
                            </p>
                        </v-col>

                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft">
                            <v-img src="@/assets/electricidad/cubito.png" contain :max-height="windowHeight>800 ? '230': '140'"></v-img>
                            <p class="font-weight-bold mt-2" :class="{'font-size-22': windowHeight>800, 'font-size-19': windowHeight<800}">5 Volts, <br> 1 Amper <br> 5 Watts</p>
                        </v-col>
                        <v-col cols="1" align="center">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" align="center" class="animate__animated animate__backInRight">
                            <v-img src="@/assets/electricidad/cubo.png" contain :max-height="windowHeight>800 ? '230': '140'"></v-img>
                            <p class="font-weight-bold mt-2" :class="{'font-size-22': windowHeight>800, 'font-size-19': windowHeight<800}">5 Volts, <br> 2.1 Amper <br> 10.2 Watts</p>
                        </v-col>
                    </v-row>

                    <v-snackbar v-model="snackbar" bottom right color="#FDBD31" timeout="10000" height="200" width="320" rounded="xl" multi-line vertical>
                        <p class="font-weight-bold text-black  font-size-20 px-5 py-4">
                            <span class="text-white">A</span> mayor potencia eléctrica <span class="text-white">en un cargador</span> más rápido <span class="text-white">se puede cargar una batería.</span>
                        </p>
                        <template v-slot:action>
                            <v-btn @click="snackbar = !snackbar" text><span class="black--text">Cerrar</span></v-btn>
                        </template>
                    </v-snackbar>
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
            snackbar: true,
        }
    },
    components: {
        ContentTemplate
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize', 'boxText', 'soundOn'])
    },
    mounted(){
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-7.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },20500)
            }
            
        }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.vertical-line{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: white;   
    z-index: 1;
}
</style>