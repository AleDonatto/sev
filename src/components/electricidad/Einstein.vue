<template>
    <div>
        <content-template title="ELECTRICIDAD">
          <template v-slot:content>
            <v-row justify="center">
              <v-col cols="8" align="center" >
                <v-dialog v-model="dialog" persistent width="880">
                  <v-img :src="user" max-height="170" class="index-3"></v-img>
                  <v-card class="position-card overflow-hidden" color="#D9D9D9">
                    <v-card-title class="mt-7">
                      <p class="font-weight-bold text-center mt-7 font-avenir font-size-30">Recordatorio amistoso</p>
                    </v-card-title>
                    <v-card-text>
                      <p class="text-center font-avenir font-size-24">
                        La información brindada en este curso es para tu bienestar y el de toda nuestra comunidad. La mejor manera de aprender es enseñándolo a 
                        los demás así que es responsabilidad de cada persona reflexionar y entender la información de este curso.
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-row justify="center">
                        <v-col cols="12" align="center">
                          <v-btn class="bg-color-yellow px-10 py-2 mb-10" variant="text" rounded @click="dialog = false">
                            <span class="font-weight-bold">Continuar</span>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
            <div class="bg-black">
              <v-row justify="center" class="m-0 p-0 bg-black" no-gutters>
                <v-col cols="12">
                  <v-img :src="albert" max-height="870"></v-img>
                </v-col>
              </v-row>
            </div>
          </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import albert from '@/assets/electricidad/albert.png'
import user from '@/assets/evolucion/user.png'
import { ref } from 'vue';

const dialog = ref(true)
</script>

<style scoped>
.bg-black{
    background-color: black;
}

.bg-color-yellow{
  background-color:#FDBE2E; 
}

.position-card{
  margin-top: -5vh;
  z-index: 1;
}

.index-3{
  z-index: 3;
}


</style>