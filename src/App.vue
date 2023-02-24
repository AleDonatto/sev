<template>
  <div>
    <router-view/>
  </div>
  <!--<v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>-->
</template>

<script>
import {SCORM} from 'pipwerks-scorm-api-wrapper';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted(){
    this.start() 
    
    this.$store.commit('StateAssign', {windowSize:window.innerWidth})
    this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
    window.addEventListener('resize', this.Resize)
    //window.audio = document.createElement('audio')
    /*setInterval(() => {
      this.$store.commit('StateAssign', {audioPaused: window.audio.paused})
    },200)*/
  },
  methods: {
    Resize(){
      this.$store.commit('StateAssign', {windowSize:window.innerWidth})
      this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
    },
    Previous(){
      this.$store.dispatch('PreviousStep')
    },
    start() {
      SCORM.init();
      SCORM.set("cmi.core.lesson_mode", "normal");
      SCORM.save();
    }
  }
};
</script>
