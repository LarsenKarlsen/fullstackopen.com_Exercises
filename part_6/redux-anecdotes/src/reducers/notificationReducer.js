import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message: '',
    display: 'none',
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        show(state, action) {
            return {
                message: action.payload,
                display: "block"
            }
        },
        hide(state, action) {
            return initialState
        }
    }
})

export default notificationSlice.reducer