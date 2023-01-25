import styled from 'styled-components'

import { theme } from 'styles/themes'

export const Event = styled.li`
  list-style-type: none;
  padding: ${theme.RANGE.XS}px;
  margin: ${theme.RANGE.XS}px;
  color: ${theme.colors.white};
  max-width: 400px;
  background-color: ${theme.colors.dark};
  border-radius: ${theme.BORDER_RADIUS.M}px;
  padding: ${theme.RANGE.XS}px ${theme.RANGE.S}px;
  margin: ${theme.RANGE.XS}px ${theme.RANGE.NONE};
`
