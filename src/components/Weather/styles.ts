import styled from 'styled-components'

import { theme } from '@styles/themes'

export const Container = styled.div`
   {
    background-color: ${theme.colors.dark};
    height: 250px;
    width: 100%;
    padding: ${theme.RANGE.S}px;
  }
`

export const Button = styled.button`
  color: ${theme.colors.dark};
  background-color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.BORDER_RADIUS.S}px;
  padding: ${theme.RANGE.S}px;
  margin: ${theme.RANGE.XS}px;
  cursor: pointer;
  &:disabled {
    background-color: ${theme.colors.grey};
    cursor: no-drop;
  }
`
