<template>
    <div>
        <content-template subtitle="Tipos de cargadores">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110"  class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        ¿Alguna vez has visto estos contactos para dispositivos eléctricos? Seguramente hay algunos 
                                        que te son conocidos y otros que nunca habrás visto a menos de que hayas salido de viaje a 
                                        otros países. Algo que resulta evidente es que para poder conectar un dispositivo eléctrico 
                                        o electrónico en estos contactos, debe contar con la conexión adecuada o con un adaptador.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 px-5 py-5 rounded-xl bg-boxstep-content animate__animated animate__backInLeft">
                        <v-col cols="3">
                            <v-img src="@/assets/cargando/enchufe1.png" contain :max-height="windowHeight>900 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/cargando/enchufe2.png" contain :max-height="windowHeight>900 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/cargando/enchufe3.png" contain :max-height="windowHeight>900 ? '240': '140'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/cargando/enchufe4.png" contain :max-height="windowHeight>900 ? '240': '140'"></v-img>
                        </v-col>

                        <v-col cols="4">
                            <v-img src="@/assets/cargando/enchufe5.png" contain :max-height="windowHeight>900 ? '240': '120'"></v-img>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/cargando/enchufe6.png" contain :max-height="windowHeight>900 ? '240': '120'"></v-img>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/cargando/enchufe7.png" contain :max-height="windowHeight>900 ? '240': '120'"></v-img>
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

</style>