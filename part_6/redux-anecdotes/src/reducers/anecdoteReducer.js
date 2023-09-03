import { createSlice } from "@reduxjs/toolkit"


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers:{
    vote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    },
    addAnecdote(state, action){
      state.push(action.payload) 
    },
    appendAnecdotes(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})

export const {addAnecdote, vote, appendAnecdotes, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer