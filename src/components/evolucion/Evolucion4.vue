<template>
    <div>
        <content-template title="PRÓXIMAMENTE" subtitle='<p class="mt-5">Evolución <br/> <span class="font-weight-bold">de la movilidad</span></p>'>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>800, 'mt-3': windowHeight<800}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>800 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft" :class="{'mt-5': windowHeight > 800, 'mt-3': windowHeight < 800 }" v-if="boxText">
                                <v-card :height="windowHeight > 800 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                        ¿Pero, qué nos depara el futuro? Bueno, debido a la amenaza global por el cambio climático, a los 
                                        adelantos tecnológicas y a la eventual escasez de combustibles fósiles, se puede anticipar que la 
                                        transición a vehículos "limpios" o 0 emisiones será acelerada. En varios países se anticipa que en 
                                        unos años quede prohibida la venta de autos con motor a combustión interna que ocupen derivados de 
                                        petroleo. Esto va a generar una transición aún más aceleradas a las nuevas tecnologías.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-10 mb-10 animate__animated animate__backInLeft">
                        <v-col cols="6" class="">
                            <v-img src="@/assets/evolucion/sev1024.png" contain :max-height="windowHeight > 800 ? '170' : '150'"></v-img>
                        </v-col>
                        <v-col cols="6">
                            <v-img src="@/assets/evolucion/sev1160.png" contain :max-height="windowHeight > 800 ? '170' : '150'"></v-img>
                        </v-col>
                        <v-col cols="4" class="mt-5">
                            <v-img src="@/assets/evolucion/camioneta.png" contain :max-height="windowHeight > 800 ? '170' : '150'"></v-img>
                        </v-col>
                        <v-col cols="4" class="mt-5">
                            <v-img src="@/assets/evolucion/sedan.png" contain :max-height="windowHeight > 800 ? '170' : '150'"></v-img>
                        </v-col>
                        <v-col cols="4" class="mt-5">
                            <v-img src="@/assets/evolucion/trailer.png" contain :max-height="windowHeight > 800 ? '170' : '150'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-5 animate__animated animate__backInRight">
                        <v-col cols="12" align-self="center">
                            <div class="text-center bg-gray">
                                <span class=" font-size-48 text-white" :class="{'font-size-48': windowHeight>800, 'font-size-30': windowHeight<800}">Autos eléctricos (BEV) y otras tecnologías 0 emisiones</span>
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

export default {
    data(){
        return {

        }
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize', 'soundOn', 'boxText'])
    },
    mounted() {
        //this.canNext = true
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-4.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },28500)
            }
        }
    }

}
</script>

<style scoped>
.bg-gray{
    background-color: #B3B3B3;
}
</style>