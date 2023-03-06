import Contact from "./Contact"

const Phonebook = (props) => {
  let {persons, nameFilter} = props
  if (nameFilter.length > 0) {
    persons=persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
  }
  return (
    <div>
      <h2>Phones</h2>
      <ul>
        {persons.map(person=><Contact key={person.name} contact={person}/>)}
      </ul>
    </div>
  )
}

export default Phonebook