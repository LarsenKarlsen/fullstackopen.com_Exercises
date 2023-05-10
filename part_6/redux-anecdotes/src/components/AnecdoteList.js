import { useSelector, useDispatch } from 'react-redux'

import { upvote } from '../reducers/anecdoteReducer'
import Filter from './Filter'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
  })
  const dispatch = useDispatch()

  return (
    <div>
    <Filter />
    <h2>Anecdotes</h2>
      {anecdotes.sort((a, b)=>b.votes-a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(upvote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList