export default{
    StateAssign( state, payload ) {
        for( let key in payload ){
            if( !payload.hasOwnProperty( key ) ) continue;
            state[key] = payload[key];
        }
    },
    Increment(state){
        state.count = state.count+1
    }    
}