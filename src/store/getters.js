import router from '../router/index'
import { CheckIfContinue } from '../helpers/stepper-helper';

export default{
    LargeSize(state){
        if(!state.windowSize) return false;
        return state.windowSize > 1355
    },
    CanContinue(state){
        if(!state.canNext) return false;
        CheckIfContinue(router)
        return state.canNext
    },
    count: state => state.count
}