import styled from 'styled-components'

import { theme, COLUMN } from '@styles/themes'

export const Wrapper = styled.div`
  ${COLUMN}
  color: ${theme.colors.dark};
`
export const Time = styled.div`
  font-size: ${theme.FONT_SIZE.XL}px;
  color:inherit;
  }
`

export const DateInfo = styled.div`
  font-size: ${theme.FONT_SIZE.XL}px;
  color: inherit;
`
