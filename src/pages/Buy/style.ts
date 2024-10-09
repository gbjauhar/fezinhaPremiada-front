import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20vh 8vw;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  margin-top: 4vh;
  margin-bottom: 20vh;
`

export const PageTitle = styled.h1`
  color: #2D3142;
  font-weight: 700;
  font-size: 1.5em;
  text-align: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3vh;
  width: 100%;
`

export const HeaderContainer = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: red;
 height: 14vh;
  border-radius: 0.5em;
  color: white;
  padding: 0 4vw;
`

export const HeaderDate = styled.p`
  font-size: 0.8em;
  font-weight: 700;
`
export const HeaderPrice = styled.p`
  font-size: 1.4em;
  
`
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftButtons = styled(ButtonContainer)`
  width: 40%;
`

export const FooterContainer = styled(ButtonContainer)`
  background-color: #ECEFFA;
  padding: 3vh;
  border-radius: 0.5em;
`

export const Button = styled.button`
  width: 16vw;
  height: 6vh;
  border-radius: 0.5em;
  border: 1px solid ${props => props.disabled ? 'none' : '#FFCE36'};
  background-color: ${props => props.disabled ? '#FFCE36' : 'white'};
  color: ${props => props.disabled ? '#2D3142' : '#FFCE36'};
  font-size: 0.9em;
  font-weight: 700;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`

export const SmallButton = styled(Button)`
  width: 10vw;
  height: 5vh;
  color: #8690B5;
  border: 1px solid #8690B5;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GreenButton = styled(Button)`
  width: 16vw;
  background-color: #1EB26E;
  color: white;
  border: none;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`
export const Value = styled.p`
  color: #8690B5;
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
  width: 100%;
  height: 100%;
  gap: 0.2rem;
  @media (max-width: 1024px) {
    overflow-x: scroll;
    flex-wrap: nowrap;
  }
`

export const Image = styled.img`
  display: flex;
  z-index:10;
  width: 10%;
  margin-bottom: 3em;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  font-weight: 700;
`