<template>
    <v-app>
        <v-main class="bg-correcto">
            <v-row justify="center" class="h-100">
                <v-col cols="6" align="center" align-self="center">

                    <v-img :src="user" max-height="180" ></v-img>
                    <div class="rounded-xl border bg-white position-image-user">
                        <p class="text-center font-avenir font-weight-bold font-size-72 mt-15 line-height-text">
                            ¡Ups, creo que será en otra ocasión!
                        </p>
                        <v-btn color="#FDBE2E" class="py-3 px-10 mx-6 mb-5 mt-10 rounded-xl" @click="regresar">
                            <span class="text-white font-avenir font-size-26 text-capitalize font-weight-bold">Revisar respuestas</span>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<script>
import user from '@/assets/evolucion/user.png'

export default {
    data(){
        return {}
    },
    methods: {
        regresar(){
            this.$router.go(-1)
        }
    }
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
.line-height-text{
    line-height: 90px;
}
</style>