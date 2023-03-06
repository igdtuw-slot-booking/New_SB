import styled from "styled-components";

export default function Input({type,placeholder, required, value, onChange}){
  return <StyledInput type={type} placeholder={placeholder} required value={value} onChange={onChange}/>;
}
 
const StyledInput = styled.input`
      background: white;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border-radius: 2rem;
      width: 80%;
      height: 3rem;
      padding: 1rem;
      border: none;
      outline: none;
      margin-botton:0px;
      font-size: 1rem;
      font-weight: bold;
      &:focus(
        display:inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
      )
      &::placeholder(
        color:red;
        font-weight: 100;
        font-size: 1rem;
      )
    `;