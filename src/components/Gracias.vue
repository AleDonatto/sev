<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row justify="start" class="" :class="{'bg-gracias mt-2': windowHeight> 900, 'bg-gracias-md': windowHeight<700}">
                    <v-row justify="start" no-gutters class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                        <v-col cols="4">
                            <v-img src="@/assets/user-lg.png" contain :max-height="windowHeight>900 ? '290': '210'"></v-img>
                        </v-col>
                    </v-row>
                    <v-row justify="start" no-gutters class="mt-0">
                        <v-col cols="5">
                            <p class=" white--text px-10" :class="{'font-size-26':windowHeight>900, 'font-size-22': windowHeight<700}">
                                Haz acabado el primer módulo de nuestra series de cursos que tenemos preparados para ti.
                                <span class="font-weight-bold">Estamos muy contentos de que hayas formado una parte activa de este curso</span>
                                y de parte del equipo de SEV agradecemos el tiempo que le dedicaste al curso. <br>
                                <span class="text-yellow-p font-weight-bold">¡Muchas Gracias!</span>
                            </p>
                            <v-btn type="button" class="ml-10" rounded color="#FDBE2E" @click="closeWindow">
                                <span class=" font-size-30 font-weight-semibold" :class="{'font-size-30': windowHeight > 900, 'font-size-24': windowHeight < 700}">Click para Finalizar</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script>
import MainTemplate from './templates/MainTemplate.vue';
import { mapState } from 'vuex';

export default {
    data () {
        return{
        }
    }, 
    mounted(){
    },
    components: {
        MainTemplate,
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize'])
    },
    methods: {
        closeWindow(){
            try {
                window.close();
            } catch (e) {

            }
        }
    }
}
</script>

<style scoped>
.bg-gracias {
    background-image: url('../assets/gracias.png');
    background-size: cover;
    height: 86vh;
}

.bg-gracias-md{
    background-image: url('../assets/gracias.png');
    background-size: cover;
    height: 82vh;
    margin-top: -4vh;
}
</style>