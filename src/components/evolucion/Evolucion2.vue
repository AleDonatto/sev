<template>
    <div>
        <content-template title="LOS INICIOS" subtitle='<p class="mt-5">Evolución <br/> <span class="font-weight-bold">de la movilidad</span></p>'>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }" v-if="boxText">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        Es a fines del siglo XIX que se empieza a dar una evolución. En 1885 Karl Benz presentó al mundo su 
                                        "motorwagen"; considerado el primer automóvil con motor de combustión interna. Poco tiempo después, 
                                        Thomas Parker presentó un vehículo eléctrico en Gran Bretaña y Ferdinand Porsche el primer automóvil 
                                        híbrido eléctrico-gasolina.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-4 animate__animated animate__backInLeft">
                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/car1.png" contain :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                        </v-col>
                        <v-col cols="4" class="d-flex justify-space-between ">
                            <hr class="line-vertical">
                            <v-img src="@/assets/evolucion/car2.png" contain :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/car3.png" contain :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                        </v-col>

                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="text-center bg-gray-1 size-box mx-1">
                                <span class="font-weight-normal text-white" :class="{'font-size-34': windowHeight>900, 'font-size-26':windowHeight<700}">1885</span>
                                <p class="font-weight-normal text-white mx-2" :class="{'font-size-22': windowHeight>900, 'font-size-19': windowHeight<700}">Benz motorwagen. Primer automóvil a gasolina.</p>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="text-center bg-gray-2 size-box mx-1">
                                <span class="font-weight-normal text-white" :class="{'font-size-34': windowHeight>900, 'font-size-26':windowHeight<700}">1895</span>
                                <p class="font-weight-normal text-white" :class="{'font-size-22': windowHeight>900, 'font-size-19': windowHeight<700}">Thomas Parker. Auto eléctrico.</p>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="text-center bg-gray-3 size-box mx-1">
                                <span class="font-weight-normal text-white" :class="{'font-size-34': windowHeight>900, 'font-size-26':windowHeight<700}">1898</span>
                                <p class="font-weight-normal text-white" :class="{'font-size-22': windowHeight>900, 'font-size-19': windowHeight<700}">Ferdinand Porsche. Auto híbrido eléctrico-gasolina</p>
                            </div>
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

export default{
    data(){
        return {}
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize','soundOn', 'boxText'])
    },
    mounted(){
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-2.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },22500)
            }
        }
    }
}
</script>

<style scoped>
.bg-gray-1{
    background-color: #929292;
    opacity: 0.6;
}
.bg-gray-2{
    background-color: #929292;
    opacity: 0.8;
}
.bg-gray-3{
    background-color: #929292;
}

.size-box{
    height: 85px !important;
    width: 99% !important;
}
.line-vertical{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: #FDBD31;   
    z-index: 1;
}
</style>