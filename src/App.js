import React, {useState, useEffect} from 'react'
import GameScreen from './components/GameScreen'
import MobileScreen from './components/MobileScreen'
import QRCodeDisplay from './components/QRCodeDisplay'
import './App.css'

const questionsList = [
  {
    question: 'What is the capital of France?',
    options: ['A: Paris', 'B: London', 'C: Rome', 'D: Berlin'],
    correct: 'A',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['A: Earth', 'B: Venus', 'C: Mars', 'D: Jupiter'],
    correct: 'C',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['A: Atlantic', 'B: Indian', 'C: Pacific', 'D: Arctic'],
    correct: 'C',
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      'A: Charles Dickens',
      'B: William Shakespeare',
      'C: Mark Twain',
      'D: J.K. Rowling',
    ],
    correct: 'B',
  },
  {
    question: 'What is the speed of light?',
    options: [
      'A: 300,000 km/s',
      'B: 150,000 km/s',
      'C: 100,000 km/s',
      'D: 200,000 km/s',
    ],
    correct: 'A',
  },
]

function App() {
  const [players, setPlayers] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [playerAnswers, setPlayerAnswers] = useState({})

  const addPlayer = name => {
    setPlayers([...players, name])
  }

  const handleAnswerSubmission = (player, answer) => {
    if (answer === questionsList[currentQuestionIndex].correct) {
      setPlayerAnswers({
        ...playerAnswers,
        [player]: answer,
      })
      setTimeout(() => {
        // Move to next question or display game over
        if (currentQuestionIndex + 1 < questionsList.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
          alert('Game Over! All questions answered.')
        }
      }, 2000) // Move to next question after 2 seconds
    } else {
      alert('Incorrect answer. Try again!')
    }
  }

  return (
    <div className="App">
      <QRCodeDisplay />
      <GameScreen
        players={players}
        currentQuestion={questionsList[currentQuestionIndex]}
        playerAnswers={playerAnswers}
      />
      <MobileScreen
        players={players}
        addPlayer={addPlayer}
        currentQuestion={questionsList[currentQuestionIndex]}
        handleAnswerSubmission={handleAnswerSubmission}
      />
    </div>
  )
}

export default App
