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
                            <div class="border-yellow mt-6">
                                <p class=" font-size-24 px-5 py-5 mx-5">La baterías utilizadas en los vehículos SEV-E-wan son:</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="8">
                            <v-radio-group v-model="answers.a1" color="#FDBD31">
                                <v-radio value="1" @input="answers.a1 = $event.target.value" color="#FDBD31">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">
                                            De Litio fosfato-ferroso LiFePO4.
                                        </p>
                                    </template>
                                </v-radio>
                                <v-radio value="2" @input="answers.a1 = $event.target.value" color="#FDBD31">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">
                                            De iones de Litio de larga durabilidad.
                                        </p>
                                    </template>
                                </v-radio>
                                <v-radio value="3" @input="answers.a1 = $event.target.value" color="#FDBD31">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">
                                            De polímero de Litio.
                                        </p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn color="#FDBD31" class="rounded-xl text-none" @click="checkQuiz" :disabled="answers.a1 !== '2'">
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
import { mapState } from 'vuex';

export default {
    data(){
        return {
            answers: {
                a1: null, 
                a2: null, 
                a3: null
            }
        }
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize'])
    },
    mounted() {
        //this.canNext = false
        this.$store.commit('StateAssign', {canNext: false})
    },
    methods: {
        checkQuiz(){
            if(this.answers.a1 === '2'){
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