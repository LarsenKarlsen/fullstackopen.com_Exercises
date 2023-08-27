import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitForm = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(addAnecdote(content))
  }

  return (
    <form onSubmit={submitForm}>
      <div><input name='anecdote'/></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm