import styled from "styled-components";

export default function Button({content}) {
  return <StyledButton>{content}</StyledButton>
}

const StyledButton = styled.button`
   background: linear-gradient(to right, rgb(57, 4, 121));
   text-transform: uppercase;
   letter-spacing: 0.2rem;
   height: 3rem;
   width: 65%;
   border: none;
   color: black;
   border-radius: 2rem;
   cursor: pointer;
`;