<template>
    <div>
        <content-template subtitle="Tipos de tren <br/> motriz más comúnes">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<780}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row no-gutters justify="end" :class="{'margin-top': windowHeight>900, 'margin-top-md': windowHeight<780 && windowHeight>660, 'margin-top-sm': windowHeight<660}">
                        <v-col cols="2"></v-col>
                        <v-col cols="10">
                            <v-row no-gutters>

                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/h1.png" contain :max-height="windowHeight> 900 ? '110': '80'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/h2.png" contain :max-height="windowHeight> 900 ? '110': '80'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/h3.png" contain :max-height="windowHeight> 900 ? '110': '80'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/h4.png" contain :max-height="windowHeight> 900 ? '110': '80'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/h5.png" contain :max-height="windowHeight> 900 ? '110': '80'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/h6.png" contain :max-height="windowHeight> 900 ? '110': '80'"></v-img>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutters justify="center">
                        <v-col cols="2">
                            <v-col>
                                <v-img src="@/assets/evolucion/opciones.png" contain :max-height="windowHeight> 900 ? '510': '350'"></v-img>
                            </v-col>
                        </v-col>
                        <v-col cols="10">
                            <v-row no-gutters justify="end">
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/tice.png" contain :max-height="windowHeight>900 ? '510': '350'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/tmhev.png" contain :max-height="windowHeight>900 ? '510': '350'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/tfullhev.png" contain :max-height="windowHeight>900 ? '510': '350'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/tphev.png" contain :max-height="windowHeight>900 ? '510': '350'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/tbev.png" contain :max-height="windowHeight>900 ? '510': '350'"></v-img>
                                </v-col>
                                <v-col cols="2">
                                    <v-img src="@/assets/evolucion/tfsev.png" contain :max-height="windowHeight>900 ? '510': '350'"></v-img>
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
        return{
            
        }
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize', 'canNext', 'soundOn'])
    },
    mounted(){
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-15.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },6500)
            }
        },
    }
}
</script>

<style scoped>
.bg-black{
    background: black;
}
.width-box{
    width: 8px !important;
}

.margin-top{
    margin-top: -10vh;
}

.margin-top-md{
    margin-top: -14vh;
}

.margin-top-sm{
    margin-top: -17vh;
}
</style>