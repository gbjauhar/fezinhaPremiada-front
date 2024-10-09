import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  border: 1px solid #ECEFFA;
  @media (max-width: 1024px){
width: 20.43506rem;
  }
`

export const Dozens = styled.div`
  display: flex;
    align-items: center;
    justify-content: space-around;
   gap: 1vw;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  background-color: white;
  border-radius: 0.5em;
  border-top-left-radius: 0;

  padding: 1vh;

  border-top-width: 0;
`

export const DozenContainer = styled.div`
width: 3.49656rem;
  height: 3.49656rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background:  linear-gradient(180deg, #F2CF63 0%, #593B02 100%);
  border: 2px solid #E5C87D;

`;

export const Dozen = styled.p`
color: white;
 font-weight: 700;
 font-size: 1.27244rem;
 `;