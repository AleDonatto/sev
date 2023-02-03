<template>
    <div>
        <content-template subtitle="Tipos de tren <br/> motriz mas comunes">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" :class="{'margin-top': windowHeight>900, 'margin-top-md': windowHeight<700 && windowHeight>660, 'margin-top-sm': windowHeight<660}">
                        <v-col></v-col>
                        <v-col>
                            <v-img :src="h1" :max-height="windowHeight> 900 ? '115': '80'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="h2" :max-height="windowHeight> 900 ? '115': '80'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="h3" :max-height="windowHeight> 900 ? '115': '80'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="h4" :max-height="windowHeight> 900 ? '115': '80'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="h5" :max-height="windowHeight> 900 ? '115': '80'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="h6" :max-height="windowHeight> 900 ? '115': '80'"></v-img>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col>
                            <v-img :src="opciones" :max-height="windowHeight> 900 ? '510': '350'"></v-img>
                        </v-col>
                        <v-col >
                            <v-img :src="tice" :max-height="windowHeight>900 ? '510': '350'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="tmhev" :max-height="windowHeight>900 ? '510': '350'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="tfullhev" :max-height="windowHeight>900 ? '510': '350'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="tphev" :max-height="windowHeight>900 ? '510': '350'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="tbev" :max-height="windowHeight>900 ? '510': '350'"></v-img>
                        </v-col>
                        <v-col>
                            <v-img :src="tfcev" :max-height="windowHeight>900 ? '510': '350'"></v-img>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import h1 from '@/assets/evolucion/h1.png'
import h2 from '@/assets/evolucion/h2.png'
import h3 from '@/assets/evolucion/h3.png'
import h4 from '@/assets/evolucion/h4.png'
import h5 from '@/assets/evolucion/h5.png'
import h6 from '@/assets/evolucion/h6.png'
import opciones from '@/assets/evolucion/opciones.png'
import tice from '@/assets/evolucion/tice.png'
import tmhev from '@/assets/evolucion/tmhev.png'
import tfullhev from '@/assets/evolucion/tfullhev.png'
import tphev from '@/assets/evolucion/tphev.png'
import tbev from '@/assets/evolucion/tbev.png'
import tfcev from '@/assets/evolucion/tfsev.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
</script>

<style scoped>
.bg-black{
    background: black;
}
.width-box{
    width: 8px !important;
}

.bg-poligono1{
    background-image: url('../../assets/evolucion/poli1.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 110px;
}

.bg-poligono2{
    background-image: url('../../assets/evolucion/poli2.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 110px;
}

.bg-poligono3{
    background-image: url('../../assets/evolucion/poli3.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 90px;
} 
.bg-poligono4{
    background-image: url('../../assets/evolucion/poli4.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 110px;
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