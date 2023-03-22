//import { useCounterStore } from "../stores/counter"
import router from "../router"

export const InferStepperCounter = (val) => {
    //let path = val.router
    let path = val.route
    let max 
    //const store = useCounterStore()

    if(path === '/evolucion-de-movilidad') max = 11
    if(path === '/fundamentos-de-electricidad') max = 19
    if(path === '/cargando-un-bev') max = 11
    
    if(val.action === 'plus'){
        //console.log(val.stepAux + '---' + max)
        val.step = val.step++ >= max ?  NextStep(val)  :  val.step++
    }else{
        //console.log('se acabaron los pasos')
        val.commit('StateAssign', {canNext:true})
        //store.canNext = true
        val.step = val.step-- <= 0 ?  PreviousStep(val) : val.step--
    }
    return val.step
}

export const NextStep = (val) => {
    console.log('siguiente modulo')
    //let path = val.router
    let path = val.route
    //const store = useCounterStore()

    if(path === '/evolucion-de-movilidad'){
        //store.section = 3
        val.commit('StateAssign', {section:3})
        //router.push('/modulo-directivo')
        router.push('/modulo-directivo')
    }

    if(path === '/fundamentos-de-electricidad'){
        //store.section = 4
        val.commit('StateAssign', {section:4})

        router.push('/modulo-directivo')
        //router.push('/modulo-directivo')
    }

    if(path === '/cargando-un-bev'){
        //router.push('/muchas-gracias')
        router.push('/muchas-gracias')

    }
    
    return 0
}

export const PreviousStep = (val) => {
    //let path = val.router
    let path = val.route
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

export const CheckIfContinue = () => {
    //console.log(val)
    return true
}