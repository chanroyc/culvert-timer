import React, { useState } from 'react'
import styled from 'styled-components'

import Timer from '../timer/timer'
import jobs from './jobs'

const Culvert = () => {
  const [activeJob, setActiveJob] = useState(jobs[0]);

  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(jobs[0].data[0].time + 4)

  const resetTimer = (activeJob) => {
    setActive(false)
    setTimeLeft(activeJob.data[0].time + 4);
  }

  const startTimer = () => {
    setActive(true)
  }

  return (
    <StyledCulvert>
      <Label htmlFor='jobs'>Select a job: </Label>

      <Select 
        name='jobs' 
        id='jobs' 
        onChange={(e) => {
          let activeJob = jobs[jobs.findIndex((job) => 
            job.name === e.target.value
          )]
          setActiveJob(activeJob)
          resetTimer(activeJob);
        }}
      >
        {jobs.map((job, i) => (
          <option value={job.name} key={i}>{job.name}</option>
        ))}
      </Select>

      <h1>{activeJob.name}</h1>

      <button className="start" onClick={() => startTimer()}>Start</button>
      <button className="reset" onClick={() => resetTimer(activeJob)}>Reset</button>

      <Timer 
        active={active} 
        timeLeft={timeLeft} 
        setTimeLeft={setTimeLeft} 
        resetTimer={() => resetTimer(activeJob)} 
        data={activeJob.data} 
      />
    </StyledCulvert>
  )
}

export default Culvert

const StyledCulvert = styled.div`
  button {
    padding: 16px 32px;
    margin: 0 16px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`

const Select = styled.select``