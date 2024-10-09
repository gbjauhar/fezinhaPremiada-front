import { styled } from "styled-components";

interface Props {
  open: boolean
}

export const Ul = styled.ul<Props>`
  width: 80vw;
  padding: 25px 15px;
  gap: 5vw;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;
 
  li {
    padding: 20px 10px;
  }
  @media (min-width: 870px) {
  width: 100%;
  gap: 2vw;
}
  @media (max-width: 870px) {
    flex-flow: column nowrap;
    background-color: #E2E8F0;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)" )};
    top: 0;
    left: -80vw;
    height: 100vh;

    padding-top: 7rem;
    transition: transform 0.3s ease-in-out;
   

    li {
      color: #fff;
    }
  }
`;

export const Button = styled.button`
  width: 5.5rem;
  height: 2.375rem;
  border-radius: 0.25rem;
  background-color: #FFCE36;
  color:  #2D3142;
  font-size: 1rem;
  cursor: pointer;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vw;
  @media (min-width: 870px){
    display: none;
  }
`

export const LoginOut = styled.div`
  text-decoration: 'none';
  cursor: pointer; 
  color: #F00;
  display: flex;
  align-items: center;
  gap: 1vw;
  position: absolute;
  bottom: 5vh;
`