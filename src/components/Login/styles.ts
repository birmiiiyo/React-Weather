import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

export const Background = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  @media ${devices.tablet} {
    top: 0;
  }
`

export const LoginButton = styled.button`
  padding: ${theme.RANGE.S}px;
  margin: ${theme.RANGE.S}px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.dark};
  border: none;
  border-radius: ${theme.BORDER_RADIUS.M}px;
  font-size: ${theme.FONT_SIZE.M}px;
`
