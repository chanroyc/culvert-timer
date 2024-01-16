import React from 'react'
import styled from 'styled-components'

import Timer from '../../timer/timer'

import { data } from './data'

const CulvertAdele = () => {
  return (
    <StyledCulvertAdele>
      <h1>Adele Culvert</h1>
      <Timer seconds={data[0].time + 4} data={data} />
    </StyledCulvertAdele>
  )
}

export default CulvertAdele

const StyledCulvertAdele = styled.div``;
