import { useEffect, useState } from 'react'
import axios from 'axios'

import FilterName from './components/FilterName'
import Phonebook from './components/Phonebook'
import InputForm from './components/ImputForm'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newContact, setNewContact] = useState({name:"", number:""})
  const [nameFilter, setNewNameFilter] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    
    if (persons.filter(person=>person.name===newContact.name).length>0){
      alert(`${newContact.name} is alredy in phonebook`)
      return
    }

    setPersons([...persons, newContact])
    setNewContact({name:"", number:""})
  }

  const onChangeContact = (event) => {
    const contact = {...newContact}
    contact[event.target.name] = event.target.value
    setNewContact(contact)
  }

  const onChangeFilter = (event) => {
    setNewNameFilter(event.target.value)
  }

  useEffect(()=>{
    console.log("effect")
    axios
    .get("http://localhost:3001/persons")
    .then(response=>setPersons(response.data))
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <FilterName handleChange={onChangeFilter}/>
      <h2>Add new contact</h2>
      <InputForm handleSubmit={addContact} newContact={newContact} handleChange={onChangeContact}/>
      <Phonebook persons={persons} nameFilter={nameFilter}/>
    </div>
  )
}

export default App
