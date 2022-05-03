import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {value: {title: '', date: '', id: 0}},
    reducers: {
        setTask: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setTask } = taskSlice.actions;

export default taskSlice.reducer