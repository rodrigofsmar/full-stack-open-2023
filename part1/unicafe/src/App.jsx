import { useState } from 'react'

const Header = ({text}) => <h1> {text} </h1>

const Button = ({text, handleClick}) =>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) =>{
  if(props.all > 0){
    return(
      <>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive}/>
      </>
    )
  }else{
    return(
      <>
      <p>No feedback given</p>
      </>
    )
  }
    
}

const StatisticLine = (props) =>{
  return(
    <>
    <tr>
      <td>
        {props.text} 
      </td>
      <td>
        {props.value}
      </td>
    </tr>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>{
    setGood(good+1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  
  const handleBadClick = () => {
    setBad(bad+1)
  }

  const all = () =>{
    return good+neutral+bad
  }

  const average = () =>{
    return (good*1 + neutral*(0) + bad*(-1))/(good+bad+neutral)
  }

  const positive = () =>{
    return (good/(good+bad+neutral))*100 + " %"
  }

  

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" handleClick={handleGoodClick}/>
      <Button text="neutral" handleClick={handleNeutralClick}/>
      <Button text="bad" handleClick={handleBadClick}/>

      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all()} average={average()} positive={positive()}/>

    </div>
  )
}

export default App
