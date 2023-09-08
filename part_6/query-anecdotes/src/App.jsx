import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, voteForAnecdote } from './requests'
import { useNotificationDispatch } from './NotificationContext'


const App = () => {
  const queryClient = useQueryClient()
  const dispatchNotification = useNotificationDispatch()
  const voteAnecdoteMutation = useMutation(voteForAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["anecdotes"]})
    }
  })

  const handleVote = (anecdote) => {
    voteAnecdoteMutation.mutate({...anecdote, votes:anecdote.votes+1})
    dispatchNotification({type:"show", payload:`You voted for ${anecdote.content}`})
    setTimeout(()=>{
      dispatchNotification({type:"hide"})
    }, 5000)
  }

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry:1
  })

  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading) {
    return <div>Loading...</div>
  }

  if (result.isError) {
    return <div>Something is wrong retry later</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
