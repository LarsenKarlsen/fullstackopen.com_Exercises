import SetCountryButton from "./SetCountryButton"

const CountryInfo = ({countries, searched, handleSetCountryClick}) => {
  const style = {
    width: "250px",
    maxHeigth: "500px",
    border: "1px solid black"
  }
  if (searched){
    return (
      <div>
        <h1>{searched.name.common}</h1>
        <p>Capital: {searched.capital[0]}</p>
        <p>Area: {searched.area} km ²</p>
        <div>
          <h3>Languages:</h3>
          <ul>
            {
              // searched.languages.map(item=>{return Object.keys(item).map(key=><li key={key}>{item[key]}</li>)})
              Object.entries(searched.languages).map(lang=><li key={lang[0]}>{lang[1]}</li>)
            }
          </ul>
        </div>
        <div>
          <img style={style} src={searched.flags.svg} alt=""></img>
        </div>
      </div>
    )
  }

  if ((countries == null) || (countries.length===0)){
    return null
  }

  if ((countries.length>10)){
    return <div>Too many matches. Specify another filter</div>
  }

  if ((countries.length>1)){
    return (
      <div>
        <ul>
          {countries.map(c=><li key={c.name.common}>{c.name.common} <SetCountryButton handleClick={()=>{handleSetCountryClick(c.name.common)}}/></li>)}
        </ul>
      </div>
    )
  }
}

export default CountryInfo