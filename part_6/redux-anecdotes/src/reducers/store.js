import {configureStore} from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import filterSlice from './filterReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterSlice
    }

})

export default store