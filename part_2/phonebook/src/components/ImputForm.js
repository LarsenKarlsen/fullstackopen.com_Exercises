const InputForm = (props) => {
  return (
  <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>name: <input name='name' onChange={props.handleChange} value={props.newContact.name}/></div>
        <div>number: <input name='number' onChange={props.handleChange} value={props.newContact.number}/></div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
  )
}

export default InputForm