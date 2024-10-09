import { styled } from "styled-components";
import { FiShoppingCart } from "react-icons/fi"

interface Props {
  open: boolean
}

interface ImgProps {
  isLogin?: boolean
}
export const Container = styled.div`
 @media (max-width: 870px) {
  width: 99vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  
`

export const IconStyled = styled(FiShoppingCart)`
  display: none;
  @media (max-width: 325px){
    right: -45vw;
    display: flex;
    position: relative;
  }
  @media (min-width: 325px) and (max-width: 870px){
    display: flex;
    right: -40vw;
    position: relative;
  }
`
export const StyledBurger = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  right: 0vw;

  z-index: 20;
  display: none;
  position: relative;
  @media (max-width: 352px){
    right: -7vw;
  }
  @media (max-width: 870px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: gray;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Image = styled.img<ImgProps>`
  width: 15%;
  height: 15%;
  right: ${props => props.isLogin ? '-22vw' : '-40vw'};
  position: relative;
  @media (max-width: 325px){
    right: ${props => props.isLogin ? '-27vw' : '-40vw'};
  }
    @media (min-width: 870px) {
    display: none;
  }
`
