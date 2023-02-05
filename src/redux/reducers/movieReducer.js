export const movieReducer = (state={},action)=>{
    switch(action.type){
        case 'LATEST_MOVIES':
            return {...state,latestMovies:action.payload}
        case 'UPCOMING_MOVIES':
            return {...state,upcomingMovies:action.payload}
        default:
            return state
    }
}