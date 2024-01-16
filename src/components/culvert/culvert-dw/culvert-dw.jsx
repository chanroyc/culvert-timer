import React from 'react'
import styled from 'styled-components'

import Timer from '../../timer/timer'

import { data } from './data'

const CulvertDW = () => {
  return (
    <StyledCulvertDW>
      <h1>Dawn Warrior</h1>
      <Timer seconds={data[0].time + 4} data={data} />
    </StyledCulvertDW>
  )
}

export default CulvertDW

const StyledCulvertDW = styled.div``;
