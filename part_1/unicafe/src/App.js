import { useState } from 'react'


const Statistics = (props) => {
  const {good, neutral, bad, all, average, positive} = props
  if (all>0){
    return (
      <>
        <h1>statistics</h1>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {all}</p>
        <p>average: {average}</p>
        <p>positive: {positive}</p>
      </>
    )
  }
  return (
    <p>No feedback given</p>
  )
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
      <button onClick={()=>{handleGoodClick()}}>good</button>
      <button onClick={()=>{handleNeutralClick()}}>neutral</button>
      <button onClick={()=>{handleBadClick()}}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App;
