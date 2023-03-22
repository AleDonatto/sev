<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row class="" :class="{'mt-3':windowHeight>900}">
                    <v-col cols="12" :class="{'bg-cargando-bev':windowHeight>900, 'bg-cargando-bev-md': windowHeight<750}">
                        <v-row class="">
                            <v-col cols="5" align="center">
                                <div :class="{'position-text':windowHeight>900, 'position-text-md': windowHeight<750}">
                                    <h1 class="font-lato ml-7 text-left white--text text-uppercase font-weight-semibold px-10" :class="{'font-size-72':windowHeight> 900, 'font-size-48':windowHeight<750}">Cargando un BEV</h1>

                                    <p class="white--text ml-7 text-left pl-10" :class="{'font-size-50': windowHeight>900, 'font-size-34':windowHeight<750}">Tipos de cargador, conectores y mejores prácticas</p>

                                    <v-btn rounded class="px-5 mt-10" color="#FDBE2E" @click="continueStep">
                                        <span class="font-size-30">Continuar</span>
                                    </v-btn>
                                </div>
                                
                            </v-col>
                            <v-col cols="7">
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script>
import MainTemplate from '../templates/MainTemplate.vue';
import { mapActions, mapState } from 'vuex';

export default{
    data(){
        return {

        }
    },
    components: {
        MainTemplate
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize'])
    },
    methods: {
        ...mapActions(['NextStep']),
        continueStep(){
            const path = this.$route.path
            this.$store.dispatch('NextStep', path)
            //NextStep(path)
        }
    }
}
</script>

<style scoped>
.bg-cargando-bev{
    background-image: url('../../assets/electricidad/presentacion.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 835px;
}

.bg-cargando-bev-md{
    background-image: url('../../assets/electricidad/presentacion.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 510px;
    margin-top: -1.3vh;
}
.bg-negro{
    background-image: url('../../assets/electricidad/fondopruebas.png');
}

.position-text{
    margin-top: 5vh;
}
</style>