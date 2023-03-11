import { useEffect, useState } from 'react'

import contactService from './services/contact'

import FilterName from './components/FilterName'
import Phonebook from './components/Phonebook'
import InputForm from './components/ImputForm'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newContact, setNewContact] = useState({name:"", number:""})
  const [nameFilter, setNewNameFilter] = useState('')
  const [notification, setNotification] = useState({message: null, type:""})

  const addContact = (event) => {
    event.preventDefault()
    
    if (persons.filter(person=>person.name===newContact.name).length>0){
      const personToUpdate = persons.find(person=>person.name===newContact.name)
      if (window.confirm(`Contact with name ${personToUpdate.name} alredy exists. Do you want to change number of contact from ${personToUpdate.number} to ${newContact.number}?`)){
        contactService.updateContact(personToUpdate.id, newContact)
        .then(res=>{
          setPersons(persons.map(person=>person.id===personToUpdate.id? res:person))
          setNewContact({name:"", number:""})
          setNotification({message:`Update ${res.name} in Phonebook`, type:""})
          setTimeout(()=>{setNotification({message:null, type:""})}, 5000)
        })
        .catch(error=>{
          setNotification({message:`${newContact.name} doesn't exist in Phonebook`, type:"error"})
          setTimeout(()=>{setNotification({message:null, type:""})}, 5000)
          setNewContact({name:"", number:""})
        })
      }

      return
    }

    contactService.create(newContact)
    .then(retunedContact=>{
      setPersons([...persons, retunedContact])
      setNewContact({name:"", number:""})
      setNotification({message:`Added ${retunedContact.name} to Phonebook`, type:""})
      setTimeout(()=>{setNotification({message:null, type:""})}, 5000)
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
      <Notification data={notification}/>
      <InputForm handleSubmit={addContact} newContact={newContact} handleChange={onChangeContact}/>
      <Phonebook persons={persons} nameFilter={nameFilter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
