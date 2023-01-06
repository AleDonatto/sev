<template>
    <div class="content">  
      <main-template>
        <template v-slot:content>
          <v-row class="mt-3">
            <v-col cols="12">
              <v-row style="background-color: black;" class="height-box">
                <v-col cols="5" align="center" style="background-color: black;" class="height-box">
                  <div class="mx-4 margin-top" v-if="section === 1">
                    <h1 class="text-white text-h1 font-weight-bold text-center">Bienvenidos</h1>
                    <router-link to="/evolucion-de-movilidad">
                      <v-btn class="text-white" rounded color="#929292">
                        <span class="font-weight-thin">Inicio</span>
                        <v-icon class="" color="white" end icon="mdi-chevron-right-circle"></v-icon>
                      </v-btn>
                    </router-link>
                  </div>
                  <div v-else class="mx-4">
                    <v-img :src="logoS" contain max-height="420"></v-img>
                  </div>
                </v-col>
                <v-col cols="7">
                  <div v-if="section === 1">
                    <v-img :src="images" class="top-images height-box-images" ></v-img>
                  </div>
                  <div v-if="section === 2">
                    <v-img :src="evolucion" class="top-images height-box-images" ></v-img>
                    <router-link to="/evolucion-de-movilidad">
                      <v-btn>inicar</v-btn>
                    </router-link>
                  </div>
                  <div v-if="section === 3">
                    <v-img :src="fundamentos" class="top-images height-box-images" ></v-img>
                    <router-link to="/fundamentos-de-electricidad">
                      <v-btn>inicar</v-btn>
                    </router-link>
                  </div>
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
  import evolucion from '../assets/welcome/evolucion.png'
  import fundamentos from '../assets/welcome/electricidad.png'
  import logoS from '../assets/welcome/logoS.png'
  import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia'

  const store = useCounterStore()
  const {section} = storeToRefs(store) 
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