const SearchForm = ({handleChange}) => {
  return (
    <form>
      <div>Find countries: <input onChange={handleChange}></input></div>
    </form>
  )
}

export default SearchForm