import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  height: 100%;
  background-color: white;
  border-bottom-width: 0;
  border-radius: 0.5em;
`;

export const LuckyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vh;
  width: 45%;
  gap: 1vh;
  z-index: 2;
`;

export const LuckyNumber = styled.p`
  font-weight: 700;
  font-size: 1em;
  color: #2D3142;
`
export const LuckyLabel = styled.p`
  font-family: 'Nunito sans', sans-serif;
  color: #8690B5;
  font-size: 0.7em;
`;

export const ChanceContainer = styled.div`
  width: 55%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background-color: #FFCE36;
  height: 30%;
  padding: 2vh;
  border-top-right-radius: 0.5em;
`;

export const ChanceNumber = styled.p`
  display: flex; 
  gap: 0.2vw;
  color: #2D3142;
  font-size: 0.9em;
  top: 2;

  z-index: 2;
`;

export const ChanceValue = styled.span`
  color: #2D3142;
  font-weight: 700;
  font-size: 1em;
`;