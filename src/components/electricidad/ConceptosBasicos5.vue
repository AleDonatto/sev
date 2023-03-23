<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p class='mt-6'>Conceptos Básicos</p>">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>800, 'mt-3': windowHeight<780}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>800 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 800, 'mt-3': windowHeight < 780 }" v-if="boxText">
                                <v-card :height="windowHeight > 800 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<780}">
                                        La segunda unidad que vamos a conocer se llama Amperio o Amper. Esta unidad mide la intensidad de 
                                        la corriente eléctrica, en palabras coloquiales, que tan "fuerte" es esta corriente.
                                        <br><br>
                                        En este ejemplo podemos observar un convertidor de corriente para conectar un teléfono móvil. 
                                        En ambos casos se pasa de 110 Voltios de corriente alterna (la toma de corriente de "pared") y 
                                        se transforma a 5 Voltios de corriente directa que es lo que manejan los dispositivos USB. 
                                        Sin embargo, en el "cuadrito" pequeño de la izquierda se maneja 1 amperio de intensidad y en 
                                        el de la derecha es de 2.1 amperios.
                                        <br><br>
                                        En consecuencia, la corriente eléctrica suministrada por el adaptador de la derecha tiene un 
                                        poco más del doble de intensidad y, por lo mismo, podrá cargar los dispositivos con mayor 
                                        velocidad. Por eso es que se les conoce como "cargadores rápidos".
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10">
                        <v-col cols="12" align="center" class="animate__animated animate__backInDown">
                            <p class="" :class="{'font-size-30':windowHeight>800, 'font-size-24':windowHeight<780}"><span class="font-weight-bold">Amper:</span> unidad de medición de la intensidad de la corriente eléctrica</p>
                        </v-col>
                        
                        <v-col cols="5" align="center" class="animate__animated animate__backInLeft mt-5">
                            <v-img src="@/assets/electricidad/cubito.png" contain :max-height="windowHeight>800 ? '230': '150'"></v-img>
                            <p class="font-weight-bold mt-5" :class="{'font-size-30':windowHeight>800, 'font-size-24':windowHeight<780}">5 Volts, 1 Amper </p>
                        </v-col>
                        <v-col cols="1">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" class="mt-5 animate__animated animate__backInRight">
                            <v-img src="@/assets/electricidad/cubo.png" contain :max-height="windowHeight>800 ? '230': '150'"></v-img>
                            <p class="font-weight-bold text-center mt-5" :class="{'font-size-30':windowHeight>800, 'font-size-24':windowHeight<780}">5 Volts, 2.1 Amper</p>
                        </v-col>

                    </v-row>

                    <v-snackbar v-model="snackbar" bottom right color="#FDBD31" timeout="10000" height="200" width="320" rounded="xl" multi-line vertical>
                        <template v-slot:action>
                            <v-btn @click="snackbar=!snackbar" text><span class="black--text">Cerrar</span></v-btn>
                        </template>
                        <p class="font-weight-bold text-black  font-size-20 px-5">
                            El amperaje hace referencia a qué tan intensa es la corriente. Por ejemplo: a mayor amperaje, mayor velocidad de carga
                        </p>
                    </v-snackbar>
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
        return{
            snackbar : true
        }
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize','soundOn', 'boxText'])
    },
    mounted(){
        this.playAudio()
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-4.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },54500)
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