<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter';

const store = useCounterStore()

const { windowSize, windowHeight, PreviousStep} = storeToRefs(store)

function Rezise(){
  windowSize.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

onMounted( () => {
  windowSize.value = window.innerWidth
  windowHeight.value = window.innerHeight
  window.addEventListener('resize', Rezise())
})
</script>
