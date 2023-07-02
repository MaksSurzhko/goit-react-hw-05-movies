import styled from "@emotion/styled"


export const ButtonBack = styled.button`
margin-top: 10px;
margin-bottom: 10px;
background-color: gray;
color: white;
width: 250px;
height: 35px;
border-radius: 2px;
&:hover {
    color: black;
    background-color: #b7b7bb;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px black;
    }
  }
`