<template>
    <div>
        <content-template title="ELECTRICIDAD">
            <template v-slot:content>
                <v-row justify="center">
                    <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
</style>