<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos Básicos">
            <template v-slot:content>
                <div :class="{'mt-10':windowHeight>900, 'mt-3':windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        Un punto importante a considerar es que la corriente eléctrica puede ser transformada de 
                                        corriente alterna a a corriente directa y viceversa.
                                        <br><br>
                                        Un convertidor de corriente, como el que usamos para conectar nuestro teléfono móvil o nuestra 
                                        laptop hace precisamente la función de cambiar la corriente alterna del contacto de pared 
                                        (habitualmente 110 Voltios de corriente alterna) y lo transforma en corriente directa con el 
                                        voltaje requerido por nuestro dispositivo.
                                        <br><br>
                                        Por otro lado, un inversor de corriente hará el cambio contrario. Tomará la corriente directa 
                                        para transformarla en corriente alterna. En el ejemplo vemos un inversor de corriente portátil 
                                        que se conecta a una toma de 12 Voltios CD de un auto y te permite conectar aparatos que requieren 
                                        corriente alterna a 110 Voltios.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color rounded-xl mx-10" :class="{'margin-top': windowHeight<700}">
                        <v-col cols="12" align="center" class="animate__animated animate__backInDown">
                            <h1 :class="{'font-size-20': windowHeight<700}">Inversior de corriente o convertidor de corriente</h1>
                        </v-col>
                        <v-col cols="5" class="animate__animated animate__backInLeft">
                            <v-img src="@/assets/electricidad/convertidor.png" contain :max-height="windowHeight>900 ? '220': '120'"></v-img>
                            <p class="" :class="{'font-size-20 mx-7 mt-5':windowHeight>900, 'font-size-19 mx-1 mt-2': windowHeight<700}">Convertidor de corriente: cambia de corriente alterna a corriente directa.</p>
                            <p class="" :class="{'font-size-20 mx-7 mt-3 mb-5':windowHeight>900, 'font-size-19  mx-1 mt-1 mb-1': windowHeight<700}">
                                Ejemplo: el “cuadrito” para conectar un celular cambia de 110 V de CA (la toma de pared) a 5 V de CD (la salida a USB)
                            </p>
                        </v-col>
                        <v-col cols="1">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" class="animate__animated animate__backInRight">
                            <v-img src="@/assets/electricidad/inversor.png" contain :max-height="windowHeight>900 ? '207': '120'"></v-img>
                            <p class="" :class="{'font-size-20 mx-7 mt-5':windowHeight>900, 'font-size-19  mx-1 mt-2': windowHeight<700}">Inversor de corriente: cambia de corriente directa a corriente alterna.</p>
                            <p class="" :class="{'font-size-20 mx-7 mt-3 mb-5':windowHeight>900, ' font-size-19 mx-1 mt-1 mb-1': windowHeight<700}">
                                Ejemplo: un inversor de corriente para uso automotriz puede conectarse a la toma de accesorios de un auto 12 V de CD y transformarlo a 110 V de CA para conectar otros aparatos.
                            </p>
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
    computed: {
        ...mapState(['windowHeight', 'windowSize'])
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

.margin-top{
    margin-top: -2vh;
}
</style>