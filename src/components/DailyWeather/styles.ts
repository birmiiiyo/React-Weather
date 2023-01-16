import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
`;


export const List = styled.ul`
display:flex;
justify-content: space-between;
align-items:center;
`
export const Value = styled.li`
width:200px;
list-style-type: none;
padding: 10px;
border: 1px solid white;
border-radius:10px;
margin:5px;
display:flex;
flex-direction:column;
`

export const Button = styled.button`
width:40px;
padding:5px;
margin:5px;
color:black;
border:none;
border-radius:5px;
font-size:16px;
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  padding-left:10px;
`

export const Day = styled.div`
display:flex;
border-bottom: 1px white solid;
padding-bottom:3px;
margin-bottom:3px;
justify-content:flex-start;
align-items:center;
font-size:24px;
`
export const Params = styled.div`

`