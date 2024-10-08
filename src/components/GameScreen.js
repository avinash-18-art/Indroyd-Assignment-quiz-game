import React from 'react'

const GameScreen = ({players, currentQuestion, playerAnswers}) => {
  return (
    <div>
      <h1>Quiz Game</h1>
      <h2>Current Question: {currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>

      <h3>Players</h3>
      {players.length > 0 ? (
        <ul>
          {players.map((player, index) => (
            <li key={index}>
              {player}: {playerAnswers[player] || 'No answer yet'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No players have joined yet.</p>
      )}
    </div>
  )
}

export default GameScreen
