<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Aplicaciones Prácticas">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}" >
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}" v-if="count === 0">
                                        Cuando se desea calcular el costo de carga de una batería, hay que tener en cuenta dos factores 
                                        principales: <br>
                                        1) la capacidad de la batería y su estado de carga, es decir, cuantos kilowatt hora 
                                        se desean cargar; y <br>
                                        2) el precio del kilowatt hora suministrado en el cargador o por parte de 
                                        quien distribuye la corriente eléctrica.
                                    </v-card-text>
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}" v-if="count === 1">
                                        En este ejemplo, calcularemos el costo de llenar una batería de 50 kilowatt hora desde el 20% 
                                        hasta el 100% de su capacidad. De tal manera que la carga total resultante es de 40 kilowatt hora. 
                                        Si el usuario paga una tarifa de consumo básico equivalente a $0.859 por kilowatt hora, el costo 
                                        total es de $34.36; si la tarifa corresponde a un consumo excedente a $3.042 por kilowatt hora, 
                                        el costo será de $121.68.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10 px-5" v-if="count === 0">
                        <v-col cols="12" align="start" class="animate__animated animate__backInDown">
                            <p class="" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">El costo de carga de una bateria dependerá de: </p>
                        </v-col>
                        <v-col cols="10" class="animate__animated animate__backInLeft">
                            <p class="" :class="{'font-size-24':windowHeight>900, 'font-size-20': windowHeight<700}">
                                <span class="font-weight-bold pr-3">1</span> La capacidad de la bateria (kWh) y su estado de carga.
                            </p>
                            <p class="" :class="{'font-size-24':windowHeight>900, 'font-size-20': windowHeight<700}">
                                <span class="font-weight-bold text-yellow-p pr-3">2</span> El precio por kWh sumistrado.
                            </p>
                        </v-col>

                        <v-col cols="12" class="animate__animated animate__backInLeft">
                            <p class="" :class="{'font-size-30':windowHeight>900, 'font-size-22': windowHeight<700}">¿Cuanto cuesta cargar 20% hasta 100% de la bateria de un SEV E-WAN Bold (29.4 kWh)?</p>
                        </v-col>

                        <v-col cols="9" class="animate__animated animate__backInLeft">
                            <p class="" :class="{'font-size-24':windowHeight>900, 'font-size-20': windowHeight<700}">Consumo básico: $0.859/kWh 🡪 23.5 X 0.859 = $20.18.</p>
                            <p class="" :class="{'font-size-24':windowHeight>900, 'font-size-20': windowHeight<700}">Consumo excedente: $3.042/kWh 🡪 23.5 X 3.042 = $71.48.</p>
                        </v-col>
                    </v-row>

                    <v-row no-gutters justify="center" class="rounded-xl bg-color mx-10 px-5 mt-3" v-if="count === 1">
                        <v-col cols="3" class="mt-2">
                            <v-img src="@/assets/electricidad/costoLowBattery.png" contain :max-height="windowHeight>900 ? '130': '90'"></v-img>
                        </v-col>
                        <v-col cols="2" class="mt-2" align-self="center">
                            <v-img src="@/assets/electricidad/comparation.png" contain max-height="50"></v-img>
                        </v-col>
                        <v-col cols="3" class="mt-2">
                            <v-img src="@/assets/electricidad/costoCompleteBattery.png" contain :max-height="windowHeight>900 ? '130': '90'"></v-img>
                        </v-col>

                        <v-col cols="12" class="mt-3">
                            <p class="" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">Ejercicio: ¿Cuánto cuesta cargar de 20% hasta 100% la batería de un vehículo eléctrico que cuenta con una batería de 50 kWh?</p>
                        </v-col>
                        <v-col cols="10">
                            <p class="" :class="{'font-size-30': windowSize>900, 'font-size-20': windowHeight<700}">Tarifa CFE en consumo básico: $0.859/kWh 🡪 40 kWh X $0.859/kWh = $34.36</p>
                            <p class="" :class="{'font-size-30': windowSize>900, 'font-size-20': windowHeight<700}">Tarifa CFE en consumo excedente: $3.042/kWh 🡪 40 kWh X $3.042/kWh = $121.68</p>
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
        return {}
    },
    components: {
        ContentTemplate
    },
    mounted(){
        //this.count = 0
        this.$store.commit('StateAssign', {count: 0}),
        this.$store.commit('StateAssign', {canNext: false})
        this.playAudio()
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize', 'count']),   
    },
    methods: {
        playAudio(){
            window.audio.src = require('@/assets/audios/intro.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },4000)
        }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>