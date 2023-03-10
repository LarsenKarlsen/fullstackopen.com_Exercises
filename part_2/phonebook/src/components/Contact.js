import DeleteButton from "./DelButton"

const Contact = (props) => {
  const {id, contact, handleDelete} = props
  return <li>{contact.name}: {contact.number} <DeleteButton handleDelete={()=>handleDelete(id)}/> </li>
}

export default Contact