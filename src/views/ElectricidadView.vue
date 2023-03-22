<template>
    <div>
        <v-app>
            <v-main :class="{'bg-image' : step <= 1, 'bg-black': step === 15}">
                <div v-if="$route.path === '/fundamentos-de-electricidad'">
                    <Presentacion v-if="step === 0"/>
                    <ConceptosBasicos v-if="step === 1"/>
                    <ConceptosBasicos2 v-if="step === 2"/>
                    <ConceptosBasicos3 v-if="step === 3"/>
                    <ConceptosBasicos4 v-if="step === 4"/>
                    <ConceptosBasicos5 v-if="step === 5"/>
                    <ConceptosBasicos6 v-if="step === 6"/>
                    <ConceptosBasicos7 v-if="step === 7"/>
                    <ConceptosBasicos8 v-if="step === 8"/>
                    <ConceptosBasicos9 v-if="step === 9"/>
                    <ConceptosBasicos10 v-if="step === 10" />
                    <ConceptosBasicos11 v-if="step === 11" />
                    <!--<AplicacionesPracticas v-if="step === 12" />-->
                    <AplicacionesPracticas2 v-if="step === 12" />
                    <AplicacionesPracticas3 v-if="step === 13"/>
                    <AplicacionesPracticas4 v-if="step === 14" />
                    <Einstein v-if="step === 15"/>
                    <Quiz v-if="step === 16"/>
                    <Correcto v-if="step === 17" />
                    <!--<Quiz2 v-if="step === 18" />
                    <Correcto v-if="step === 19"/>-->
                    <Quiz3 v-if="step === 18" />
                    <Correcto v-if="step === 19"/>
                </div>
            </v-main>
            <v-footer dark padless app v-if="!(step === 0) && !(step === 17) && !(step === 19) && !(step === 21)">
                <p class="mt-1 pl-5">© {{ date.getFullYear() }} Todos los derechos reservados</p>
            </v-footer>
        </v-app>
        
    </div>
</template>

<script>
import Presentacion from '../components/electricidad/Presentacion.vue';
import ConceptosBasicos from '../components/electricidad/ConcentosBasicos.vue';
import ConceptosBasicos2 from '../components/electricidad/ConceptosBasicos2.vue';
import ConceptosBasicos3 from '../components/electricidad/ConceptosBasicos3.vue';
import ConceptosBasicos4 from '../components/electricidad/ConceptosBasicos4.vue';
import ConceptosBasicos5 from '../components/electricidad/ConceptosBasicos5.vue';
import ConceptosBasicos6 from '../components/electricidad/ConceptosBasicos6.vue';
import ConceptosBasicos7 from '../components/electricidad/ConceptosBasicos7.vue';
import ConceptosBasicos8 from '../components/electricidad/ConceptosBasicos8.vue';
import ConceptosBasicos9 from '../components/electricidad/ConceptosBasicos9.vue';
import ConceptosBasicos10 from '../components/electricidad/ConceptosBasicos10.vue';
import ConceptosBasicos11 from '../components/electricidad/ConceptosBasicos11.vue';
import AplicacionesPracticas from '../components/electricidad/AplicacionesPracticas.vue';
import AplicacionesPracticas2 from '../components/electricidad/AplicacionesPracticas2.vue';
import AplicacionesPracticas3 from '../components/electricidad/AplicacionesPracticas3.vue';
import AplicacionesPracticas4 from '../components/electricidad/AplicacionesPracticas4.vue'
import Einstein from '../components/electricidad/Einstein.vue';
import Quiz from '../components/electricidad/Quiz.vue';
import Quiz2 from '../components/electricidad/Quiz2.vue';
import Quiz3 from '../components/electricidad/Quiz3.vue';
import Correcto from '../components/Correcto.vue';
import { mapState } from 'vuex';

export default {
    components: {
        Presentacion,
        ConceptosBasicos,
        ConceptosBasicos2,
        ConceptosBasicos3,
        ConceptosBasicos4,
        ConceptosBasicos5,
        ConceptosBasicos6,
        ConceptosBasicos7,
        ConceptosBasicos8,
        ConceptosBasicos9,
        ConceptosBasicos10,
        ConceptosBasicos11,
        AplicacionesPracticas,
        AplicacionesPracticas2,
        AplicacionesPracticas3,
        AplicacionesPracticas4,
        Einstein,
        Quiz,
        Quiz2,
        Quiz3,
        Correcto
    },
    data(){
        return {
            date: new Date(),
        }
    },
    computed: {
        ...mapState(['step'])
    }
}
</script>

<style scoped>
.bg-image {
  background-image: url('../assets/welcome/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
}

.bg-black{
    background-color: black;
}

.index-3{
    z-index: 3;
}
</style>