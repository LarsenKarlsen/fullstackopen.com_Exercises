import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { useNotificationDispatch } from "../NotificationContext"


const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatchNotification = useNotificationDispatch()
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["anecdotes"]})
    },
    onError: (error) => {
      dispatchNotification({type:"show", payload:`${error}`})
      setTimeout(()=>{
        dispatchNotification({type:"hide"})
      }, 5000)
    }
  })
  
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content.length < 5){
      dispatchNotification({type:"show", payload:`Anecdote must have length more then 5 characters`})
      setTimeout(()=>{
        dispatchNotification({type:"hide"})
      }, 5000)
      return 
    }
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes:0})
    dispatchNotification({type:"show", payload:`You successfully added anecdote: ${content}`})
    setTimeout(()=>{
      dispatchNotification({type:"hide"})
    }, 5000)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
