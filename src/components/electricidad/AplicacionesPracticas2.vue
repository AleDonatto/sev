<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p class='mt-6'>Aplicaciones Prácticas</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<750}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 750 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<750}" v-if="count === 0">
                                        Una de las interrogantes más comunes que se tienen en relación a un vehículo eléctrico gira en 
                                        torno al tiempo que lleva cargar la batería del mismo. Hay varios factores que influyen en este 
                                        proceso; entre ellos podemos mencionar los siguientes:
                                        <br><br>
                                        La capacidad de la batería. Es decir, cuánta energía eléctrica puede almacenar. La unidad que se 
                                        utiliza para esto es el kilo watt hora
                                        <br><br>
                                        Estado de carga de la batería. Es decir, qué tan llena o qué tan vacía se encuentra al momento 
                                        que se va a conectar y hasta qué nivel de carga se desea llegar.
                                        <br><br>
                                        La potencia del cargador utilizado es otro factor importante. Así como podemos tener cargadores 
                                        normales y cargadores rápidos para un teléfono móvil; también para los vehículos eléctricos 
                                        existen diferentes tipos de cargadores. Mientras más potente sea el cargador, más rápido puede 
                                        cargar una batería. La potencia del cargador se mide en kilowatts
                                    </v-card-text>

                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<750}" v-if="count === 1">
                                        Ahora vamos a realizar un ejemplo: Si tenemos un vehículo que cuenta con una batería de 50 kWh y 
                                        deseamos que se cargue desde el 20% hasta el 100% de su capacidad utilizando un cargador que 
                                        trabaja con una corriente eléctrica de 220 volts y 10 amperios.
                                        <br><br>
                                        La potencia del cargador se calcula multiplicando el voltaje por el amperaje. El resultado son 
                                        2200 watts. Si dividimos entre 1000 para transformar a kilowatts, el resultado final es de 2.2 
                                        kilowatts de potencia de cargador.
                                        <br><br>
                                        Si la batería tiene una capacidad de 50 kwh y queremos cargarla desde un 20 hasta un 100% de su 
                                        capacidad, hay que calcular cuantos kwh se van a cargar efectivamente. El resultado se obtiene 
                                        al multiplicar 50 kwh que es la capacidad de la batería por 0.8 ya que únicamente hace falta 
                                        llenar el 80% de la misma. Siendo entonces necesario cargar 40 kwh.
                                        <br><br>
                                        Finalmente, vamos a dividir la carga requerida que son 40 kwh entre la potencia del cargador 
                                        que son 2.2 kw y el resultado son 18.8 horas.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color mx-10 rounded-xl" v-if="count === 0">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="text-center " :class="{'font-size-36': windowHeight>900, 'font-size-24': windowHeight<750}">El tiempo de carga de una batería dependerá principalmente de:</p>
                        </v-col>
                        <v-col cols="12" align="start" class="px-10 animate__animated animate__backInLeft">
                            <p class="" :class="{'font-size-36': windowHeight>900, 'font-size-24': windowHeight<750}">
                                <span class="font-weight-bold pr-3">1</span> La Capacidad de batería (kWh)
                            </p>
                            <p class="" :class="{'font-size-36': windowHeight>900, 'font-size-24': windowHeight<750}">
                                <span class="text-yellow-p font-weight-bold pr-3">2</span> Estado de carga (% de bateria)
                            </p>
                            <p class="" :class="{'font-size-36': windowHeight>900, 'font-size-24': windowHeight<750}">
                                <span class="font-weight-bold pr-3">3</span> La potencia del cargador utilizado (Voltaje X Amperaje/1,000) kW.
                            </p>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color mx-10 rounded-xl" v-if="count === 1">
                        <v-col cols="3">
                            <v-img src="@/assets/electricidad/low-battery.png" contain :max-height="windowHeight>900 ? '130': '90'"></v-img>
                        </v-col>
                        <v-col cols="2" align-self="center">
                            <v-img src="@/assets/electricidad/comparation.png" contain max-height="50"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/electricidad/complet-battery.png" contain :max-height="windowHeight>900 ? '130': '90'"></v-img>
                        </v-col>

                        <v-col cols="12" class="mt-4">
                            <p class="" :class="{'font-size-30': windowHeight>900, 'font-size-20': windowHeight<750}">
                                Ejemplo: Cuánto tiempo tardará en cargarse de 20% hasta 100% la batería de un vehículo eléctrico con 
                                una batería de 50 kWh si se utiliza una cargador que trabaja a 220 volts y 10 amper?
                            </p>
                        </v-col>
                        <v-col cols="8">
                            <p class="" :class="{'font-size-24': windowHeight>900, 'font-size-20': windowHeight<750}">Potencia del cargador: 220 V X 10 A /1000 = 2.2 kW</p>
                            <p class="" :class="{'font-size-24': windowHeight>900, 'font-size-20': windowHeight<750}">50 kWh X 0.8 = 40 kWh</p>
                            <p class="" :class="{'font-size-24': windowHeight>900, 'font-size-20': windowHeight<750}">40 kWh / 2.2 kW = 18.8 h</p>
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
                window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-11.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },58500)
            }
            
        }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>