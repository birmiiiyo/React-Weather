import styled from 'styled-components';
import {CENTER} from './../styles/themes'
import {IBodyProps,IContainerProps} from './types'

export const Background = styled.div<IBodyProps>`
width:100%;
height:100vh;
background-image: url(${({bodyImage}) => bodyImage});
background-repeat: no-repeat; 
background-size: cover;
transition: background-image 500ms linear;
position:relative;
${CENTER}
`;

export const Container = styled.div<IContainerProps>`
position:relative;
width:90vw;
height:80vh;
background-image: url(${({image}) => image});
background-repeat: no-repeat; 
background-size: cover;
opacity:.8;
`;
