<template>
    <div>
        <v-app>
            <v-main :class="{'bg-image': step === 0, 'bg-gradient': step === 1}">
                <div v-if="$route.path === '/cargando-un-bev'">
                    <CargandoBev  v-if="step === 0"/>
                    <Inquietudes v-if="step === 1"/>
                    <Modulos v-if="step === 2" />
                    <Habitos v-if="step === 3" />
                    <TiposCargadores v-if="step === 4" />
                    <TableCargadores v-if="step === 5" />
                    <Quiz v-if="step === 6" />
                    <Correcto v-if="step === 7"/>
                    <Quiz2 v-if="step === 8" />
                    <Correcto v-if="step === 9"/>
                    <Quiz3 v-if="step === 10" />
                    <Correcto v-if="step === 11" />
                </div>
            </v-main>
            <v-footer dark padless app v-if="!(step === 0) && !(step === 7) && !(step === 9) && !(step === 11)">
                <p >© {{ date.getFullYear() }} Todos los derechos reservados</p>
            </v-footer>
        </v-app>
        
    </div>
</template>

<script>
import CargandoBev from '../components/bev/CargandoBev.vue';
import Inquietudes from '../components/bev/Inquietudes.vue'
import Modulos from '../components/bev/Modulos.vue';
import Habitos from '../components/bev/Habitos.vue'
import TiposCargadores from '../components/bev/TiposCargadores.vue';
import TableCargadores from '../components/bev/TableCargadores.vue';
import Quiz from '../components/bev/Quiz.vue'
import Quiz2 from '../components/bev/Quiz2.vue'
import Quiz3 from '../components/bev/Quiz3.vue'
import Correcto from '../components/Correcto.vue';
import { mapState } from 'vuex';

export default {
    data(){
        return{
            date: new Date(),
        }
    },
    components: {
        CargandoBev,
        Inquietudes,
        Modulos,
        Habitos,
        TiposCargadores,
        TableCargadores,
        Quiz,
        Quiz2,
        Quiz3,
        Correcto
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

.index-2{
    z-index: 3;
}

.bg-gradient{
    background: linear-gradient(to right, black, gray);
}
</style>