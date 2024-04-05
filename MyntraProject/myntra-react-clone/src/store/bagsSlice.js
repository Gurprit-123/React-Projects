import { createSlice} from '@reduxjs/toolkit'



const bagsSlice= createSlice({
  name:'bags',
  initialState:[],
  reducers:{
    addToBag:(state,action)=>{
    state.push(action.payload);
    },
    removeFromBag:(state,action)=>{
      return state.filter(itemId=>itemId !== action.payload)
      },
  }
})



export const bagsActions=bagsSlice.actions

export default bagsSlice;

