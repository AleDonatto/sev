<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p class='mt-6'>Conceptos Básicos</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<750}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 750 }" v-if="boxText">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<750}">
                                        Abundando un poco en los diferentes tipos de corriente eléctrica.
                                        <br><br>
                                        La corriente alterna tiene como ventaja principal que puede ser transmitida a través de cableado 
                                        por distancias muy largas sin tener perdidas considerables. La desventaja es que no puede ser 
                                        almacenada en baterías. Las tomas de corriente que encontramos habitualmente en nuestras casas 
                                        son de corriente alterna.
                                        <br><br>
                                        La corriente directa, por otra parte, es la que puede ser almacenada en baterías y todas las 
                                        baterías y pilas utilizan este tipo de corriente. Una de sus desventajas es que no puede ser 
                                        transmitida por largas distancias usando cableado ya que habría grandes pérdidas energéticas.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row class="rounded-xl mx-10 bg-color" justify="center" :class="{'mt-10': windowHeight>900, 'mt-1': windowHeight<750}">
                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft">
                            <p class="font-weight-bold " :class="{'font-size-30':windowHeight>900, 'font-size-22':windowHeight<750}">Corriente Alterna (CA)</p>
                            <v-img src="@/assets/electricidad/taladro-alterna.png" contain :max-height="windowHeight>900 ? '320': '160'" class="mt-0"></v-img>
                            <ul class="mt-2" :class="{'w-50': windowHeight>900, 'w-100':windowHeight<750}">
                                <li class="text-left">Se puede transmitir largas distancias sin grandes pérdidas.</li>
                                <li class="text-left">No se puede almacenar.</li>
                                <li class="text-left">Es la que se encuentra en las conexiones “de pared”.</li>
                            </ul>
                        </v-col>
                        <v-col cols="1">
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="5" class="animate__animated animate__backInRight">
                            <p class="font-weight-bold  text-center" :class="{'font-size-30':windowHeight>900, 'font-size-22':windowHeight<750}">Corriente Directa (CD)</p>
                            <v-img src="@/assets/electricidad/taladro-directo.png" contain :max-height="windowHeight>900 ? '320': '160'" class="mt-5"></v-img>
                            <ul class="mt-2" :class="{'w-50': windowHeight>900, 'w-100':windowHeight<750}">
                                <li class="text-left">No se puede transmitir largas distancias ya que habría grandes pérdidas de voltaje.</li>
                                <li class="text-left">Se puede almacenar en baterías de manera eficiente</li>
                            </ul>
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
        return {}
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'boxText', 'soundOn'])
    },
    mounted(){
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-2.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },40500)
            }
            
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