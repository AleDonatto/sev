<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9" class="">
                            <div class="border-yellow mt-6">
                                <p class=" font-size-24 mx-5 py-5 px-5">El voltaje y el amperaje determinan la potencia <span class="text-yellow-p">(watt):</span></p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="3">
                            <v-radio-group v-model="answers.a1" color="#FDBD31">
                                <v-radio value="cierto" @input="answers.a1 = $event.target.value" color="#FDBD31">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">Cierto</p>
                                    </template>
                                </v-radio>

                                <v-radio value="falso" @input="answers.a1 = $event.target.value" color="#FDBD31">
                                    <template v-slot:label>
                                        <p class=" font-size-24 mt-5">Falso</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn class="text-none" rounded color="#FDBD31" @click="checkQuiz" :disabled="answers.a1 !== 'falso'">
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
            }
        }
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize'])
    },
    mounted(){
        //this.canNext = false
        this.$store.commit('StateAssign', {canNext: false})
    },
    methods: {
        ...mapActions(['NextStep']),
        checkQuiz(){
            if(this.answers.a1 === 'falso'){
                let route = this.$route.path
                this.$store.dispatch('NextStep', route)
                //NextStep(route)
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