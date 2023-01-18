import styled from 'styled-components'
import { SPACE_BETWEEN, theme } from '@styles/themes'

export const InfoContainer = styled.div`
  ${SPACE_BETWEEN}
  margin:${theme.RANGE.M}px ${theme.RANGE.M}px;
`

export const Title = styled.h1`
  font-size: ${theme.FONT_SIZE.XL}px;
  font-weight: ${theme.FONT_WEIGHT.L};
  color: ${theme.colors.dark};
`
