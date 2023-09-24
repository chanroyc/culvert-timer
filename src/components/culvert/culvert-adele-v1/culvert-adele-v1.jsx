import React from 'react'
import styled from 'styled-components'

import Timer from '../../timer/timer'

import { data } from './data'

const CulvertAdeleV1 = () => {
  return (
    <StyledCulvertAdele>
      <h1>Adele Culvert v1</h1>
      <Timer seconds={data[0].time + 4} data={data} />
    </StyledCulvertAdele>
  )
}

export default CulvertAdeleV1

const StyledCulvertAdele = styled.div``;
