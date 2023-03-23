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
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 800, 'mt-3': windowHeight < 780 }">
                                <v-card :height="windowHeight > 800 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>800, 'font-size-20': windowHeight<780}">
                                        Una lámpara que tengamos en casa pero que no esté encendida no va a generar un consumo de 
                                        corriente eléctrica. Sin embargo, cuando está siendo utilizada va a consumir energía eléctrica 
                                        por todo el tiempo que permanezca en uso.
                                        <br><br>
                                        Cuando analizamos el recibo de cobro de la CFE vamos a notar que la unidad que se utiliza para 
                                        el cobro de la energía eléctrica suministrada es el kilo watt hora.
                                        <br><br>
                                        Como ejemplo, si tuvieramos una lámpara que tiene 10 focos de 100 Watts cada uno, la 
                                        potencia total sería de 1,000 Watts o 1 kilowatt. En caso de que se dejara encendida durante 
                                        una hora, el consumo sería de 1 kilo watt hora.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 bg-color rounded-xl">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="" :class="{'font-size-24': windowHeight>800, 'font-size-20': windowHeight<780}">
                                <span class="font-weight-bold">kWh:</span> El kilo watt hora es la undad de medida
                                de medida que se usa para medir el consumom energético.
                            </p>
                            <p class="text-center px-10" :class="{'my-5 font-size-24': windowHeight>800, 'my-1 font-size-20': windowHeight<780}">
                                Si tengo una lampara con 10 focos de 100w cada uno y lo dejo encendido durante un hora,
                                el consumo sera de un kWh.
                            </p>
                        </v-col>

                        <v-col cols="12" align="center" class="animate__animated animate__backInRight" v-if="countShow === 0">
                            <v-img src="@/assets/electricidad/table.png" contain :max-height="windowHeight>800 ? '350': '180'"></v-img>
                        </v-col>
                        <v-col cols="12" align="center" class="animate__animated animate__backInRight" v-if="countShow === 1">
                            <v-img src="@/assets/electricidad/table1.png" contain :max-height="windowHeight>800 ? '350': '180'"></v-img>
                        </v-col>
                        <v-col cols="12" align="center" class="animate__animated animate__backInRight" v-if="countShow === 2">
                            <v-img src="@/assets/electricidad/table2.png" contain :max-height="windowHeight>800 ? '350': '180'"></v-img>
                        </v-col>
                        <v-col cols="12" align="center" class="animate__animated animate__backInRight" v-if="countShow === 3">
                            <v-img src="@/assets/electricidad/table3.png" contain :max-height="windowHeight>800 ? '350': '180'"></v-img>
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
        return{
            countShow: 0
        }
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
        ...mapState(['windowHeight', 'windowSize', 'count', 'soundOn', 'boxText'])
    },
    methods: {
        playAudio(){
            if(this.soundOn === true){
                this.$store.commit('StateAssign', {canNext: false})
                window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-9.mp3')
                window.audio.play()
                setTimeout(()=> {
                    this.$store.commit('StateAssign', {canNext:true})
                },38500)

                setTimeout(() => {
                    this.countShow = 1
                }, 10000);

                setTimeout(() => {
                    this.countShow = 2
                }, 14000);

                setTimeout(() => {
                    this.countShow = 3
                }, 21000);
            }else{
                this.countShow = 3
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