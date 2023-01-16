import { useCounterStore } from "../stores/counter"
import router from "../router"

export const InferStepperCounter = (val) => {
    let path = val.router
    let max 
    const store = useCounterStore()

    if(path === '/evolucion-de-movilidad') max = 8
    if(path === '/fundamentos-de-electricidad') max = 7
    
    if(val.action === 'plus'){
        //console.log(val.stepAux + '---' + max)
        val.stepAux = val.stepAux++ >= max ?  NextStep(val)  :  val.stepAux++
    }else{
        //console.log('se acabaron los pasos')
        //val.commit('StateAssign', {canNext:true})
        store.canNext = true
        val.stepAux = val.stepAux-- <= 0 ?  PreviousStep(val) : val.stepAux--
    }
    return val.stepAux
}

export const NextStep = (val) => {
    console.log('siguiente modulo')
    let path = val.router
    const store = useCounterStore()

    if(path === '/evolucion-de-movilidad'){
        store.section = 3
        router.push('/modulo-directivo')
        //val.router.push('/modulo-directivo')
    }

    if(path === '/fundamentos-de-electricidad'){
        store.section = 4
        router.push('/')
    }
    
    return 0
}

export const PreviousStep = (val) => {
    let path = val.router.currentRoute.path
    if(path === '/cultura-organizacional-concepto') {
        val.router.push('/modulo-directivo')
        return 0
    }
    if(path === '/cultura-organizacional-importancia') {
        val.router.push('/cultura-organizacional-concepto')
        return 4
    }
    if(path === '/cultura-organizacional-consciente') {
        val.router.push('/cultura-organizacional-importancia')
        return 1
    }
    if(path === '/valores-excelencia') {
        val.router.push('/modulo-directivo')
        return 1
    }
    if(path === '/trabajo-en-equipo') {
        val.router.push('/modulo-directivo')
        return 1
    }
    
}

export const CheckIfContinue = (val) => {
    //console.log(val)
    return true
}