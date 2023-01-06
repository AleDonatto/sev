import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { InferStepperCounter } from '../helpers/stepper-helper'

export const useCounterStore = defineStore('store', () => {
  const count = ref(0)
  const step = ref(0)
  const windowSize = ref(null)
  const windowHeight = ref(null)
  const canNext = ref(null)
  const section = ref(1)
  const audioInitialized = ref(false) 

  function increment() {
    count.value++
  }

  function NextStep(router){
    let stepAux = step.value
    step.value = InferStepperCounter({stepAux, action: 'plus', router })
  }

  function PreviousStep(){
    let stepAux = step.value
    step.value = InferStepperCounter({stepAux, action: 'subtract', router})
  }

  function SetStep(){
    NextStep()
  }

  return { count, step, windowSize, windowHeight, canNext, section, audioInitialized, increment, NextStep, PreviousStep, SetStep }
})
