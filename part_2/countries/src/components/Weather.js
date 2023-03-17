const Weather = ({weather,city}) => {
    console.log(weather)
    return (
        <div>
            <h1>Weather in {city}</h1>
            <p>temperature: {weather.main.temp} Celcius</p>
            <div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="text"></img>
                <div>{weather.weather[0].description}</div>
            </div>
            <p>wind: {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather