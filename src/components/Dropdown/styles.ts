import styled from 'styled-components';

export const List = styled.ul`
position: absolute;
width: 200px;
top: 45px;
background-color: white;
padding: 3px 3px;
`;

export const Item = styled.li`
list-style-type: none;
background-color: black;
color: white;
cursor: pointer;
  padding: 2px 4px;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`