<template>
  <div class="content">  
    <main-template>
      <template v-slot:content>
        <v-row class="mt-3">
          <v-col cols="12" class="m-0 p-0" >
            <v-row>
              <v-col cols="4" align="center">
                <v-img :src="logoS" max-height="310"></v-img>
              </v-col>
              <v-col cols="8" v-if="section === 2">
                <v-img :src="evolucion" :max-height="windowHeight>900 ? '760': '495'" contain :class="{'position-menu': windowHeight>900, 'position-menu-md': windowHeight < 700}"></v-img>
              </v-col>
              <v-col cols="8" v-if="section === 3">
                <v-img :src="electricidad" :max-height="windowHeight>900 ? '760': '495'" contain :class="{'position-menu': windowHeight>900, 'position-menu-md': windowHeight < 700}"></v-img>
              </v-col>
              <v-col cols="8" v-if="section === 4">
                <v-img :src="cargando" :max-height="windowHeight >900 ? '760': '495'" contain :class="{'position-menu': windowHeight>900, 'position-menu-md': windowHeight < 700}"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row justify="end" no-gutters>
          <v-col cols="5" align="end" v-if="section === 2">
            <router-link to="/evolucion-de-movilidad">
              <v-img :src="options" :max-height="windowHeight > 900 ? '66': '43'" width="100%" 
                :class="{'mt-3 margin-left': windowHeight> 900, 'mt-1 margin-left-md': windowHeight<700 }"></v-img>
            </router-link>
          </v-col>
          <v-col cols="5" align="end" v-if="section === 3">
            <router-link to="/fundamentos-de-electricidad">
              <v-img :src="opcionesFundamentos" :max-height="windowHeight > 900 ? '66': '43'" width="100%" 
                :class="{'mt-3 margin-left': windowHeight> 900, 'mt-1 margin-left-md': windowHeight<700 }"></v-img>
            </router-link>
          </v-col>
          <v-col cols="5" align="end" v-if="section === 4">
            <router-link to="/cargando-un-bev">
              <v-img :src="opcionesCragando" :max-height="windowHeight > 900 ? '66': '43'" width="100%"
                :class="{'mt-3 margin-left': windowHeight> 900, 'mt-1 margin-left-md': windowHeight<700 }"></v-img>
            </router-link>
          </v-col>
        </v-row>
      </template>
    </main-template>
  </div>
</template>
  
<script setup>
  import MainTemplate from './templates/MainTemplate.vue'
  import images from '@/assets/welcome/images.png'
  import logoS from '@/assets/welcome/logoS.png'
  import evolucion from '@/assets/welcome/evoluciontext.png'
  import options from '@/assets/welcome/opciones.png'

  import electricidad from '@/assets/welcome/fundamentosText.png'
  import opcionesFundamentos from '@/assets/welcome/optionsElectricidad.png'

  import cargando from '@/assets/welcome/cargandotext.png'
  import opcionesCragando from '@/assets/welcome/cargandoOptions.png'
  import { useCounterStore } from '../stores/counter';
  import { storeToRefs } from 'pinia'

  const store = useCounterStore()
  const {section, windowSize, windowHeight} = storeToRefs(store) 
</script>
  
<style scoped>
  .bg-evolucion{
    background-image: url('../assets/welcome/pruebasEvolucion.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    max-width: 100%;
    min-height: 880px;
  }

  .bg-evolucion-md{
    background-image: url('../assets/welcome/pruebasEvolucion.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 610px;
    margin-top: -10px;
  }

  .margin-left{
    margin-left: 5vh;
  }

  .margin-left-md{
    margin-left: 5vh;
  }

  .position-menu{
    margin-left: 5vh;
    margin-top: -1vh;
  }

  .position-menu-md{
    margin-top: -5vh;
    margin-left: 10vh;
  }

</style>