import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

const initialState = {
  loading : true,
  apiData: [],
  error : ''
}

export const fetchData = createAsyncThunk('space/launchdetails',()=>{
  return axios
  .get('https://api.spacexdata.com/v3/launches')
  .then(response=>response.data)
})


export const counterSlice = createSlice({
  name: 'fetchdata',
  initialState,
  
  reducers: {

    LaunchByWeek: (state,action) => {
      //Filter page by week
    },
    LaunchByMonth: (state, action) => {
      //Filter page by month
    },
    LaunchByYear: (state, action) => {
      //  //Filter page by year
    },
    LaunchBy_Success_status :(state, action)=>{
         //Filter page by status : Success
    },
    LaunchBy_Failure_status : (state, action)=>{
              //Filter page by status : Failure
    },
    LaunchBy_is_upcoming : (state, action)=>{
      
    }

   
  },

  extraReducers :{
    
    [fetchData.pending] :(state, action)=>{
      state.loading = true;
    },

    [fetchData.fulfilled] :(state, action)=>{
      state.loading = false
    },

    [fetchData.rejected] :(state, action)=>{
      state.loading = true
    }


  }
})

// Action creators are generated for each case reducer function
export const { LaunchByWeek, LaunchByMonth, LaunchByYear,LaunchBy_Failure_status  } 
= counterSlice.actions

export default counterSlice.reducer