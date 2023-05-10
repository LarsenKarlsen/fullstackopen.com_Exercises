import { useSelector, useDispatch } from 'react-redux'

import Filter from './Filter'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
  })
  const dispatch = useDispatch()

  const handleClick = (id, content) => {
    dispatch({type: 'anecdote/upvote', payload: {id: id}})
    dispatch({type: 'notification/show', payload: `You voted for '${content}'`})
    setTimeout(() => dispatch({type: 'notification/hide'}), 5000)
  }

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
            <button onClick={() => handleClick(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList