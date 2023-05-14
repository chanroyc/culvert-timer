import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useSpeechSynthesis } from 'react-speech-kit'

import { data } from './data'

const CulvertAdele = () => {
  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(151)

  const { speak } = useSpeechSynthesis();

  const resetTimer = () => {
    setActive(false)
    setTimeLeft(151)
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
    <StyledCulvertAdele>
      <h1>Adele Culvert</h1>
      <h2>Time Left: {timeLeft}</h2>
      <ul>
        {data.map(((res, i) => (
          <li key={i}>{res.time} : {res.text}</li>
        )))}
      </ul>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </StyledCulvertAdele>
  )
}

export default CulvertAdele

const StyledCulvertAdele = styled.div`
  button {
    display: block;
    padding: 16px;
    width: 80px;
    &:first-of-type {
      margin-bottom: 16px;
    }
  }
`;
