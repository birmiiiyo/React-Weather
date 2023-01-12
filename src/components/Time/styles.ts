import styled, { css } from 'styled-components'

const TEXT_SHADOW = css`
  text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
`
const WEIGHT = '700'
const WIDTH = '100'

export const Wrapper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;

`
export const TimeItem = styled.div`
  display: flex;
  justify-content: start;
  gap: 3px;
  font-weight: ${WEIGHT};
  ${TEXT_SHADOW};
`

export const Time = styled.div`
  font-size: 24px;

  }
`
export const DayPart = styled.span`
  align-self: flex-end;
  padding-bottom: 10px;
  font-size: 20px;
`

export const DayInfo = styled.div`
  font-size: 20px;
  ${TEXT_SHADOW};
`