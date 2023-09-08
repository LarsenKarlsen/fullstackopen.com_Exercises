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

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch(showNotification(message))
        setTimeout(()=>{
            dispatch(hideNotification())
        }, time)
    }
} 

export default notificationSlice.reducer