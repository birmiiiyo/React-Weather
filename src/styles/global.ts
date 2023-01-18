import { createGlobalStyle } from 'styled-components'

import { theme } from './themes'

export default createGlobalStyle`
  * {
    margin: ${theme.RANGE.NONE};
    padding: ${theme.RANGE.NONE};
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Sofia Sans Condensed', sans-serif;
    color:${theme.colors.white};
    font-size: ${theme.FONT_SIZE.S}px;
    font-weight: ${theme.FONT_WEIGHT.S};
  }
`
