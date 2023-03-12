import {useState, useEffect} from "react"
import axios from "axios"

import SearchForm from "./components/SearchForm"
import CountryInfo from "./components/CountryInfo"

function App() {
  const [countries, setCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [searchedCountry, setSearchedCountry] = useState(null)

  const handleChange = (event) => {
    console.log(countries.length)
    if ((event.target.value.length > 0) & (countries.length>0)) {
      const filtered = countries.filter(countrie=>countrie.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
      setFilteredCountries(filtered)
      if (filtered.length===1) {
        setSearchedCountry(filtered[0])
      } 
    }
  }

  useEffect(()=>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(res=>setCountries(res.data))
    .catch(err=>alert(`Something wrong. Error message: ${err}`))
  }, [])

  return (
    <div>
      <SearchForm handleChange={handleChange}/>
      <h1>Results</h1>
      <CountryInfo countries={filteredCountries} searched={searchedCountry}/>
    </div>
  )
}

export default App;
