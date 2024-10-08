import React, {useState} from 'react'

const MobileScreen = ({
  players,
  addPlayer,
  currentQuestion,
  handleAnswerSubmission,
}) => {
  const [name, setName] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const joinGame = () => {
    if (name) {
      addPlayer(name)
    }
  }

  const submitAnswer = () => {
    if (selectedAnswer && name) {
      handleAnswerSubmission(name, selectedAnswer)
    }
  }

  return (
    <div>
      <h2>Mobile Screen</h2>
      {players.includes(name) ? (
        <>
          <h3>Current Question: {currentQuestion.question}</h3>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index} onClick={() => setSelectedAnswer(option[0])}>
                {option}
              </li>
            ))}
          </ul>
          <button onClick={submitAnswer}>Submit Answer</button>
        </>
      ) : (
        <>
          <h3>Enter Your Name to Join</h3>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={joinGame}>Join Game</button>
        </>
      )}
    </div>
  )
}

export default MobileScreen
