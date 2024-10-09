import { styled } from "styled-components";

export const Title = styled.h1`
  color: #22C55E;
  text-align: center;
  font-family: Nunito Sans;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 11rem;
`

export const Subtitle = styled.p`
  color: #1E293B;
  text-align: center;
  font-family: Nunito Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 70%;
  @media (max-width: 780px){
    width: 80%;
  }
`

export const Button = styled.button`
  width: 14.3125rem;
  height: 4.0625rem;
  border-radius: 0.875rem;
  background: #22C55E;
  color: #FFF;
  text-align: center;
  font-family: Nunito Sans;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  @media (max-width: 780px){
    width: 11.25rem;
    height: 3.375rem;
    font-size: 1rem;
  }
`