<template>
    <v-app>
        <v-main class="bg-correcto">
            <v-row justify="center" class="h-100">
                <v-col cols="6" align="center" align-self="center">

                    <v-img src="@/assets/evolucion/user.png" contain max-height="180" ></v-img>
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

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data(){
        return{}
    },
    computed: {
        ...mapState(['canNext', 'step'])
    },
    methods: {
        ...mapActions(['NextStep']),
        regresar(){
            this.canNext = true
            step.value++
            this.$route.push('/evolucion-de-movilidad')
        },
        continuar(){    
            //console.log(router.path)
            let route = this.$route.path
            this.$store.dispatch('NextStep', route)
            //NextStep(route)
        },
        playAudio(){
            window.audio.src = require('@/assets/audios/SEV-excelente.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },4500)
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

</style>