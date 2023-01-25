<template>
    <v-app>
        <v-main class="bg-correcto">
            <v-row justify="center" class="h-100">
                <v-col cols="6" align="center" align-self="center">

                    <v-img :src="user" max-height="180" ></v-img>
                    <div class="rounded-xl border bg-white position-image-user">
                        <h1 class="text-center font-avenir font-weight-bold font-size-96 mt-10" v-if="$route.path === '/cargando-un-bev' && step === 9">
                          ¡Muy bien!
                        </h1>
                        <h1 class="text-center font-avenir font-weight-bold font-size-96 mt-10" v-else-if="$route.path === '/cargando-un-bev' && step === 11">
                          ¡Lo has hecho increíble!
                        </h1>
                        <h1 class="text-center font-avenir font-weight-bold font-size-96 mt-10" v-else>¡Excelente!</h1>
                        <v-btn color="#FDBE2E" class="py-1 px-10 mx-6 mb-5 rounded-xl" @click="continuar">
                            <span class="text-white font-avenir font-size-26 text-capitalize font-weight-bold">Continuar</span>
                        </v-btn>
                    </div>
                </v-col>

            </v-row>
        </v-main>
    </v-app>
</template>


<script setup>
import user from '@/assets/evolucion/user.png'
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { useCounterStore } from '../stores/counter';

const router = useRoute()
const store = useCounterStore()
const {NextStep} = store
const {canNext, step} = storeToRefs(store)

function continuar(){
  let route = router.path
  canNext.value = true
  console.log(route)
  NextStep(route)
}
</script>

<style scoped>
.bg-correcto{
  background: rgba(0, 0, 0, 0.64);
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
}

.bg-white{
  background: white;
}

.position-image-user{
  margin-top: -70px;
}

</style>