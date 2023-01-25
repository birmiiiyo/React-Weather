import styled from 'styled-components'

import { COLUMN, theme } from 'styles/themes'

export const Container = styled.div`
  ${COLUMN}
  margin: ${theme.RANGE.M}px;
  position: relative;
`

export const Input = styled.input`
  width: 200px;
  border: none;
  padding: ${theme.RANGE.XS}px;
  font-weight: ${theme.FONT_WEIGHT.M};
  font-size: ${theme.FONT_SIZE.S}px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.dark};
`

export const Label = styled.label`
  font-weight: ${theme.FONT_WEIGHT.M};
  font-size: ${theme.FONT_SIZE.S}px;
  color: ${theme.colors.dark};
`
