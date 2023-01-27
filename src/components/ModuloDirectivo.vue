<template>
  <div class="content">  
    <main-template>
      <template v-slot:content>
        <v-row class="mt-3">
          <v-col cols="12">
            <v-row class="size-logo" :class="{'bg-mensajes': windowHeight > 900, 'bg-mensajes-md': windowHeight < 700}">
              <v-col cols="4" align="center" class="height-box">
                <div class="mx-4">
                  <v-img :src="logoS" contain :max-height="windowHeight > 900 ? '420':'250'"></v-img>
                </div>
              </v-col>
              <v-col cols="8" v-if="section === 1">
                <v-img :src="images" class="position-image" :class="{'height-box-images': windowHeight>900, 'height-box-images-sm': windowHeight<700}" ></v-img>
              </v-col>
              <v-col cols="8" v-if="section === 2" >
                <v-img :src="evolucion" class="position-image" :class="{'height-box-images': windowHeight>900, 'height-box-images-sm': windowHeight<700}"></v-img>
                <router-link to="/evolucion-de-movilidad" >
                  <v-btn>inicar</v-btn>
                </router-link>
              </v-col>
              <v-col cols="8" v-if="section === 3">
                <v-img :src="fundamentos" class="position-image" :class="{'height-box-images': windowHeight>900, 'height-box-images-sm': windowHeight<700}" ></v-img>
                <router-link to="/fundamentos-de-electricidad">
                  <v-btn>inicar</v-btn>
                </router-link>
              </v-col>
              <v-col cols="8" v-if="section === 4">
                <v-img :src="cargando" class="position-image" :class="{'height-box-images': windowHeight>900, 'height-box-images-sm': windowHeight<700}"></v-img>
                <router-link to="/cargando-un-bev">
                  <v-btn>iniciar</v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
    </main-template>
  </div>
</template>
  
<script setup>
  import MainTemplate from './templates/MainTemplate.vue'
  import images from '../assets/welcome/images.png'
  import evolucion from '../assets/welcome/evoluciontest.png'
  import movilidad from '../assets/welcome/movilidad.png'
  import fundamentos from '../assets/welcome/electricidad.png'
  import logoS from '../assets/welcome/logoS.png'
  import cargando from '../assets/welcome/cargando-bev.png'
  import { useCounterStore } from '../stores/counter';
  import { storeToRefs } from 'pinia'

  const store = useCounterStore()
  const {section, windowSize, windowHeight} = storeToRefs(store) 
</script>
  
<style scoped>
  .height-box{
    height: 490px;
  }

  .height-box-images {
    height: 820px;
  }
  .height-box-images-sm {
    height: 590px;
  }
  
  .bg-mensajes{
    /*background-image: url('../assets/welcome/fondo-left.png');*/
    background-image: url('../assets/electricidad/fondopruebas.png');
  }

  .bg-mensajes-md{
    background-image: url('../assets/welcome/fondo-left.png');
  }

  @media(max-height:700px){
    .size-logo{
      height: 310px;
    }
    .position-image{
      margin-top: -6vh;
      margin-left: 23vh;
    }
  }
  @media(min-height:900px){
    .size-logo{
      height: 440px;
    }
    .position-image{
      margin-top: -2.7vh;
      margin-left: 15vh;
    }
  }
</style>