import { createSlice } from '@reduxjs/toolkit';

// createSlice handles the action types, action creators, and reducers in one place.
export const counterSlice = createSlice({
    name: 'counter', // This name is used as a prefix for the generated action types.
    initialState: {
        value: 0,
    },
    reducers: {
        // Redux Toolkit uses 'Immer' internally, which allows us to write "mutating" logic 
        // that safely results in immutable state updates.
        increment: (state) => {
            console.log('CounterSlice: Incrementing value');
            state.value += 1;
        },
        decrement: (state) => {
            console.log('CounterSlice: Decrementing value');
            state.value -= 1;
        },
        // The 'action' object contains a 'payload' property with any data passed during dispatch.
        incrementByAmount: (state, action) => {
            console.log(`CounterSlice: Incrementing by payload: ${action.payload}`);
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            console.log(`CounterSlice: Decrementing by payload: ${action.payload}`);
            state.value -= action.payload;
        },
    },
});

// Export the auto-generated action creators for use in components.
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

// Export the reducer function to be added to the store.
export default counterSlice.reducer;
