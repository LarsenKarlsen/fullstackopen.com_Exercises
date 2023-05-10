import { useDispatch } from 'react-redux'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch({type: 'anecdote/addAnecdote', payload: content})
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm