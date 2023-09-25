import { useState, useTransition } from 'react'

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Header = ({text}) =>{
  return(
    <h1>{text}</h1>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const currentlySelected = selected;

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const randomAnecdote = () =>{
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
    const currentlySelected = randomIndex;
  }

  const handleVotes = () =>{
    const copy = [...votes];
    copy[currentlySelected] = votes[currentlySelected] +1;
    setVotes(copy);
  }

  const handleMostVoted = () =>{
    let highestNumber = votes[0];
    let mostVotedIndex = 0;
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > highestNumber) {
        highestNumber = votes[i];
        mostVotedIndex = i;
      }
    }
    return mostVotedIndex
  }

  return (
    <>
    <div>
      <Header text="Anecdote of the day"/>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
    </div>
    <div>
        <Button text="new anecdote" handleClick={randomAnecdote}/>
        <Button text="vote" handleClick={handleVotes}/>
    </div>
    <div>
      <Header text="Anecdote with the most votes"/>
      <p>{anecdotes[handleMostVoted()]}</p>
      <p>has {votes[handleMostVoted()]} votes</p>
    </div>
    </>
  )
}

export default App
