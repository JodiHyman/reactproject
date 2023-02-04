import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



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

const fetchUpComing = () => {

   axios.get('myurl')
     .then(response => {
        //console.log(response.data.products);
        store.dispatch(upcoming.actions.reducer2(response.data.upcoming))
   })
};    