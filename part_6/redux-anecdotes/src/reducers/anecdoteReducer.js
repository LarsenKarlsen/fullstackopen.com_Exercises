import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"


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
    appendAnecdotes(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})

export const {vote, appendAnecdotes, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdotes(newAnecdote))
  }
}

export const addVote = id => {
  return async dispatch => {
    dispatch(vote(id))
    const anecdoteSlice = await anecdoteService.getAll()
    const anecdote = anecdoteSlice.find(a => a.id === id)
    const updatedAnecdote = {...anecdote, votes:anecdote.votes + 1}
    await anecdoteService.addVote(updatedAnecdote)
  }
}

export default anecdoteSlice.reducer