import React, { useState } from 'react';
import styled from 'styled-components';

import culvert from './components/culvert'

const App = () => {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <div className='App'>
      <Label htmlFor='jobs'>Select a job:</Label>
      <Select 
        name='jobs' 
        id='jobs' 
        onChange={(e) => setActiveJob(
          culvert.findIndex((job) => 
            job.name === e.target.value
          )
        )}
      >
        {culvert.map((job, i) => (
          <option value={job.name} key={i}>{job.name}</option>
        ))}        
      </Select>
      
      {culvert[activeJob]?.component}
    </div>
  )
}

export default App;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`
const Select = styled.select``