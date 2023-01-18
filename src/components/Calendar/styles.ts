import styled from 'styled-components'
import { theme } from '@styles/themes'
import { devices } from '@styles/breakpoints'

export const List = styled.ul`
  font-size: ${theme.FONT_SIZE.S}px;
  font-weight: ${theme.FONT_WEIGHT.L};
  margin: ${theme.RANGE.S}px ${theme.RANGE.M}px;
  height: 150px;
  @media ${devices.tablet} {
    margin: auto;
  }
`

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

export const InfoText = styled.h1`
  font-size: ${theme.FONT_SIZE.M}px;
  font-weight: ${theme.FONT_WEIGHT.M};
  color: ${theme.colors.dark};
`
