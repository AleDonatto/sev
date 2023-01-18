import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { InferStepperCounter } from '../helpers/stepper-helper'

export const useCounterStore = defineStore('store', () => {
  const count = ref(0)
  const step = ref(0)
  const windowSize = ref(null)
  const windowHeight = ref(null)
  const canNext = ref(true)
  const section = ref(3)
  const audioInitialized = ref(false) 

  const answeredQuiz1 = ref(false)
  const answeredQuiz2 = ref(false)
  const answeredQuiz3 = ref(false)

  function increment() {
    count.value++
  }

  function NextStep(router){
    let stepAux = step.value
    step.value = InferStepperCounter({stepAux, action: 'plus', router })
  }

  function PreviousStep(router){
    let stepAux = step.value
    step.value = InferStepperCounter({stepAux, action: 'subtract', router})
  }

  function SetStep(){
    NextStep()
  }

  return { count, step, windowSize, windowHeight, canNext, section, audioInitialized, answeredQuiz1, answeredQuiz2, answeredQuiz3, increment, NextStep, PreviousStep, SetStep }
})
