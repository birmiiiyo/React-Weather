import styled from 'styled-components'

import { theme } from '@styles/themes'

export const Background = styled.div`
  position: absolute;
  right: 0;
`

export const LoginButton = styled.button`
  padding: ${theme.RANGE.XS}px;
  margin: ${theme.RANGE.S}px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.dark};
  border: none;
  border-radius: ${theme.BORDER_RADIUS.M}px;
  font-size: ${theme.FONT_SIZE.M}px;
`
