<template>
    <div>
        <content-template title="ACTUALIDAD" subtitle='<p class="mt-5">Evolución <br/> <span class="font-weight-bold">de la movilidad</span></p>'>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        Algo curioso es que en estos últimos 100 años nuevamente el cambio ha sido paulatino. Si observamos el 
                                        mercado automotriz actual vamos a encontrar que predominan los vehículos con motor a combustión 
                                        interna y que también se encuentran presentes los vehículos híbridos y los vehículos eléctricos. 
                                        <br><br>
                                        Estos últimos han incrementado notablemente en volumen de ventas en años recientes.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-4 animate__animated animate__backInLeft">
                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/car4.png" contain max-height="240"></v-img>
                        </v-col>
                        <v-col cols="4" class="d-flex justify-space-between">
                            <hr class="line-vertical">
                            <v-img src="@/assets/evolucion/car5.png" contain max-height="240"></v-img>
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/car6.png" contain max-height="240"></v-img>
                        </v-col>

                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="bg-gray-1 size-box text-center mx-1">
                                <span class="text-center font-weigth-normal text-white" :class="{'font-size-30': windowHeight>900, 'font-size-26':windowHeight<700}">
                                    Motores a combustión interna (ICE)
                                </span>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="bg-gray-2 size-box text-center mx-1">
                                <span class=" front-weight-normal text-white" :class="{'font-size-30': windowHeight>900, 'font-size-26':windowHeight<700}">
                                    Autos híbridos (MHEV, Full HEV y PHEV)
                                </span>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="size-box bg-gray-3 text-center mx-1">
                                <span class=" font-weight-normal text-white" :class="{'font-size-30': windowHeight>900, 'font-size-26':windowHeight<700}">
                                    Autos eléctricos (BEV)
                                </span>
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
        return {

        }
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize'])
    },
    mounted(){
        this.$store.commit('StateAssign', {canNext: false})
        //this.canNext = true
        this.playAudio()
    },
    methods: {
        playAudio(){
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-3.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },23500)
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