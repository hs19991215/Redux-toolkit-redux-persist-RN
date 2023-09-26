import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incree(state) {
            state.value++
        },
        decree(state) {
            state.value--
        },
        increeByAmount(state, action) {
            state.value += action.payload
        },
    },
})

export const { incree, decree, increeByAmount } = counterSlice.actions
export default counterSlice.reducer