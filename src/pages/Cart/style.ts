import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  margin-top: 20vh;
  margin-bottom: 20vh;
  box-sizing: border-box;
  padding: 0 8vw;
  @media (max-width: 768px){
    padding: 0;
  }
`

export const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5em;
  gap: 1vw;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3vh;
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ECEFFA;
  padding: 3vh;
  border-radius: 0.5em;
  @media (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    gap: 2vh;
  }
`

export const GreenButton = styled.button`
  height: 3.125rem;
  border-radius: 0.5em;
  font-size: 0.9em;
  font-weight: 700;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  width: 17.125rem;
  background-color: #1EB26E;
  color: white;
  border: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Row = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2vw;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Total = styled.p`
  color: #2D3142;
  font-weight: 700;
  font-size: 0.9em;
`

export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 1vh;
  @media (max-width: 768px){
    padding: 0 1.5rem;
    flex-wrap: nowrap;
    overflow: scroll;
    justify-content: initial;
  }
`

export const Input = styled.input`
  width: 10.1875rem;
  height: 3.125rem;
  text-align: center;
  border-radius: 0.4375rem;
  border: 1px solid #D2D0E5;
  background: #F7F8FF;
  @media (max-width: 768px) {
    width: 100%;
  }
`