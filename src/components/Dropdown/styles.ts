import styled from 'styled-components'

import { theme } from 'styles/themes'

export const List = styled.ul`
  position: absolute;
  width: 200px;
  top: 45px;
  background-color: ${theme.colors.white};
  padding: ${theme.RANGE.XS}px;
`

export const Item = styled.li`
  list-style-type: none;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  cursor: pointer;
  padding: ${theme.RANGE.XS};
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
  }
`
