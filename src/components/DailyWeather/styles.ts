import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
`;

export const Title = styled.div`
font-size:24px;
font-weight:600;
padding: 10px;
`
export const List = styled.ul`
display:flex;
justify-content: space-between;
align-items:center;
`
export const Value = styled.li`
list-style-type: none;
padding: 10px;
border: 1px solid black;
margin:5px;
`

export const Button = styled.button`
width:40px;
padding:5px;
margin:5px;
color:black;
background-color:orange;
font-size:16px;
`;