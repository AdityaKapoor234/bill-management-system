import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bills: [],
};

const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {
        addBill: (state, action) => {
            console.log("action.payload", action.payload);
            console.log("action.payload Before adding:", JSON.parse(JSON.stringify(state.bills)));
            if (!Array.isArray(state.bills)) {
                state.bills = [];
            }
            state.bills.push(action.payload);
            console.log("action.payload After adding:", JSON.parse(JSON.stringify(state.bills)));
        },
    },
});

export const { addBill } = billSlice.actions;
export default billSlice.reducer;
