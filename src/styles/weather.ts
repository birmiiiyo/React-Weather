import styled from 'styled-components'

import { devices } from './breakpoints'
import { COLUMN, SPACE_BETWEEN, theme } from './themes'

export const Container = styled.div`
  ${COLUMN}
  min-height:240px;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${devices.laptop} {
    flex-wrap: wrap;
  }
`

export const Value = styled.li`
  width: 200px;
  list-style-type: none;
  padding: ${theme.RANGE.S}px;
  border-radius: ${theme.BORDER_RADIUS.L}px;
  margin: ${theme.RANGE.XS}px;
  background-color: ${theme.colors.white};
  ${COLUMN}
`

export const Button = styled.button`
  padding: ${theme.RANGE.S}px;
  margin: ${theme.RANGE.XS}px;
  color: ${theme.colors.dark};
  border: none;
  border-radius: ${theme.BORDER_RADIUS.S}px;
  font-size: ${theme.FONT_SIZE.S}px;
`

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`

export const Day = styled.div`
  ${SPACE_BETWEEN}
  border-bottom: 1px ${theme.colors.dark} solid;
  padding-bottom: ${theme.RANGE.XS}px;
  margin-bottom: ${theme.RANGE.XS}px;
  font-size: ${theme.FONT_SIZE.L}px;
  color: ${theme.colors.dark};
`

export const Params = styled.div`
  color: ${theme.colors.dark};
  font-size: ${theme.FONT_SIZE.S}px;
  font-weight: ${theme.FONT_WEIGHT.M};
`

export const TimeOfDay = styled.div`
  font-style: italic;
`
