import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSpeechSynthesis } from 'react-speech-kit'

import Timer from '../../timer/timer'

import { data } from './data'

const CulvertAdele = () => {
  return (
    <StyledCulvertAdele>
      <h1>Adele Culvert</h1>
      <Timer seconds={151} data={data} />
    </StyledCulvertAdele>
  )
}

export default CulvertAdele

const StyledCulvertAdele = styled.div``;
