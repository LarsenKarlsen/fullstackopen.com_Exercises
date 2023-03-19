import axios from "axios"

const baseUrl = "http://localhost:3001/api/persons"

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res=>res.data)
}

const create = newContact => {
    const req = axios.post(baseUrl, newContact)
    return req.then(res=>res.data)
}

const deleteContact = id => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(res=>res.data)
}

const updateContact = (id, contactToUpdate) => {
    const req = axios.put(`${baseUrl}/${id}`, contactToUpdate)
    return req.then(res=>res.data)
}

//eslint-disable-next-line
export default {getAll, create, deleteContact, updateContact}