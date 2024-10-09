import { styled } from "styled-components";

export const Container = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  padding: 5vh;
  
`

export const Columns = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-top: 5vh;
  @media (max-width: 500px){
    flex-direction: column;
    width: 100%;
    gap: 5vh;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  margin-top: 5vh;
`
export const InfoTitle = styled.h1`
  font-weight: 700;
`

export const Info = styled.p`
  color: #8690B5;
  cursor: pointer;
`
export const InfoWarning = styled.p`
  color: #8690B5;
  text-align: center;
`

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`

export const InfoLink = styled.a`
  color: #1573FF;
  cursor: pointer;
  @media (max-width: 500px){
    text-align: center;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 25%;
  cursor: pointer;
`