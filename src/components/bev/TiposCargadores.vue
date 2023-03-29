<template>
    <div>
        <content-template subtitle="<p class='mt-6'>Tipos de cargadores</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>800, 'mt-3': windowHeight<800}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>800 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 800, 'mt-3': windowHeight < 800 }" v-if="boxText">
                                <v-card :height="windowHeight > 800 ? 130 : 110"  class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}">
                                        ¿Alguna vez has visto estos contactos para dispositivos eléctricos? Seguramente hay algunos 
                                        que te son conocidos y otros que nunca habrás visto a menos de que hayas salido de viaje a 
                                        otros países. Algo que resulta evidente es que para poder conectar un dispositivo eléctrico 
                                        o electrónico en estos contactos, debe contar con la conexión adecuada o con un adaptador.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 px-5 py-5 rounded-xl bg-boxstep-content animate__animated animate__backInLeft">
                        <v-col cols="3">
                            <v-img src="@/assets/cargando/conector1.png" contain :max-height="windowHeight>800 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/cargando/conector2.png" contain :max-height="windowHeight>800 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/cargando/conector3.png" contain :max-height="windowHeight>800 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/cargando/conector4.png" contain :max-height="windowHeight>800 ? '240': '140'"></v-img>
                        </v-col>

                        <v-col cols="4">
                            <v-img src="@/assets/cargando/conector5.png" contain :max-height="windowHeight>800 ? '240': '120'"></v-img>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/cargando/conector6.png" contain :max-height="windowHeight>800 ? '240': '120'"></v-img>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/cargando/conector7.png" contain :max-height="windowHeight>800 ? '240': '120'"></v-img>
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
        ...mapState(['windowHeight', 'windowSize', 'boxText', 'soundOn'])
    },
    mounted(){
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/bev/SEV-bev-7.mp3')
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

</style>