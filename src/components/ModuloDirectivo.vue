<template>
  <div class="content">  
    <main-template>
      <template v-slot:content>
        <v-row class="mt-3" >
          <v-col cols="12" class="m-0 p-0" >
            <v-row class="">
              <v-col cols="7" align="center" class="animate__animated animate__backInLeft">
                <v-img src="../assets/test2.png" :height="windowHeight>800 ? '530': '410'" :class="{'margin-top': windowHeight>800, 'margin-top-logo': windowHeight<800}"></v-img>
                <!--<img src="../assets/logosvg.svg" width="750" height="100"/>-->
              </v-col>

              <v-col cols="5" v-if="section === 2" class="animate__animated animate__backInRight">
                <router-link to="/evolucion-de-movilidad">
                  <div class="op-evolucion margin-left-neg margin-top size-option" v-if="windowHeight>800" ></div>
                  <div class="op-evolucion margin-left-neg-md margin-top-md size-option-lg" v-if="windowHeight<800 && windowHeight>700" ></div>
                  <div class="op-evolucion margin-left-neg-md margin-top-md size-option-md" v-if="windowHeight<700"></div>
                </router-link>
                <!--<option-evolucion-small :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight<750"></option-evolucion-small>

                <option-evolucion :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight>900" ></option-evolucion>-->
              </v-col>
              <v-col cols="5" v-if="section === 3" class="animate__animated animate__backInRight">
                <router-link to="/fundamentos-de-electricidad">
                  <div class="op-electricidad margin-left-neg margin-top size-option" v-if="windowHeight>800" ></div>
                  <div class="op-electricidad margin-left-neg-md margin-top-md size-option-lg" v-if="windowHeight<800 && windowHeight>700" ></div>
                  <div class="op-electricidad margin-left-neg-md margin-top-md size-option-md" v-if="windowHeight<700" ></div>
                </router-link>
                
                <!--<option-electricidad :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight>900"></option-electricidad>
                <option-electricidad-small :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight<750"></option-electricidad-small>-->

              </v-col>
              <v-col cols="5" v-if="section === 4" class="animate__animated animate__backInRight">
                <router-link to="/cargando-un-bev">
                  <div class="op-cargando margin-left-neg margin-top size-option" v-if="windowHeight>800" ></div>
                  <div class="op-cargando margin-left-neg-md margin-top-md size-option-lg" v-if="windowHeight<800 && windowHeight>700" ></div>
                  <div class="op-cargando margin-left-neg-md margin-top-md size-option-md" v-if="windowHeight<700" ></div>
                </router-link>
                
                <!--<option-cargando :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight>900"></option-cargando>
                <option-cargando-small :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight<750"></option-cargando-small>-->
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="end" no-gutters>
          <v-col cols="5" align="end" v-if="section === 2" class="animate__animated animate__backInRight" :class="{'margin-top-options-md': windowHeight<800}">
            <!--<router-link to="/evolucion-de-movilidad">
              <v-img src="../assets/welcome/opciones.png" contain :max-height="windowHeight > 800 ? '65': windowHeight<800 ? '45':'45'" width="100%" 
                :class="{'margin-left': windowHeight> 800, 'margin-left-md': windowHeight<800 && windowHeight>690, 'margin-left-sm':windowHeight<690 }"></v-img>
            </router-link>-->
          </v-col>
          <v-col cols="5" align="end" v-if="section === 3" class="animate__animated animate__backInRight" :class="{'margin-top-options-md': windowHeight<800}">
            <!--<router-link to="/fundamentos-de-electricidad">
              <v-img src="../assets/welcome/optionsElectricidad.png" contain :max-height="windowHeight > 800 ? '65': windowHeight<800 ? '45':'45'" width="100%" 
                :class="{'margin-left': windowHeight> 800, 'margin-left-md': windowHeight<800 && windowHeight>690, 'margin-left-sm':windowHeight<690 }"></v-img>
            </router-link>-->
          </v-col>
          <v-col cols="5" align="end" v-if="section === 4" class="animate__animated animate__backInRight" :class="{'margin-top-options-md': windowHeight<800}">
            <!--<router-link to="/cargando-un-bev">
              <v-img src="../assets/welcome/cargandoOptions.png" contain :max-height="windowHeight > 800 ? '65': windowHeight<800 ? '45':'45'" width="100%"
                :class="{'margin-left': windowHeight> 800, 'margin-left-md': windowHeight<800 && windowHeight>690, 'margin-left-sm':windowHeight<690 }"></v-img>
            </router-link>-->
          </v-col>
        </v-row>
      </template>
    </main-template>
  </div>
</template>
  
<script>
import MainTemplate from './templates/MainTemplate.vue'
import { mapState } from 'vuex'

export default{
  data(){
    return{
    }
  },
  components: {
    MainTemplate,
  },
  mounted(){
    if(this.section === 3){
      this.playAudioModuloElectricidad()
    }
  },
  computed: {
    ...mapState(['section', 'windowSize', 'windowHeight','soundOn'])
  },
  methods: {
    playAudioModuloElectricidad(){
      if(this.soundOn === true){
        window.audio.src = require('../assets/audios/electricidad/SEV-electricidad-welcome.mp3')
        window.audio.play()
      }
      
    },
  }
}
</script>
  
<style scoped>
  .op-evolucion{
    background-image: url('../assets/welcome/pruebas.png');
    background-size: contain;
  }

  .op-electricidad{
    background-image: url('../assets/welcome/pruebas2.png');
    background-size: contain;
  }

  .op-cargando{
    background-image: url('../assets/welcome/pruebas3.png');
    background-size: contain;
  }

  .size-option{
    height: 815px;
    width: 1190px;
  }
  .size-option-lg{
    height: 80vh;
    width: 110vh;
  }
  .size-option-md{
    height: 80vh;
    width: 115vh;
  }


  .margin-left-neg{
    margin-left: -42vh;
  }

  .margin-left-neg-md{
    margin-left: -38vh;
  }

  .margin-top-logo{
    margin-top: -4.4vh;
    margin-left: -1vh;
  }

  .margin-top{
    margin-top: -1vh;
  }

  .margin-top-md{
    margin-top: -4vh;
  }

  .margin-top-options-md{
    margin-top: -12vh;
  }

</style>