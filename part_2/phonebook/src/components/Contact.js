const Contact = (props) => {
  const {name, phone} = props.contact
  
  return <li>{name}: {phone}</li>
}

export default Contact