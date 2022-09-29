import { useState } from 'react'

const Title = ({text}) => (<h2>{text}</h2>)

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Votes = ({vote}) => (<h4>Anectod voted {vote} times.</h4>)

let votes = Array(10).fill(0);
let mostVoted = 0;
let selectedTop = 0;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(0);

  for(let i=0; i < anecdotes.length; i++) {
    if(votes[i] > mostVoted) {
      mostVoted = votes[i];
      selectedTop = i;
    }
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      {anecdotes[selected]}
      <br />
      <Votes vote={votes[selected]} />
      <Button handleClick={() => {votes[selected] += 1; return setVote(vote + 1)}} text="Vote (+1)"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 7))} text="Next anectode"/>
      <Title text="The most voted anecdote" />
      {anecdotes[selectedTop]}
    </div>
  )
}

export default App;
