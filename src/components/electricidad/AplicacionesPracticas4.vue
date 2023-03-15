<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Aplicaciones Prácticas">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        Uno de los aspectos que más importa a los clientes potenciales de un vehículo eléctrico es la 
                                        autonomía. Esto se entiende como la distancia que se puede recorrer con una sola carga de la 
                                        batería de dicho automóvil.
                                        <br><br>
                                        Para poder responder a esta pregunta, se realizan una serie de pruebas en condiciones controladas 
                                        según una homologación. En nuestras tablas utilizamos los datos resultantes de la prueba según el 
                                        NEDC. Esta prueba consta en una sesión de manejo que dura 20 minutos y en la que se recorren 11 
                                        km en total. Se consideran dos tipos de conducción (urbana 66% y no urbana el 34% de la prueba). 
                                        La velocidad promedio es de 34 km/h y la velocidad máxima permitida es de 120 km/h. La temperatura 
                                        del ambiente debe estar entre 20 y 30 grados centígrados y el terreno es llano y sin pendientes.
                                        <br><br>
                                        Como resulta evidente, este tipo de conducción no es representativa a la realidad de la mayor 
                                        parte de las personas en su día a día. Es por esto que los resultados de autonomía pueden cambiar 
                                        dramáticamente dependiendo de las condiciones reales de operación. Algunos de los puntos a 
                                        considerar serían las pendientes del trayecto, si se trata de un avance continuo u hay 
                                        operaciones frecuentes de aceleración y frenado, el uso de la calefacción y aire acondicionado 
                                        entre otros.
                                        <br><br>
                                        Además de la homologación NEDC existen otras como podría ser la WLTP y la EPA.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10 px-5 py-5">
                        <v-col cols="12" class="animate__animated animate__backInLeft">
                            <p class="" :class="{'font-size-24': windowHeight>900, 'font-size-19': windowHeight<700}">
                                La autonomía hace referencia a la <span class="text-yellow-p">distancia que puede recorrer un vehículo eléctrico con una 
                                carga completa de su batería</span>. Para SEV E-WAN la autonomía es de 200 km (versión Lite) y 335 km 
                                (versión Bold) de acuerdo a la homologación NEDC.
                            </p>
                            <p class="" :class="{'font-size-24': windowHeight>900, 'font-size-10': windowHeight<700}">Existen diferentes homologaciones.</p>
                            <ul class=" pl-5" :class="{'mt-5 font-size-24': windowHeight>900, 'mt-2 font-size-19': windowHeight<700}">
                                <li>
                                    NEDC (New European Driving Cycle):
                                    <ul class="pl-6">
                                        <li>Prueba realizada en un ciclo de 20 minutos.</li>
                                        <li>Distancia recorrida de 11 km.</li>
                                        <li>2 fases: conducción urbana 66% y conducción no urbana 34%.</li>
                                        <li>Velocidad promedio 34 km/h,</li>
                                        <li>Velocidad máxima 120 km/h.</li>
                                        <li>Temperatura 20 – 30 °C.</li>
                                    </ul>
                                </li>
                                <li>WLTP (Worldwide Harmonized Light Vehicle Test Procedure).</li>
                            </ul>
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
        ...mapState(['windowHeight', 'windowSize']),
    },
    mounted(){
        this.$store.commit('StateAssign', {canNext: false})
        this.playAudio()
    },
    methods: {
        playAudio(){
            window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-14.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },88500)
        }
    } 
}
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>