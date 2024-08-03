import * as React from 'react'
import styled from 'styled-components';

const Toggle = ({ onClick, theme, ...props }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 56 56"
    theme={theme}
    onClick={onClick}
    {...props}
  >
    <path
      d="M29 28c0-11.917 7.486-22.112 18-26.147A27.841 27.841 0 0 0 37 0C21.561 0 9 12.561 9 28s12.561 28 28 28c3.523 0 6.892-.66 10-1.853C36.486 50.112 29 39.917 29 28z"
    />
  </StyledSVG>
)
export default Toggle

const StyledSVG = styled.svg`
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 16px;
  right: 16px;
  fill: ${props => props.theme === 'light' ? '#363537' : '#ffffff'}
`;