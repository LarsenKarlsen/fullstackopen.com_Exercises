import {useState, useEffect} from "react"
import axios from "axios"

import SearchForm from "./components/SearchForm"
import CountryInfo from "./components/CountryInfo"

function App() {
  const weather_key = process.env.REACT_APP_API_KEY

  const [countries, setCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [searchedCountry, setSearchedCountry] = useState(null)
  const [weather, setWeather] = useState(null)

  const handleChange = (event) => {
    console.log(countries.length)
    if ((event.target.value.length > 0) & (countries.length>0)) {
      const filtered = countries.filter(countrie=>countrie.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
      setFilteredCountries(filtered)
      setSearchedCountry(null)
      if (filtered.length===1) {
        setSearchedCountry(filtered[0])
      } 
    }
  }

  const handleSetCountryClick = (country) => {
    const countryData = countries.filter(countrie=>countrie.name.common.toLowerCase().includes(country.toLowerCase()))
    console.log(countryData[0])
    setSearchedCountry(countryData[0])
  }

  useEffect(()=>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(res=>setCountries(res.data))
    .catch(err=>alert(`Something wrong. Error message: ${err}`))
  }, [])

  useEffect(()=>{
    if (searchedCountry) {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCountry.capital[0]}&appid=${weather_key}&units=metric`)
      .then(res=>setWeather(res.data))
    }
  },[searchedCountry, weather_key])

  return (
    <div>
      <SearchForm handleChange={handleChange}/>
      <h1>Results</h1>
      <CountryInfo countries={filteredCountries}
                   searched={searchedCountry} handleSetCountryClick={handleSetCountryClick}
                   weather={weather}/>
    </div>
  )
}

export default App;
