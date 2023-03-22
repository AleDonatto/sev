<template>
  <div class="content">  
    <main-template>
      <template v-slot:content>
        <v-row class="mt-3" >
          <v-col cols="12" class="m-0 p-0" >
            <v-row class="">
              <v-col cols="7" align="center" class="animate__animated animate__backInLeft">
                <v-img src="@/assets/test2.png" :height="windowHeight>900 ? '530': '390'" :class="{'margin-top': windowHeight>900, 'margin-top-logo': windowHeight<750}"></v-img>
                <!--<img src="../assets/logosvg.svg" width="750" height="100"/>-->
              </v-col>

              <v-col cols="5" v-if="section === 2" class="animate__animated animate__backInRight">
                <option-evolucion-m-d :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight<750"/>

                <option-evolucion :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight>900" />
              </v-col>
              <v-col cols="5" v-if="section === 3" class="animate__animated animate__backInRight">
                <option-electricidad :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight>900"/>

                <option-electricidad-m-d :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight<750"/>
              </v-col>
              <v-col cols="5" v-if="section === 4" class="animate__animated animate__backInRight">

                <option-cargando :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight>900"/>

                <option-cargando-m-d :class="{'margin-left-neg margin-top': windowHeight>900, 'margin-left-neg-md margin-top-md': windowHeight<750}" v-if="windowHeight<750"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="end" no-gutters>
          <v-col cols="5" align="end" v-if="section === 2" class="animate__animated animate__backInRight" :class="{'margin-top-options-md': windowHeight<750}">
            <router-link to="/evolucion-de-movilidad">
              <v-img src="@/assets/welcome/opciones.png" contain :max-height="windowHeight > 900 ? '65': windowHeight<700 ? '45':'45'" width="100%" 
                :class="{'margin-left': windowHeight> 900, 'margin-left-md': windowHeight<750 && windowHeight>690, 'margin-left-sm':windowHeight<690 }"></v-img>
            </router-link>
          </v-col>
          <v-col cols="5" align="end" v-if="section === 3" class="animate__animated animate__backInRight" :class="{'margin-top-options-md': windowHeight<750}">
            <router-link to="/fundamentos-de-electricidad">
              <v-img src="@/assets/welcome/optionsElectricidad.png" contain :max-height="windowHeight > 900 ? '65': windowHeight<700 ? '45':'45'" width="100%" 
                :class="{'margin-left': windowHeight> 900, 'margin-left-md': windowHeight<750 && windowHeight>690, 'margin-left-sm':windowHeight<690 }"></v-img>
            </router-link>
          </v-col>
          <v-col cols="5" align="end" v-if="section === 4" class="animate__animated animate__backInRight" :class="{'margin-top-options-md': windowHeight<750}">
            <router-link to="/cargando-un-bev">
              <v-img src="@/assets/welcome/cargandoOptions.png" contain :max-height="windowHeight > 900 ? '65': windowHeight<700 ? '45':'45'" width="100%"
                :class="{'margin-left': windowHeight> 900, 'margin-left-md': windowHeight<750 && windowHeight>690, 'margin-left-sm':windowHeight<690 }"></v-img>
            </router-link>
          </v-col>
        </v-row>
      </template>
    </main-template>
  </div>
</template>
  
<script>
import MainTemplate from './templates/MainTemplate.vue'
import { mapState } from 'vuex'
import OptionEvolucionMD from '@/assets/welcome/evoluciontext-md.svg'
import OptionEvolucion from '@/assets/welcome/evoluciontext.svg'
import OptionElectricidad from '@/assets/welcome/fundamentosText.svg'
import OptionElectricidadMD from '@/assets/welcome/fundamentosText-md.svg'
import OptionCargando from '@/assets/welcome/cargandotext.svg'
import OptionCargandoMD from '@/assets/welcome/cargandotext-md.svg'

export default{
  data(){
    return{
    }
  },
  components: {
    MainTemplate,
    OptionEvolucionMD,
    OptionEvolucion,
    OptionElectricidad,
    OptionElectricidadMD,
    OptionCargando,
    OptionCargandoMD
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
        window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-welcome.mp3')
        window.audio.play()
      }
      
    }
  }
}
</script>
  
<style scoped>

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
    margin-top: -5vh;
  }

  .margin-top-options-md{
    margin-top: -12vh;
  }

  .margin-left{
    margin-top: 0vh;
    margin-left: 4vh;
  }

  .margin-left-md{
    margin-top: 12vh;
    margin-left: 6vh;
  }

  .margin-left-sm{
    margin-top: 11vh;
    margin-left: 5vh;
  }

  .logo {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>