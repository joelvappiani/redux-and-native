import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessageToStore: (state, action) => {
            state.value.push(action.payload)
        },
        removeMessageFromStore: (state, action) => {
            state.value = state.value.filter( e => e !== action.payload)
        }
    }
})

export const { addMessageToStore, removeMessageFromStore } = messagesSlice.actions;
export default messagesSlice.reducer;