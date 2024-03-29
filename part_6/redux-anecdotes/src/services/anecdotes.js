/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"


const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async() => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async(content) =>{
    const object = {
        content,
        votes:0
    }

    const response = await axios.post(baseUrl, object)
    return response.data
}

const addVote = async (updatedAnecdote) => {
    console.log(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote)
    const response = await axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote)
    return response.data
}

export default { getAll, createNew, addVote }