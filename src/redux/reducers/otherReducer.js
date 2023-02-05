export const otherReducer = (state={},action)=>{
    switch(action.type){
        case 'EVENTS':
            return {...state,allEvents:action.payload}
        case 'LATEST_ID':
            return {...state,latest:action.payload}
        default:
            return state
    }
}