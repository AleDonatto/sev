<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos Básicos">
            <template v-slot:content>
                <div class="mt-5">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        Utilizando algunos ejemplos cotidianos: si caminamos una distancia corta, normalmente 
                                        expresamos la distancia en metros, pero cuando son distancias mucho más largas, utilizamos 
                                        la unidad kilómetros. Un kilómetro es equivalente a mil metros.
                                        <br><br>
                                        En el caso de la potencia eléctrica, también se pueden utilizar este tipo de múltiplos. 
                                        Un Kilowatt de potencia eléctrica kW es equivalente a 1,000 Watts.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-img src="@/assets/electricidad/kilowatt.png" contain :max-height="windowHeight>900 ? '620': '350'"></v-img>
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
</style>