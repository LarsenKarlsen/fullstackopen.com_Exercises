const FilterName = (props) => {
  return <div>Filter by name: <input onChange={props.handleChange} name='filterByName'/></div> 
}

export default FilterName