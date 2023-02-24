import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myName: "Ali Hassan",
  myAge: 28
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeName: (state) => {
 
      state.myName =  "allaa"
    },

    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

 
//  دائماً هتنساهااااااااااااااااااااااااااااااااااااااع
export const { changeName, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer