<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="mt-6 border-yellow">
                                <p class=" font-size-24 mx-5 py-5 px-5">
                                    Los principales factores que determinan el tiempo de carga de una batería son:
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="11">
                            <v-radio-group v-model="answers.a1" color="#FDBD31">
                                <v-radio value="1" @input="answers.a1 = $event.target.value" color="#FDBD31">
                                    <template v-slot:label>
                                        <p class=" font-size-24">
                                            El tamaño de la batería, el nivel de carga deseado y la potencia del cargador
                                        </p>
                                    </template>
                                </v-radio>

                                <v-radio value="2" @input="answers.a1 = $event.target.value" color="#FDBD31">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">
                                            El peso de la batería, el contacto utilizado y la potencia del motor
                                        </p>
                                    </template>
                                </v-radio>

                                <v-radio value="3" @input="answers.a1 = $event.target.value" color="#FDBD31">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">
                                            El tamaño de la batería, la potencia del motor y el OBD
                                        </p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn class="text-none" color="#FDBD31" rounded @click="checkQuiz" :disabled="answers.a1 !== '1'">
                                <span class="font-weight-bold">Continuar</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script>
import ContentTemplate from '../templates/ContentTemplate.vue';
import { mapActions, mapState } from 'vuex';

export default {
    data(){
        return {
            answers: {
                a1: null, 
                a2: null, 
                a3: null, 
            }
        }
    },
    components: {
        ContentTemplate,
    },
    mounted(){
        //this.canNext = true
        this.$store.commit('StateAssign', {canNext: true})
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize'])
    },
    methods: {
        ...mapActions(['NextStep']),
        checkQuiz(){
            if(this.answers.a1 === '1'){
                const path = this.$route.path 
                this.$store.dispatch('NextStep', path)
                //NextStep(path)
            }
        }
    }
}
</script>

<style scoped>
.border-yellow{
    border: 5px solid #FDBD31;
    border-radius: 15px;
}
</style>