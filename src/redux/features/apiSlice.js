import { createSlice } from '@reduxjs/toolkit';
import customFetch from '../..axios';



const upComing = createSlice({
    name: "upcoming",
    initialState: {
        upcoming: []
    },
    reducers: {
        reducer2: (state, { payload }) => {
                return { upcoming: [...state.upcoming, ...payload]}
         }
      }
    }
    );

customFetch = () => {

   axios.get('myurl')
     .then(response => {
        //console.log(response.data.products);
        store.dispatch(upcoming.actions.reducer2(response.data.upcoming))
   })
};    