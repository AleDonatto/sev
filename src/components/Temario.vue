<template>
  <div>
    <main-template>
      <template v-slot:content>
        <v-row class="m-0 p-0">
          <v-col cols="12" class="p-0 m-0" :class="{'bg-temario': windowHeight > 900, 'bg-temario-md': windowHeight < 700}">
            <!--:class="{'bg-instructions' : windowHeight > 900, 'bg-instructions-sm': windowHeight < 700}"-->
            <v-row class="m-0" >
              <v-col cols="4">
                <h1 class="text-white font-lato font-weight-light text-center" :class="{'mt-7 font-size-96':windowHeight > 900, 'mt-0 font-size-50':windowHeight < 700}">Temario</h1>
                <p class="text-white font-avenir font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-19' : windowHeight < 700}">
                  Evolución de la movilidad: desde los primeros vehículos automóviles hasta las tecnologías 0 emisiones.
                </p>
                <p class="text-white font-avenir font-weight-regular ml-5 my-4" :class="{'font-size-22': windowHeight > 900, 'font-size-19' : windowHeight < 700}">
                  Fundamentos de electricidad en un vehículo eléctrico: cómo entenderlos y explicarlos de manera sencilla.
                </p>
                <p class="text-white font-avenir font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-19' : windowHeight < 700}">
                  Autos eléctricos: entendiendo un BEV (vehículo eléctrico a baterías) y aplicaciones reales.
                </p>
                
                <div class="d-flex justify-center mt-4" >
                  <router-link to="/instrucciones" class="decoration-none">
                    <v-btn class="" rounded="" color="#FDBE2E">
                      <span class="font-avenir font-size-30 font-weight-thin" :class="{'font-size-30': windowHeight > 900, 'font-size-22': windowHeight < 700}">Continuar</span>
                    </v-btn>
                  </router-link>
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

<script setup>
import MainTemplate from './templates/MainTemplate.vue';
import cooper from '@/assets/temario/other.png'
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';
const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
</script>

<style scoped>
.bg-temario{
  background-image: url('../assets/temario/temario.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 790px;
}

.bg-temario-md{
  background-image: url('../assets/temario/temario.png');
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
