<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p class='mt-6'>Aplicaciones Prácticas</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>800, 'mt-3': windowHeight<800}">
                    <v-row justify="space-between">
                        <v-col cols="2" align="start">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>800 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <!--<v-col cols="8">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 800, 'mt-3': windowHeight < 800 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="font-size-22 ">
                                        Hay un cambio total de esta diapositiva, me parece que está incluido con los cambios que ya se }
                                        ven reflejados en las siguientes. Si no lo tienen, por favor háganmelo saber para poder generarlo.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>-->
                        <v-col cols="2" align="end" class="animate__animated animate__backInDown">
                            <v-img src="@/assets/electricidad/bateria-sev.png" contain max-height="310" class="" :class="{'position-image': windowHeight>800, 'position-image-md': windowHeight<800}"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl mx-10 bg-color" :class="{'position-box': windowHeight>800, 'position-box-md': windowHeight<800}">
                        <v-col cols="12" align="center" class="mt-8 animate__animated animate__backInLeft" >
                            <p class="" :class="{'font-size-30':windowHeight>800, 'font-size-24': windowHeight<800}">Las <span class="font-weight-bold">características</span> de un bateria del <span class="font-weight-bold text-yellow-p">para un vehículo eléctrico:</span></p>
                        </v-col>
                        <v-col cols="9" class="animate__animated animate__backInRight" :class="{'my-10 ': windowHeight>800, 'my-5': windowHeight<800}">
                            <div class="my-2">
                                <div class="d-inline">
                                    <p class="" :class="{'font-size-30':windowHeight>800, 'font-size-22': windowHeight<800}">
                                        <span class="font-weight-bold pr-3">1</span> Tecnología: Litio fosfato-ferroso LiFePO4
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="" :class="{'font-size-30':windowHeight>800, 'font-size-22': windowHeight<800}"><span class="font-weight-bold text-yellow-p pr-3">2</span> Voltaje (V): 115.2 (Lite);</p>
                                <p class="text-left" :class="{'font-size-30':windowHeight>800, 'font-size-22': windowHeight<800}"><span class="pl-15">294.4 (Bold)</span></p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="" :class="{'font-size-30':windowHeight>800, 'font-size-24': windowHeight<800}"><span class="font-weight-bold pr-3">3</span> Amper-hora (Ah): 150 (Lite);</p>
                                <p class="text-left" :class="{'font-size-30':windowHeight>800, 'font-size-22': windowHeight<800}"> 100 (Bold)</p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="" :class="{'font-size-30':windowHeight>800, 'font-size-24': windowHeight<800}"><span class="font-weight-bold text-yellow-p pr-3">4</span> Capacidad: 17.2 (Lite);</p>
                                <p class="text-left" :class="{'font-size-30':windowHeight>800, 'font-size-22': windowHeight<800}"> 24.9 (Bold)</p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="" :class="{'font-size-30':windowHeight>800, 'font-size-22': windowHeight<800}"><span class="font-weight-bold pr-3">5</span> Enfriamiento: aire (Lite);</p>
                                <p class="text-left" :class="{'font-size-30':windowHeight>800, 'font-size-22': windowHeight<800}">Líquido (Bold)</p>
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
import { mapActions, mapState } from 'vuex';

export default{
    data(){
        return {

        }
    },
    components: {
        ContentTemplate,
    },
    mounted() {
        this.$store.commit('StateAssign', {canNext: false})
        //this.canNext =false
        this.playAudio()
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize']),
        playAudio(){
            window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-11.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },58500)
        }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.position-image{
    margin-top: 80px;
}

.position-image-md{
    margin-top: 10px;
}
.position-box{
    margin-top: -150px;
}

.position-box-md{
    margin-top: -80px;
}
</style>