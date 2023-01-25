import styled, { keyframes } from 'styled-components'

import { theme } from 'styles/themes'

const rotate = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

export const CustomLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: ${theme.RANGE.S}px;
    border-radius: ${theme.BORDER_RADIUS.CIRCLE}%;
    border: 6px solid ${theme.colors.grey};
    border-color: ${theme.colors.grey} transparent ${theme.colors.grey}
      transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`
