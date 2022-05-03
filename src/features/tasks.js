import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {value: {taskList: []}},
    reducers: {
        addTask: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;