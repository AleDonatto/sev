<template>
  <div>
    <main-template>
      <template v-slot:content>
        <v-row class="m-0 p-0">
          <v-col cols="12" class="p-0 m-0" :class="{'bg-temario': windowHeight > 900, 'bg-temario-md': windowHeight < 780}">
            <!--:class="{'bg-instructions' : windowHeight > 900, 'bg-instructions-sm': windowHeight < 700}"-->
            <v-row class="m-0" >
              <v-col cols="4">
                <h1 class="white--text font-weight-light text-center" :class="{'mt-7 font-size-96':windowHeight > 900, 'mt-0 font-size-50':windowHeight < 700}">Temario</h1>
                <p class="white--text  font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-19' : windowHeight < 700}">
                  Evolución de la movilidad: desde los primeros vehículos automóviles hasta las tecnologías 0 emisiones.
                </p>
                <p class="white--text  font-weight-regular ml-5 my-4" :class="{'font-size-22': windowHeight > 900, 'font-size-19' : windowHeight < 700}">
                  Fundamentos de electricidad en un vehículo eléctrico: cómo entenderlos y explicarlos de manera sencilla.
                </p>
                <p class="white--text  font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-19' : windowHeight < 700}">
                  Autos eléctricos: entendiendo un BEV (vehículo eléctrico a baterías) y aplicaciones reales.
                </p>
                
                <div class="d-flex justify-center mt-4" >
                  <v-btn class="" rounded color="#FDBE2E" :disabled="canNext === false" :dark="canNext === false">
                    <router-link to="/instrucciones" class="decoration-none">
                      <span class=" font-size-30 font-weight-semibold black--text" :class="{'font-size-30': windowHeight > 900, 'font-size-22': windowHeight < 700}">Continuar</span>
                    </router-link>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="7">
                <!--<v-img :src="cooper" class="position-image" :class="{'height-image':windowHeight > 900, 'height-image-sm':windowHeight < 700}"></v-img>-->
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
    </main-template>
  </div>
</template>

<script>
import MainTemplate from './templates/MainTemplate.vue';
import cooper from '@/assets/temario/other.png'
import { mapState } from 'vuex';

export default{
  data(){
    return{}
  },
  components: {
    MainTemplate
  },
  mounted(){
    this.$store.commit('StateAssign', {canNext: false})
    this.playAudio()
  },
  computed: {
    ...mapState(['windowHeight', 'windowSize', 'canNext'])
  },
  methods: {
    playAudio(){
      window.audio.src = require('@/assets/audios/SEV-temario.mp3')
      window.audio.play()
      setTimeout(()=> {
        this.$store.commit('StateAssign', {canNext:true})
      },55500)
    }
  }

}
</script>

<style scoped>
.bg-temario{
  background-image: url('../assets/temario/temariopruebas.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 790px;
}

.bg-temario-md{
  background-image: url('../assets/temario/temariopruebas.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 510px;
  margin-top: -10px;
}


.height-image{
  height: 850px;
}

.height-image-sm{
  height: 510px;
}

@media(max-height: 700px){
  .size-instruction{
    height: 310px;
  }
  .position-image{
    margin-top: -2vh;
    margin-left: 10vh;
  }
}

@media(min-height: 900px) {
  .size-instruction{
    height: 690px;
  }
  .position-image{
    margin-top: -3vh;
    margin-left: -2vh;
  }
}


/*@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}*/
</style>
