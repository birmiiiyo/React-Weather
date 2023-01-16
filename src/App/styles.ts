import styled from 'styled-components';
import {CENTER} from '@styles/themes'
import {IContainerProps} from './types'
import background from '@assets/images/background.jpg'

export const Center = styled.div`
${CENTER}
`;

export const InfoContainer = styled.div`
display:flex;
justify-content:space-between;
margin:30px;
`;


export const Background = styled.div`
width:100%;
height:100vh;
background-image: url(${background});
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
opacity:.9;
`;
