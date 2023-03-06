import { useState } from 'react'

import FilterName from './components/FilterName'
import Phonebook from './components/Phonebook'
import InputForm from './components/ImputForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone:'123-456-789'},
    { name: 'Murabi Bi', phone:'555-34-34'},
    { name: 'Li Laz', phone:'765-456-789'},
    { name: 'Frodo', phone:'123-456-3223'},
    { name: 'Gromp', phone:'123-555-765'}
  ]) 
  const [newContact, setNewContact] = useState({name:"", phone:""})
  const [nameFilter, setNewNameFilter] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    
    if (persons.filter(person=>person.name===newContact.name).length>0){
      alert(`${newContact.name} is alredy in phonebook`)
      return
    }

    setPersons([...persons, newContact])
    setNewContact({name:"", phone:""})
  }

  const onChangeContact = (event) => {
    const contact = {...newContact}
    contact[event.target.name] = event.target.value
    setNewContact(contact)
  }

  const onChangeFilter = (event) => {
    setNewNameFilter(event.target.value)
  }


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
