<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p class='mt-6'>Aplicaciones Prácticas</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>800, 'mt-3': windowHeight<800}" >
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>800 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 800, 'mt-3': windowHeight < 800 }" v-if="boxText">
                                <v-card :height="windowHeight > 800 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<800}" v-if="count === 0">
                                        Cuando se desea calcular el costo de carga de una batería, hay que tener en cuenta dos factores 
                                        principales: <br>
                                        1) la capacidad de la batería y su estado de carga, es decir, cuantos kilo watt hora 
                                        se desean cargar; y <br>
                                        2) el precio del kilo watt hora suministrado en el cargador o por parte de 
                                        quien distribuye la corriente eléctrica.
                                        <br><br>
                                        En este ejemplo, calcularemos el costo de llenar una batería de 50 kilo watt hora desde el 20% 
                                        hasta el 100% de su capacidad. De tal manera que la carga total resultante es de 40 kilo watt hora. 
                                        Si el usuario paga una tarifa de consumo básico equivalente a $0.859 por kilo watt hora, el costo 
                                        total es de $34.36; si la tarifa corresponde a un consumo excedente a $3.042 por kilo watt hora, 
                                        el costo será de $121.68.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10 px-5" v-if="counterStep === 0">
                        <v-col cols="12" align="start" class="animate__animated animate__backInDown">
                            <p class="" :class="{'font-size-30': windowHeight>800, 'font-size-22': windowHeight<800}">El costo de carga de una bateria dependerá de: </p>
                        </v-col>
                        <v-col cols="10" class="animate__animated animate__backInLeft">
                            <p class="" :class="{'font-size-24':windowHeight>800, 'font-size-20': windowHeight<800}">
                                <span class="font-weight-bold pr-3">1</span> La capacidad de la bateria (kWh) y su estado de carga.
                            </p>
                            <p class="" :class="{'font-size-24':windowHeight>800, 'font-size-20': windowHeight<800}">
                                <span class="font-weight-bold text-yellow-p pr-3">2</span> El precio por kWh sumistrado.
                            </p>
                        </v-col>
                    </v-row>

                    <v-row no-gutters justify="center" class="rounded-xl bg-color mx-10 px-5 mt-3" v-if="counterStep === 1">
                        <v-col cols="3" class="mt-2">
                            <v-img src="@/assets/electricidad/costoLowBattery.png" contain :max-height="windowHeight>800 ? '130': '90'"></v-img>
                        </v-col>
                        <v-col cols="2" class="mt-2" align-self="center">
                            <v-img src="@/assets/electricidad/comparation.png" contain max-height="50"></v-img>
                        </v-col>
                        <v-col cols="3" class="mt-2">
                            <v-img src="@/assets/electricidad/costoCompleteBattery.png" contain :max-height="windowHeight>800 ? '130': '90'"></v-img>
                        </v-col>

                        <v-col cols="12" class="mt-3">
                            <p class="" :class="{'font-size-30': windowHeight>800, 'font-size-22': windowHeight<800}">Ejercicio: ¿Cuánto cuesta cargar de 20% hasta 100% la batería de un vehículo eléctrico que cuenta con una batería de 50 kWh?</p>
                        </v-col>
                        <v-col cols="10">
                            <p class="" :class="{'font-size-30': windowSize>800, 'font-size-20': windowHeight<800}">Tarifa CFE en consumo básico: $0.859/kWh 🡪 40 kWh X $0.859/kWh = $34.36</p>
                            <p class="" :class="{'font-size-30': windowSize>800, 'font-size-20': windowHeight<800}">Tarifa CFE en consumo excedente: $3.042/kWh 🡪 40 kWh X $3.042/kWh = $121.68</p>
                        </v-col>

                        <v-col cols="12" align="end">
                            <p class="">*Nota: revisar la tarifa que aplica en cada caso ya que puede cambiar dependiendo de varios factores.</p>
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
            counterStep: 0
        }
    },
    components: {
        ContentTemplate
    },
    mounted(){
        //this.count = 0
        this.$store.commit('StateAssign', {count: 0})
        this.playAudio()
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize', 'count', 'soundOn', 'boxText']),   
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-13.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },52500)
            }

            setTimeout(() => {
                this.counterStep = 1
            }, 18000);
        }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>