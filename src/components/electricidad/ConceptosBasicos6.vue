<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p class='mt-6'>Conceptos Básicos</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<750}">
                    <v-row class="" justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 750 }" v-if="boxText">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<750}">
                                        La siguiente unidad que vamos a presentar se llama el Watt o vatio. Esta es mucho más conocida ya 
                                        que cuando tenemos, o teníamos, que reemplazar una bombilla en casa, debíamos decidir de cuantos 
                                        Watts debería de ser.
                                        <br><br>
                                        El foco de la izquierda tiene una potencia de 60 Watts mientras que el de la derecha tiene una 
                                        potencia de 100 Watts. Evidentemente, el de la derecha tiene capacidad de emitir más luz, 
                                        pero también va a generar un mayor consumo de energía eléctrica.
                                        <br><br>
                                        La potencia eléctrica está determinada por la multiplicación del voltaje y el amperaje.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row class="rounded-xl bg-color mx-10">
                        <v-col cols="12" align="center" class="animate__animated animate__backInDown">
                            <p class="" :class="{'font-size-34': windowHeight>900, 'font-size-22': windowHeight<750}">
                                <span class="font-weight-bold">Watt:</span> unidad de medición de la potencia eléctrica
                            </p>
                            <p class="font-weight-bold " :class="{'font-size-34': windowHeight>900, 'font-size-22': windowHeight<750}">Watt = Volt X Amper</p>
                        </v-col>

                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft">
                            <v-img src="@/assets/electricidad/foco.png" contain :max-height="windowHeight>900 ? '230': '150'"></v-img>
                            <p class="font-weight-bold  font-size-22">60 W</p>
                        </v-col>
                        <v-col cols="1" align="center">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" align="center" class="animate__animated animate__backInRight">
                            <v-img src="@/assets/electricidad/foco.png" contain :max-height="windowHeight>900 ? '230': '150'"></v-img>
                            <p class="font-weight-bold  text-center font-size-22">100 W</p>
                        </v-col>
                    </v-row>

                    <v-snackbar v-model="snackbar" bottom right color="#FDBD31" timeout="10000" class="mx-16" height="200" width="320" rounded="xl" multi-line vertical>
                        <template v-slot:actions>
                            <v-btn @click="snackbar = !snackbar"><span class="text-black">Cerrar</span></v-btn>
                        </template>
                        <p class="font-weight-bold text-black  font-size-20 px-5 py-4">
                            A mayor potencia eléctrica, mayor consumo de energía.
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
import user from '@/assets/evolucion/user.png'
import foco from '@/assets/electricidad/foco.png'
import { mapState } from 'vuex';

export default{
    data(){
        return {
            snackbar: true
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
                window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-5.mp3')
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