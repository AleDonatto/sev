<template>
    <div>
        <content-template title="PRÓXIMAMENTE" subtitle='<p class="mt-5">Evolución <br/> <span class="font-weight-bold">de la movilidad</span></p>'>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        ¿Pero, qué nos depara el futuro? Bueno, debido a la amenaza global por el cambio climático, a los 
                                        adelantos tecnológicas y a la eventual escasez de combustibles fósiles, se puede anticipar que la 
                                        transición a vehículos "limpios" o 0 emisiones será acelerada. En varios países se anticipa que en 
                                        unos años quede prohibida la venta de autos con motor a combustión interna que ocupen derivados de 
                                        petroleo. Esto va a generar una transición aún más aceleradas a las nuevas tecnologías.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-2 animate__animated animate__backInLeft">
                        <v-col cols="6">
                            <v-img src="@/assets/evolucion/camioneta.png" contain :max-height="windowHeight > 900 ? '220' : '130'"></v-img>
                        </v-col>
                        <v-col cols="6">
                            <v-img src="@/assets/evolucion/trailer.png" contain :max-width="windowHeight>900 ?'550': '330'"></v-img>
                        </v-col>

                        <v-col cols="6">
                            <v-img src="@/assets/evolucion/sedan.png" contain :max-height="windowHeight > 900 ? '220' : '130'"></v-img>
                        </v-col>
                        <v-col cols="6">
                            <v-img src="@/assets/evolucion/nuevos.png" contain :max-height="windowHeight > 900 ? '220' : '130'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="animate__animated animate__backInRight">
                        <v-col cols="12" align-self="center">
                            <div class="text-center bg-gray">
                                <span class=" font-size-48 text-white" :class="{'font-size-48': windowHeight>900, 'font-size-30': windowHeight<700}">Autos eléctricos (BEV) y otras tecnologías 0 emisiones</span>
                            </div>
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
        ...mapState(['canNext', 'windowHeight', 'windowSize'])
    },
    mounted() {
        //this.canNext = true
        this.$store.commit('StateAssign', {canNext: true})
    },

}
</script>

<style scoped>
.bg-gray{
    background-color: #B3B3B3;
}
</style>