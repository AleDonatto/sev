<template>
  <div class="content">  
    <main-template>
      <template v-slot:content>
        <v-row class="mt-3">
          <v-col cols="12">
            <!--height-box bg-mensajes-->
            <v-row class="bg-mensajes size-bienvenidos">
              <!--height-box-->
              <v-col cols="5" align="center" class="height-box">
                <div class="mx-4 top-text">
                  <h1 class="text-white font-lato font-size-h1 font-weight-bold text-center">Bienvenidos</h1>

                  <router-link to="/temario" class="decoration-none">
                    <v-btn class="text-white" rounded color="#929292">
                      <span class="font-weight-thin">Inicio</span>
                      <v-icon class="" color="white" end icon="mdi-chevron-right-circle"></v-icon>
                    </v-btn>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="7">
                <v-img :src="images" class="top-images" :class="{'height-box-images': windowHeight > 900, 'height-box-images-sm': windowHeight < 700}"></v-img>
                <!--<v-img :src="images" class="mt-images" :mx-height="windowHeight <900 ? 410 : 1200"></v-img>-->
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
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
</script>

<style scoped>
.height-box{
  height: 490px;
}

.height-box-images {
  max-width: 1850px;
}
.height-box-images-sm {
  max-width: 760px;
}

.top-text{
  margin-top: 24vh;
}

.bg-mensajes{
  background-image: url('../assets/welcome/fondo-left.png');
}
@media(max-height: 700px){
  .size-bienvenidos{
    height: 360px;
  }

  .top-images{
    margin-top: -1.9vh;
    margin-left: -1.7vh;
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