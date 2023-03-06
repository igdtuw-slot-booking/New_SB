import styled from "styled-components";

export default function Button({type, content}) {
  return <StyledButton type={type}>{content}</StyledButton>
}

const StyledButton = styled.button`
   background: #390479;
   text-transform: uppercase;
   letter-spacing: 0.2rem;
   height: 3rem;
   width: 65%;
   border: none;
   color: white;
   border-radius: 2rem;
   cursor: pointer;
`;