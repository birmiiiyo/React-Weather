import styled from 'styled-components'

import { theme } from 'styles/themes'

export const Select = styled.select`
  width: 200px;
  color: ${theme.colors.dark};
  padding: ${theme.RANGE.S}px;
  margin: ${theme.RANGE.S}px;
`

export const Option = styled.option`
  color: ${theme.colors.dark};
`
