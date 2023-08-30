import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    show:false,
    message:''
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        showNotification(state, action){
            return {message: action.payload, show: true}
        },
        hideNotification(state, action){
            return initialState
        }
    }
})

export const {showNotification, hideNotification} = notificationSlice.actions
export default notificationSlice.reducer