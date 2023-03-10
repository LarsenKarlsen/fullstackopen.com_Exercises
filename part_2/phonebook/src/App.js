import { useEffect, useState } from 'react'

import contactService from './services/contact'

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

    contactService.create(newContact)
    .then(retunedContact=>{
      setPersons([...persons, retunedContact])
      setNewContact({name:"", number:""})
    })
    .catch(error => {alert("Cant add new note to database")})
  }

  const onChangeContact = (event) => {
    const contact = {...newContact}
    contact[event.target.name] = event.target.value
    setNewContact(contact)
  }

  const onChangeFilter = (event) => {
    setNewNameFilter(event.target.value)
  }
  
  const handleDelete = id => {
    const contactToDel = persons.find(person => person.id===id)
    if (window.confirm(`Are you sure to delete ${contactToDel.name}`)) {
      contactService.deleteContact(contactToDel.id)
      .then(res=>{
        setPersons(persons.filter(person=>person.id!==contactToDel.id))
      })
      .catch(error=>{alert("there is something wrong when I try to delete contact")})
    }

  }

  useEffect(()=>{
    contactService.getAll()
    .then(initialPersons=>setPersons(initialPersons))
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <FilterName handleChange={onChangeFilter}/>
      <h2>Add new contact</h2>
      <InputForm handleSubmit={addContact} newContact={newContact} handleChange={onChangeContact}/>
      <Phonebook persons={persons} nameFilter={nameFilter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
