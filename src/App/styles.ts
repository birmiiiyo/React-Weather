import styled from 'styled-components'
import { CENTER, theme, COLUMN } from '@styles/themes'
import { IContainerProps } from './types'

export const Center = styled.div`
  ${CENTER}
`

export const InfoContainer = styled.div`
  ${CENTER};
  margin: ${theme.RANGE.L};
`

export const Background = styled.div<IContainerProps>`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  ${CENTER}
`

export const Container = styled.div`
  background: ${theme.colors.white};
  width: 90vw;
  height: 80vh;
  opacity: 0.75;
  ${COLUMN}
`

export const Title = styled.h1`
  font-size: ${theme.FONT_SIZE.L}px;
  font-weight: ${theme.FONT_WEIGHT.S};
  color: ${theme.colors.dark};
`
