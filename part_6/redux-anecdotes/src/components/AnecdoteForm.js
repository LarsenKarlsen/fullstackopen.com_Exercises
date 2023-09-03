import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { hideNotification, showNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitForm = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
    dispatch(showNotification("add new anecdote"))
    setTimeout(() => dispatch(hideNotification()), 5000)
  }

  return (
    <form onSubmit={submitForm}>
      <div><input name='anecdote'/></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm