<template>
  <div class="content">  
    <main-template>
      <template v-slot:content>
        <v-row class="mt-3">
          <v-col cols="12" class="m-0 p-0" 
          :class="{
            'bg-image-evolucion position-evolucion': section === 2 && windowHeight > 900, 
            'bg-image-evolucion position-evolucion-md': section === 2 && windowHeight < 700, 
            'bg-image-evolucion position-evolucion-sm': section === 2 && windowHeight < 660, 
            'bg-image-electricidad position-electricidad': section === 3 && windowHeight>900, 
            'bg-image-electricidad position-electricidad-md': section === 3 && windowHeight<700, 
            'bg-image-aplicaciones position-aplicaciones': section === 4 && windowHeight>900,
            'bg-image-aplicaciones position-aplicaciones-md': section === 4 && windowHeight<700,
            'bg-image-aplicaciones position-aplicaciones-sm': section === 4 && windowHeight<700,
          }">
            <v-row>
              <v-col cols="4" align="center" class="animate__animated animate__backInLeft">
                <div class="">
                  <!--:class="{
                  'size-content bg-logo':windowHeight>900, 
                  'size-content-md bg-logo-md': windowHeight<700 && windowHeight>660,
                  'size-content-sm bg-logo-sm':windowHeight<660}"-->
                  <v-img :src="logoS" max-height="310" class="position-logo"></v-img>
                </div>
              </v-col>
              <v-col cols="8" v-if="section === 2" class="animate__animated animate__backInRight">
                <!--<v-img :src="evolucion" :max-height="windowHeight>900 ? '745': windowHeight<660 ? '470': '495'" contain :class="{
                  'position-menu': windowHeight>900, 
                  'position-menu-md': windowHeight < 700 && windowHeight>660,
                  'position-menu-sm': windowHeight < 660}"></v-img>-->
              </v-col>
              <v-col cols="8" v-if="section === 3" class="animate__animated animate__backInRight">
                <!--<v-img :src="electricidad" :max-height="windowHeight>900 ? '745': windowHeight<660 ? '470': '495'" contain 
                  :class="{'position-menu': windowHeight>900, 
                  'position-menu-md': windowHeight < 700 && windowHeight>660,
                  'position-menu-sm': windowHeight<660}"></v-img>-->
              </v-col>
              <v-col cols="8" v-if="section === 4" class="animate__animated animate__backInRight">
                <!--<v-img :src="cargando" :max-height="windowHeight >900 ? '745': windowHeight<660 ? '470': '495'" contain 
                  :class="{'position-menu': windowHeight>900, 
                  'position-menu-md': windowHeight < 700 && windowHeight>660,
                  'position-menu-sm': windowHeight<660}"></v-img>-->
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="end" no-gutters>
          <v-col cols="5" align="end" v-if="section === 2" class="animate__animated animate__backInRight">
            <router-link to="/evolucion-de-movilidad">
              <v-img :src="options" :max-height="windowHeight > 900 ? '80': windowHeight<660 ? '53':'53'" width="100%" 
                :class="{'mt-2 margin-left': windowHeight> 900, 'mt-1 margin-left-md': windowHeight<700 && windowHeight>660, 'mt-1 margin-left-sm':windowHeight<660 }"></v-img>
            </router-link>
          </v-col>
          <v-col cols="5" align="end" v-if="section === 3" class="animate__animated animate__backInRight">
            <router-link to="/fundamentos-de-electricidad">
              <v-img :src="opcionesFundamentos" :max-height="windowHeight > 900 ? '80': windowHeight<660 ? '53':'53'" width="100%" 
                :class="{'mt-5 margin-left': windowHeight> 900, 'mt-1 margin-left-md': windowHeight<700 && windowHeight>660, 'mt-1 margin-left-sm':windowHeight<660 }"></v-img>
            </router-link>
          </v-col>
          <v-col cols="5" align="end" v-if="section === 4" class="animate__animated animate__backInRight">
            <router-link to="/cargando-un-bev">
              <v-img :src="opcionesCragando" :max-height="windowHeight > 900 ? '85': windowHeight<660 ? '58':'54'" width="100%"
                :class="{'mt-5 margin-left': windowHeight> 900, 'mt-1 margin-left-md': windowHeight<700 && windowHeight>660, 'mt-1 margin-left-sm':windowHeight<660 }"></v-img>
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

  .bg-image-evolucion{
    background-image: url('../assets/test/evolucion.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .bg-image-electricidad{
    background-image: url('../assets/test/electricidad.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .bg-image-aplicaciones{
    background-image: url('../assets/test/aplicaciones.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-left: 1.8vh;
  }

  .position-evolucion{
    height: 750px;
  }

  .position-evolucion-md{
    margin-top: -3vh;
    height: 505px;
  }

  .position-evolucion-sm{
    margin-top: -3vh;
    height: 520px;
  }

  .position-electricidad{
    height: 735px;
  } 
  
  .position-electricidad-md{
    margin-left: 1.3vh;
    margin-top: -3vh;
    height: 505px;
  }

  .position-aplicaciones{
    height: 730px;
  }

  .position-aplicaciones-md{
    margin-left: 2.4vh;
    margin-top: -3.5vh;
    height: 505px;
  }

  .position-aplicaciones-sm{
    margin-left: 2.4vh;
    margin-top: -3.5vh;
    height: 520px;
  }
  

  .size-content{
    width: 1045px;
    height: 460px;
  }

  .size-content-md{
    width: 770px;
    height: 320px;
  }

  .size-content-sm{
    width: 890px;
    height: 320px;
  }

  .position-logo{
    margin-left: 1vh;
    margin-top: 3vh;
  }


  .margin-left{
    margin-left: -1vh;
  }

  .margin-left-md{
    margin-left: -1.8vh;
  }

  .margin-left-sm{
    margin-left: -2.2vh;
  }

  .position-menu{
    margin-left: 7.5vh;
    margin-top: -1vh;
  }

  .position-menu-md{
    margin-top: -5vh;
    margin-left: 10vh;
  }

  .position-menu-sm{
    margin-top: -5vh;
    margin-left: 23vh;
  }

</style>