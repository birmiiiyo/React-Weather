import styled from 'styled-components'

import { CENTER, theme } from 'styles/themes'

export const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.grey};
  ${CENTER}
`

export const ErrorTitle = styled.h1`
  font-size: ${theme.FONT_SIZE.XL}px;
  font-weight: ${theme.FONT_WEIGHT.XL}px;
  color: ${theme.colors.white};
`
