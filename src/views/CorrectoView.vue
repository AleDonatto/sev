<template>
  <v-app>
    <v-main class="bg-correcto">
      <v-row justify="center" class="h-100">
        <v-col cols="6" align="center" align-self="center">

          <v-img :src="user" max-height="180" ></v-img>
          <div class="rounded-xl border bg-white position-image-user">
            <h1 class="text-center font-avenir font-weight-bold font-size-96 mt-10">¡Excelente!</h1>
            <v-btn color="#FDBE2E" class="py-3 px-10 mx-6 mb-5 rounded-xl" @click="continuar">
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
import { useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter';



const router = useRouter()
const store = useCounterStore()
const {canNext, step} = storeToRefs(store)

function regresar(){
  canNext.value = true
  step.value++
  router.push('/evolucion-de-movilidad')
}

function continuar(){    //console.log(router.path)
  let route = router.path
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
