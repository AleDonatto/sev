<template>
  <div class="content">  
    <main-template>
      <template v-slot:content>
        <v-row class="mt-3">
          <v-col cols="12">
            <v-row style="background-color: black;" class="height-box">
              <v-col cols="5" align="center" style="background-color: black;" class="height-box">
                <div class="mx-4 margin-top">
                  <h1 class="text-white font-lato font-size-h1 font-weight-bold text-center">Bienvenidos</h1>
                  <router-link to="/temario">
                    <v-btn class="text-white" rounded color="#929292">
                      <span class="font-weight-thin">Inicio</span>
                      <v-icon class="" color="white" end icon="mdi-chevron-right-circle"></v-icon>
                    </v-btn>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="7">
                <v-img :src="images" class="top-images height-box-images"></v-img>
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
</script>

<style scoped>
.height-box{
  height: 490px;
}
.top-images{
  margin-top: -1.5vh;
  margin-left: -20vh;
}

.height-box-images {
  max-width: 2200px;
}

.margin-top{
  margin-top: 30vh;
}
</style>