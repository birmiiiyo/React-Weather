import styled from 'styled-components';

export const Container = styled.div`{
    position:absolute;
    bottom: 0;
    background-color: #302b2b;
    height: 250px;
    width:100%;
    padding:10px;
}`

export const Button = styled.button`
    color:black;
    background-color:white;
    border:none;
    border-radius:5px;
    padding:8px;
    margin:10px;
    cursor:pointer;
    &:disabled{
        background-color:red;
        cursor:no-drop;
    }
`