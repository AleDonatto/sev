<template>
    <div>
        <content-template title="LOS INICIOS" subtitle='<p class="mt-5">Evolución <br/> <span class="font-weight-bold">de la movilidad</span></p>'>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<780}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="../../assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 780 }" v-if="boxText">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<780}">
                                        Como te lo podrás imaginar, la historia de la movilidad se remonta a tiempos muy remotos. 
                                        Hace más de 3,600 millones de años que los homínidos empezaron a caminar erguidos y de acuerdo a 
                                        su evolución, empezaron   a buscar formas más eficientes para moverse o para mover los objetos de su 
                                        vida cotidiana.
                                        <br><br>
                                        Existen testimonios de que hace más de 3000 años ya se utilizaban bestias de carga y de tiro. 
                                        Al rededor del año 800 antes de Cristo, se hacía uso de los carruajes tirados por caballos para 
                                        propósitos diversos.
                                        <br><br>
                                        Curiosamente, a fines del siglo XIX, los carros tirados por caballos u otras bestias de tiro seguían 
                                        siendo utilizados ampliamente. En más de 2500 años la evolución había sido muy lenta.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-4 animate__animated animate__backInLeft">
                        <v-col cols="4">
                            <v-img src="../../assets/evolucion/men.png" contain :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                        </v-col>
                        <v-col cols="4" class="d-flex justify-space-between ">
                            <hr class="line-vertical">
                            <v-img src="../../assets/evolucion/guerrero.png" contain :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="4" class="">
                            <v-img src="../../assets/evolucion/siglo.png" contain :max-height="windowHeight > 900 ? '240' : '190'"></v-img>
                        </v-col>
                        
                        <v-col cols="4">
                            <v-img src="../../assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="text-center bg-gray-1 size-box mx-1">
                                <span class="font-weight-normal text-white" :class="{'font-size-34': windowHeight>900, 'font-size-26':windowHeight<780}">3,600</span>
                                <p class="font-weight-normal text-white" :class="{'font-size-22': windowHeight>900, 'font-size-19': windowHeight<780}">Millones de años</p>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="../../assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="text-center bg-gray-2 size-box mx-1 py-3">
                                <span class="font-weigth-thin text-white" :class="{'font-size-34': windowHeight>900, 'font-size-26':windowHeight<780}">800 a.C</span>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="../../assets/evolucion/division.png" max-width="850"></v-img>
                            <div class="text-center bg-gray-3 size-box mx-1 py-3">
                                <span class="text-white" :class="{'font-size-34': windowHeight>900, 'font-size-26':windowHeight<780}">Fines del siglo XIX</span>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script>
import ContentTemplate from "../templates/ContentTemplate.vue";
import { mapState } from 'vuex';

export default {
    data(){
        return {}
    },
    components: {
        ContentTemplate
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize', 'boxText', 'soundOn'])
    },
    mounted(){
        //this.canNext = true
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext:false})
                window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-1.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },45500)
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