import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99vw;
  gap: 2vh;
  margin-bottom: 3vh;
  margin-top: 20vh;
`

export const TitleContainer = styled.div`
  width:20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3vh;
  @media (max-width: 500px) {
    width: 60%;
  }
  @media (min-width: 500px) and (max-width: 800px) {
    width: 40%;
  }
`

export const Input = styled.input`
  width:40%;
  height: 6vh;
  color: #8690B5;
  background-color: #F7F8FF;
  border: 1px solid #E7E5FF;
  border-radius: 0.5em;
  padding: 1vw;
  @media (max-width: 800px) {
    width: 90%;
    padding: 3vw;
  }

`

export const Button = styled.button`
  width: 40%;
  height: 6vh;
  background-color: #FFCE36;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 700;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 90%;
  }
`

export const Image = styled.img`
  width: 30%;
  height: 30%;
`

export const Title = styled.h1`
  font-size: 1em;
  font-weight: 700;
  color: #2D3142;
`

export const Subtitle = styled.h2`
  font-size:1em;
  color: gray;
  color: #8690B5;
`

export const StyledLink = styled.p`
  cursor: pointer;
  color: #1573FF;
`
export const StyledErroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  @media (max-width: 800px) {
    width: 90%;
  }
`
export const StyledError = styled.p`
  font-size: 0.9em;
  color: red;
  text-align: left;
`

export const LinkDiv = styled.div`
  display: flex;
  gap: 0.5vw;
`
