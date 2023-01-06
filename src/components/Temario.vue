<template>
  <div>
    <main-template>
      <template v-slot:content>
        <v-row class="mt-3">
          <v-col cols="12" style="background-color: black" class="p-0 m-0">
            <v-row class="m-0" style="height: 690px">
              <v-col cols="3">
                <h1 class="text-white">Temario</h1>
                <div>
                  <router-link to="/instrucciones" class="">
                    <v-btn class="" rounded="" color="#FDBE2E">
                      <span>Continuar</span>
                    </v-btn>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="9">
                <v-img :src="cooper" max-width="1250" class="ml-16"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
    </main-template>
  </div>
</template>

<script setup>
import MainTemplate from './templates/MainTemplate.vue';
import cooper from '@/assets/temario/temario.png'
defineProps({
  msg: {
    type: String,
    required: false
  }
})
</script>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
