import { useState } from 'react'


const StatisticLine = (props) => {
  const {text, value} = props

  return <><p>{text} {value}</p></>
}

const Statistics = (props) => {
  const {good, neutral, bad, all, average, positive} = props
  if (all>0){
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

const Button = (props) => {
  const {text, clickHandler} = props

  return <><button onClick={clickHandler}>{text}</button></>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const averageScore = (good, bad, all) => {
    return (good*1+bad*-1)/all
  }
  const positivePercentage = (good, all) => {
    return `${good/all*100}%`
  }

  const handleGoodClick = () => {
    let newGood = good + 1
    let newAll  = all + 1
    let newAverage = averageScore(newGood, bad, newAll)
    let newPositive = positivePercentage(newGood, newAll)
    setPositive(newPositive)
    setAverage(newAverage)
    setGood(newGood)
    setAll(newAll)
  }
  const handleNeutralClick = () => {
    let newNeutral = neutral + 1
    let newAll  = all + 1
    let newAverage = averageScore(good, bad, newAll)
    let newPositive = positivePercentage(good, newAll)
    setPositive(newPositive)
    setAverage(newAverage)
    setNeutral(newNeutral)
    setAll(newAll)
  }
  const handleBadClick = () => {
    let newBad = bad + 1
    let newAll  = all + 1
    let newAverage = averageScore(good, newBad, newAll)
    let newPositive = positivePercentage(good, newAll)
    setPositive(newPositive)
    setAverage(newAverage)
    setBad(newBad)
    setAll(newAll)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" clickHandler={handleGoodClick}/>
      <Button text="neutral" clickHandler={handleNeutralClick}/>
      <Button text="bad" clickHandler={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App;
