import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Timer from '../../timer/timer'

import { data } from './data'

const CulvertNW = () => {
  return (
    <StyledCulvertNW>
      <h1>NW Culvert</h1>
      <Timer seconds={126} data={data} />
    </StyledCulvertNW>
  )
}

export default CulvertNW

const StyledCulvertNW = styled.div``;
