import router from "../../router"
import { InferStepperCounter } from "../../helpers/stepper-helper"

export default{
    NextStep({commit, state}, route){
        console.log(route)
        let step = state.step
        commit('StateAssign', {step : InferStepperCounter({step, action:'plus', route,commit})})
    },
    PreviousStep({commit, state}, route){
        console.log(route)
        let step = state.step
        commit('StateAssign', {step : InferStepperCounter({step, action:'subtract', route,commit})})
    },
    SetStep({commit,state,dispatch}){
        dispatch('NextStep')

        /*if(state.step === 3){
            dispatch('NextStep')
        }else{
            commit('StateAssign', {step : 1})
        }*/
        
    },
    /*increment({commit,state}){
        let counter = state.count
        counter = counter++
        commit('StateAssign', {count: counter})
    }*/
}