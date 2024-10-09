import { styled } from "styled-components";
import BackGroundImg from "../../assets/images/Mask_group.svg"


interface HomeProps {
  status?: boolean;
}

export const PrizesContainer = styled.div`
  display: flex;
  width: 80vw;
  height: 20.75rem;
  background-color: #FFCE36;
  background-image: url(${BackGroundImg}); 
  background-size: cover; 
  border-radius: 28px;
  position: relative;
  align-items: center;
  margin-bottom: 8rem;
  @media (max-width: 325px){
    width: 99vw;
    margin-left: 5vw;
    height: 8.5rem;
    border-radius: 0.47063rem;
    margin-bottom: 5rem;
    padding: 0 6vw;
    gap: 2vw;
  }
  @media (min-width: 325px) and (max-width: 500px){
    width: 21.5rem;
    height: 8.5rem;
    border-radius: 0.47063rem;
    margin-bottom: 5rem;
    justify-content: space-evenly;
    padding: 0 0.5rem;

  }
  @media (min-width: 500px)and (max-width:1200px){
    width: 90vw;
    height: 30vh;
    justify-content: space-evenly;
  }
`;

export const HowWorksContainer = styled.div`
  width: 76rem;
  height: 32rem;
  margin-top: 12.26rem;
  @media (max-width: 500px){
    width: 99vw;
    padding: 1rem;
    height: 15rem;
    margin-top: 5rem;
  }
  @media (min-width: 800px)and (max-width:1200px){
    width: 90vw;
  }
  @media (min-width: 500px)and (max-width:800px){
    width: 80vw;
    height: 45vw;
  }
`

export const IndicationContainer = styled.div`
  display: flex;
  background: linear-gradient(225deg, #1EB26E 0%, #FFCE36 100%);
  width: 99vw;
  height: 33.625rem;
  margin-top: 12.26rem;
  margin-bottom: 4rem;
  @media (max-width: 325px){
    overflow: hidden;
    padding-left: 6.5vw;
    width: 110vw;
    height: 47.5625rem;
    margin-top: 70vh;
  }
  @media (min-width: 325px) and (max-width: 500px){
    width: 99vw;
    height: 47.5625rem;
    margin-top: 70vh;
  }
  @media (min-width: 500px)and (max-width:800px){
    height: 45rem;
    width:99vw;
    margin-top: 40rem;
    margin-bottom: 10vh;
  }
  @media (min-width: 800px)and (max-width:1200px){
    width: 99vw;
    height: 35rem;
    padding-left: 8vw;
    padding-right: 2vw;
  }
`

export const IndicationTitle = styled.text`
  font-family: "Nunito Sans";
  font-size: 64px;
  margin-top: 1.5rem;
  color: white;
  margin-left: -5rem;
  @media (max-width: 500px){
    font-size: 2rem;
    margin-left: 0;
  }
  @media (min-width: 500px)and (max-width:800px){
    font-size: 2rem;
    margin-left: -5rem;
  }
  @media (min-width: 800px)and (max-width:1200px){
    font-size: 3rem;
    margin-left: -5rem;
  }
`

export const IndicationImgContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: -10rem;
  margin-left: -5rem;
  @media (max-width: 500px){
    margin-top: 0;
    margin-left: 0;
  }
  @media (min-width: 500px) and (max-width: 800px){
    margin-top: 1rem;
  }
  
`

export const IndicationImgStyled = styled.img`
  width:23rem;
  height:22.5rem;
  @media (max-width: 500px){
    width: 15.94381rem;
    height: 15.59075rem;
  }
  @media (min-width: 500px) and (max-width: 800px){
    width: 17rem;
    height: 17rem;
  }
  @media (min-width: 800px)and (max-width:1200px){
    width: 22rem;
    height: 22rem;
  }
`

export const IndicationImgInsideStyled = styled.img`

  @media (max-width: 500px){
    width: 13.52419rem;
    height: 12.28544rem;
  }
  @media (min-width: 500px) and (max-width: 800px){
    width: 16rem;
    height: 14rem;
  }
