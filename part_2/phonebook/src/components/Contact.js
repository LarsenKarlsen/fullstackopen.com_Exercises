const Contact = (props) => {
  const {name, number} = props.contact
  
  return <li>{name}: {number}</li>
}

export default Contact