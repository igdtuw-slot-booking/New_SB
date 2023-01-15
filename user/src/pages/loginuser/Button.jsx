import styled from "styled-components";

export default function Button({type, content}) {
  return <Styledbutton type={type}>{content}</Styledbutton>
}

const Styledbutton = styled.button`
   background:#24014E;
   color:white;
   text-transform: uppercase;
   letter-spacing: 0.2rem;
   height: 3rem;
   width: 65%;
   border-radius: 2rem;
   cursor: pointer;
`;