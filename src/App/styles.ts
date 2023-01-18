import styled from 'styled-components'
import { CENTER, theme, COLUMN } from '@styles/themes'
import { IContainerProps } from './types'
import { devices } from '@styles/breakpoints'

export const Center = styled.div`
  ${CENTER}
`

export const InfoContainer = styled.div`
  ${CENTER};
  margin: ${theme.RANGE.L};
`

export const Background = styled.div<IContainerProps>`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  ${CENTER}
`

export const Container = styled.div`
  background: ${theme.colors.white};
  width: 90vw;
  opacity: 0.75;
  ${COLUMN}
  @media ${devices.laptop} {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: ${theme.FONT_SIZE.L}px;
  font-weight: ${theme.FONT_WEIGHT.S};
  color: ${theme.colors.dark};
`
