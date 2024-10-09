import { styled } from "styled-components"

export const CountDownContainer = styled.div`
  display: flex;
  width: 18.75rem;
  height: 6.8125rem;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.70);
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(12px);
  margin-top: 2rem;
  margin-left: 8vw;
  @media (max-width: 500px){
    width: 7rem;
    height: 2.25rem;
    margin-top: 0.4rem;
    border-radius: 8px;
  }
  @media (min-width: 500px)and (max-width:1200px){
    width: 25vw;
    height: 12vh;
  }
`
export const CountDown = styled.text`
  font-family: "Nunito Sans";
  font-size: 2rem;
  @media (max-width: 500px){
  font-size: 3vw;
  }
  @media (min-width: 500px)and (max-width:1200px){
    font-size: 3vw;
  }
`

export const CountDownSpan = styled.span`
  font-size: 1rem;
  @media (max-width: 500px){
    font-size: 0.5rem;
  }
  @media (min-width: 500px)and (max-width:1200px){
    font-size:1.5vw;
  }
`