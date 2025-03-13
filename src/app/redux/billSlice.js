"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bills: [],
};

const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {
        addBill: (state, action) => {
            if (!Array.isArray(state.bills)) {
                state.bills = [];
            }
            state.bills.push(action.payload);
        },
    },
});

export const { addBill } = billSlice.actions;
export default billSlice.reducer;
