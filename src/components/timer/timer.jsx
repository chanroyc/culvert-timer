import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { useSpeechSynthesis } from 'react-speech-kit'

const Timer = ({seconds, data}) => {
  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(seconds)

  const { speak } = useSpeechSynthesis();

  const resetTimer = () => {
    setActive(false)
    setTimeLeft(seconds)
  }

  const startTimer = () => {
    setActive(true)
  }

  useEffect(() => {
    if (active) {
      const intervalId = setInterval(() => {
        setTimeLeft((t) => t - 1)
        
        let matches = data.filter((res) => res.time === timeLeft)
        if (matches.length > 0) {
          const text = matches[0].text
          speak({ text: text })
        }

        if (timeLeft <= 0) {
          resetTimer()
        }
      }, 1000)

      return () => clearInterval(intervalId)
    }
  }, [timeLeft, active])

  return (
    <StyledTimer>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => resetTimer()}>Reset</button>
      <h2>Time Left: {timeLeft}</h2>
      <ul>
        {data.map(((res, i) => (
          <li key={i}>{res.time} : {res.text}</li>
        )))}
      </ul>
    </StyledTimer>    
  )
}

export default Timer

const StyledTimer = styled.div`
  button {
    padding: 16px;
    width: 80px;
    &:first-of-type {
      margin-right: 16px;
    }
  }
`