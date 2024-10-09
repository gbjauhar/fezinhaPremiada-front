import { styled } from "styled-components";

export const Container = styled.div`
  width: 98vw;
  position: fixed;
  z-index: 40;
  background-color: rgba(250, 250, 250, 1);
  margin-bottom: 90vh;
`
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25%;
  height: 5em;
  padding: 7vh 4vw;
  position: relative;
`

export const LeftSide = styled.div`
  display: flex;
  width: 56%;
  justify-content: space-around;
  align-items: center;
`

export const RightSide = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  right: 4vw;
  @media (max-width: 870px){
    display: none;
  }
`

export const Image = styled.img`
  width: 20%;
  height: 20%;
    @media (max-width: 870px) {
    display: none;
  }
`

export const Button = styled.button`
  background-color: white;
  width: 11vw;
  height: 5vh;
  border: 0.1em solid #2D3142;
  border-radius: 0.4em;
  position: absolute;
  right: 0;
  cursor: pointer;
`

export const YellowButton = styled.button`
  width: 6rem;
  height: 2rem;
  border-radius: 0.4375rem;
  background:  #FFCE36;
  color: #2D3142;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