`
export const IndicationCount = styled.div`
  width: 30.5rem;
  height: 21.125rem;
  border-radius: 28px;
  background: var(--white, #FFF);
  padding-top: 2rem;
  @media (max-width: 325px){
    width: 19.5rem;
  }
  @media (min-width: 325px) and (max-width: 500px){
    width: 20.4375rem;
    height: 18.1875rem;
  }
  @media (min-width: 500px) and (max-width: 800px){
    width: 30rem;
    height: 15rem;
  }
  @media (min-width: 800px)and (max-width:1200px){
    width: 25rem;
    height: 20rem;
  }
`

export const PrincipalImg = styled.img`
  display: flex;
  width: 26.625rem;
  height: 26.625rem;
  z-index: 10;
   @media (max-width: 500px){
    width: 7.15988rem;
    height: 7.15988rem;
  }
  @media (min-width: 500px)and (max-width:1200px){
    width: 35vw;
    height: 35vw;
  }
`
export const TextLink = styled.text`
  font-family: "Nunito Sans";
  font-size: 19px;
  color: #1573FF;
  text-decoration-line: underline;
  cursor: pointer;
  @media (max-width: 500px){
    font-size: 0.5545rem;
  }
`
export const WinnersBox = styled.div`
  width: 30rem;
  height: 25.938rem;
  border-radius: 28px;
  background: var(--white, #FFF);
  box-shadow: 0px 30px 40px 0px rgba(148, 146, 244, 0.20);
  margin-top: 2rem;
  @media (max-width: 325px){
    width: 18.5rem;
    height: 25.9375rem;
    overflow-y: scroll;
  }
  @media (min-width: 325px) and (max-width: 500px){
    width: 90vw;
    height: 25.9375rem;
    overflow-y: scroll;
  }
  @media (min-width: 500px)and (max-width:1200px){
    margin-left: 5vw;
    width: 80vw;
    min-height:25.938rem;
  }
`

export const OptionBox = styled.div`
  width: 8.25rem;
  height: 2.438rem;
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid var(--texts, #8690B5);
  cursor: pointer;
  @media (max-width: 500px){
    width: 3.85rem;
    height: 1.15rem;
    font-size: 0.49613rem;
  }
  @media (min-width: 500px)and (max-width:1200px){
    width: 8.5vw;
    height:3.11vh;
    font-size: 1.5vw;
  }
`




export const ArrowCard = styled.img`
  @media (max-width: 500px){
    width: 0.35019rem;
    height: 0.40856rem;
  }
  @media (min-width: 500px)and (max-width:1200px){
    width: 1.26vw;
  height: 0.76vh;
  }
`

export const YellowArrow = styled.img`
  @media (max-width: 500px){
    width: 2.24638rem;
    height: 1.00063rem;
  }
`

export const GreyText = styled.text`
  font-size:'24px';
  font-family: "Nunito Sans";
  color:#8690B5;
  @media (max-width: 500px){
    font-size: 0.70044rem;
  }
`
export const CardImgStyled = styled.img`
  margin-bottom: 2rem;
  @media (max-width: 500px){
    width: 5.49569rem;
    height: 5.98288rem;
  }
`
export const Winner = styled.div`
  display: flex;
  align-items: flex-start;
  height: 4.713rem;
  border-bottom: 1px solid #ECEFFA;
  margin-top: 1.5rem;
  gap:2rem;
`

export const WinnersList = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  padding-left: 2rem;
`

export const RowColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PrizeText = styled.text`
  font-family: "Nunito Sans";
  font-size: 3.375rem;
  @media (max-width: 500px){
    font-size: 1.5rem;
  }
  @media (min-width: 500px)and (max-width:1200px){
    font-size: 2rem;
  }
`

export const Row = styled.div`
  display: flex;
`
export const BigChoosePrizeContainer = styled.div<HomeProps>`
  display: flex;
  flex-direction: column;
  width: 19.68rem;
  height: 15.5rem;
  border-radius: 14px;
  background-color: ${props => props.status ? '#F24C27' : '#FFCE36'};
  margin-top: 1.5rem;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 325px){
    margin-left: 5vw;
  }
`
export const WinnersText = styled.text`
font-size: 32px;
font-weight: bold;
@media (max-width:900px){
  font-size: 20px ;
}
`

export const Options = styled.div`
  display: flex;
  @media (max-width: 800px){
    flex-direction: column;
  }
`


export const ChoosePrizeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 19.68rem;
  height: 13.31rem;
  background-color: white;
  gap: 1rem;
  border-radius: 14px;
  border: 1px solid #E7E5FF;
`
export const ChoosePrizeText = styled.text`
  color: #8690B5;
  font-size: 14px;
  font-family: 'Nunito Sans';
`
export const ChoosePrizeBigText = styled.text<HomeProps>`
  color: ${props => props.status ? 'white' : '#2D3142'};
  font-weight: 700;
  font-size: 16px;
  font-family: 'Nunito Sans';
`
