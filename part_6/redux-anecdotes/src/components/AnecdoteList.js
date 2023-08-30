import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { hideNotification, showNotification } from "../reducers/notificationReducer"


const AnecdoteList = () => {
  const filter = useSelector(state => state.filter)
  const filteredAnecdotes = useSelector(state => {
    if (filter.length !== 0) {
      return state.anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
    }
    return state.anecdotes
  })
  const anecdotes = [...filteredAnecdotes].sort((a,b) => {return b.votes - a.votes})
  const dispatch = useDispatch()

  const addVote = (id) => {
    dispatch(vote(id))
    const content = anecdotes.find(a => a.id === id)
    dispatch(showNotification(`You voted for ${content.content}`))
    setTimeout(()=>dispatch(hideNotification()), 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList