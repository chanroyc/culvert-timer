import React from 'react'
import styled from 'styled-components'

import Timer from '../../timer/timer'

import { data } from './data'

const CulvertWA = () => {
  return (
    <StyledCulvertWA>
      <h1>WA Culvert</h1>
      <Timer seconds={data[0].time + 4} data={data} />
    </StyledCulvertWA>
  )
}

export default CulvertWA

const StyledCulvertWA = styled.div``;
