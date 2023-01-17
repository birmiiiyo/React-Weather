import styled from 'styled-components';
import {CENTER} from '@styles/themes'
import {IContainerProps} from './types'

export const Center = styled.div`
${CENTER}
`;

export const InfoContainer = styled.div`
display:flex;
justify-content:space-between;
margin:30px;
`;


export const Background = styled.div<IContainerProps>`
width:100%;
height:100vh;
background-image: url(${({image}) => image});
background-repeat: no-repeat; 
background-size: cover;
position:relative;
${CENTER}
`;

export const Container = styled.div`
position:relative;
background:white;
width:90vw;
height:80vh;
opacity:.75;
`;

export const Title = styled.h1`
font-size:34px;
font-weight:400;
color:black
`