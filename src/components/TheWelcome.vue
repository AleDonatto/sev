<template>
    <div class="content">  
        <main-template>
            <template v-slot:content>
                <v-row :class="{'mt-3': windowHeight > 780, 'margin-top': windowHeight < 780}">
                    <v-col cols="12" :class="{'bg-mensajes': windowHeight> 900, 'bg-mensajes-md': windowHeight< 900}">
                        <!--height-box bg-mensajes-->
                        <v-row class="size-bienvenidos">
                            <!--height-box-->
                            <v-col cols="5" align="center" class="height-box">
                              <div class="mx-4 top-text" :class="{'top-text': windowHeight > 880, 'top-text-md': windowHeight < 880}">
                                    <h1 class="white--text font-size-h1 font-weight-bold text-center">Bienvenidos</h1>
                                    <v-btn class="white--text" rounded color="#929292" @click="initAudio" :disabled="disabled" :dark="disabled === true">
                                      <!--<router-link to="/temario" class="decoration-none">-->
                                        <span class="font-weight-bold white--text">Inicio</span>
                                        <v-icon class="" color="white" end>mdi-chevron-right-circle</v-icon>
                                      <!--</router-link>-->
                                    </v-btn>
                                </div>
                            </v-col>
                            <v-col cols="7">
                                <!--<v-img :src="images" class="top-images" :class="{'height-box-images': windowHeight > 900, 'height-box-images-sm': windowHeight < 700}"></v-img>-->
                                <!--<v-img :src="images" class="mt-images" :mx-height="windowHeight <900 ? 410 : 1200"></v-img>-->
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script>
import MainTemplate from './templates/MainTemplate.vue'
import { mapState } from 'vuex';

export default {
    components: {
      MainTemplate
    },
    data(){
      return {
        disabled: false
      }
    },
    mounted(){
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize', 'canNext'])
    },
    methods: {
      initAudio(){
        //this.$router.push('/temario')

        this.disabled = true
        window.audio.src = require('@/assets/audios/SEV-Welcome.mp3')
        window.audio.play()
        
        setTimeout(()=> {
          //this.$store.commit('StateAssign', {canNext:true})
          this.$router.push('/temario')
        },17880)
      }
    }

}
</script>

<style scoped>

.height-box{
  height: 490px;
}

.height-box-images {
  max-width: 1850px;
}
.height-box-images-sm {
  max-width: 910px;
  /*height: 880px;*/
}

.top-text{
  margin-top: 35vh;
}

.top-text-md{
  margin-top: 26vh;
}

.margin-top{
  margin-top: -22px;
}

.bg-mensajes-md{
  background-image: url('../assets/welcome/pruebasInicio.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 500px;
}

.bg-mensajes{
  background-image: url('../assets/welcome/pruebasInicio.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 790px;
}


@media(max-height: 700px){
  .size-bienvenidos{
    height: 360px;
  }

  .top-images{
    margin-top: -1.6vh;
    margin-left: -10vh;
  }
}

@media(min-height: 900px){
  .size-bienvenidos{
    height: 410px;
  }

  .top-images{
    margin-top: -1.5vh;
    margin-left: -20vh;
  }
}
</style>