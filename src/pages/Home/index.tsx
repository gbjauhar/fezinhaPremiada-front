import {
  ArrowCard,
  BigChoosePrizeContainer,
  CardImgStyled,
  ChoosePrizeBigText,
  ChoosePrizeInfoContainer,
  ChoosePrizeText,
  GreyText,
  HowWorksContainer,
  IndicationContainer,
  IndicationCount,
  IndicationImgContainer,
  IndicationImgInsideStyled,
  IndicationImgStyled,
  IndicationTitle,
  OptionBox,
  Options,
  PrincipalImg,
  PrizeText,
  PrizesContainer,
  Row,
  RowColumn,
  TextLink,
  Winner,
  WinnersBox,
  WinnersList,
  WinnersText,
  YellowArrow,
} from "./style"
import PrizeImage from "../../assets/images/Illustration.svg"
import IndicationImg from "../../assets/images/Indication.svg"
import IndicationInsideImg from "../../assets/images/Indication-img.svg"
import EuroMillionsEllipse from "../../assets/images/EuroMillionsEllipse.svg"
import ArrowFoward from "../../assets/images/arrow.forward.svg"
import CardImg from "../../assets/images/PrizeCard.svg"
import ArrowLeft from "../../assets/images/Arrow-left-yellow.svg"
import PlayImg from "../../assets/images/play.svg"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useContext, useEffect, useState } from "react"
import { Editions, getDrawItems } from "../../services/editions"
import { formatPrice } from "../../utils/formatValue"
import { AuthContext } from "../../context/AuthContext"
import CountdownTimer from "../../components/Countdown"
import SignupModal from "../../components/SignupModal"
import noImage from "../../assets/images/icons8-sem-imagem-50.png"
import { getLatest } from "../../utils/getLatest"
import Slider from "../../components/Slider"
import { shouldLogoutUser } from "../../utils/logginOut"

const Home = () =>{
  const [editions, setEditions] = useState<Editions[]>([])
  const context = useContext(AuthContext)
  const [latest, setLatest] = useState<Editions | null>(null)
  const [numFriends, setNumFriends] = useState<number>(0);
  const earned = numFriends * 2
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    
    async function fetchData(){
      await getDrawItems()
      .then(async (res) => {
        console.log(res)
        setEditions(res.slice(0, 3))
        const getDate = await getLatest(res)
        setLatest(getDate)
      })
      .catch(err => console.log(err))
      
    }
    fetchData()
    if (shouldLogoutUser()) {
      context?.setUser(null)
      context?.setCart(null)
      context?.setToken(null)
      localStorage.removeItem("loginTime")
    }

  }, [])

  return (
    <>
      <SignupModal />
      <Header />
      <RowColumn style={{justifyContent:'center', marginTop: '10vh'}}>

        <PrizesContainer style={{marginTop: '8vh'}}>
          <PrincipalImg src={PrizeImage} />
          <RowColumn>
            <PrizeText style={{marginLeft: '5vw'}}>Concorra à<br/>
              <span style={{ fontWeight: "bold" }}>{formatPrice(latest?.value)} reais</span>
            </PrizeText>
            {latest ? 
              <CountdownTimer targetDate={latest?.edition.draw_date} />
            : <></>}
          </RowColumn>
        </PrizesContainer>

        <RowColumn style={{alignItems:'center'}}>
          <text style={{fontFamily:'Nunito Sans', fontSize:'32px'}}>
          Escolha seu sorteio
          </text>
          <Options style={{gap:'1.5rem'}}>
            {editions?.map(edition => (
              <BigChoosePrizeContainer key={edition?.id} status={finished}>

                <ChoosePrizeInfoContainer>
                  <img src={edition?.image ? edition?.image : noImage} style={{ objectFit: 'contain', width: '5rem', height: '5rem' }} />
                  <ChoosePrizeText>Prêmio</ChoosePrizeText>
                  {edition?.value ?
                  <ChoosePrizeBigText>R$ <span style={{ fontWeight: "bold", fontSize: '32px' }}>{edition?.value}</span></ChoosePrizeBigText>
                  :
                  <ChoosePrizeBigText>{edition?.name}</ChoosePrizeBigText>
                  }
                  <ChoosePrizeText>Custo: <span style={{ fontWeight: 'bold' }}>{formatPrice(edition?.edition?.titles[0]?.value)}</span></ChoosePrizeText>
                </ChoosePrizeInfoContainer>
                <ChoosePrizeBigText status={finished}><CountdownTimer setFinished={setFinished} targetDate={edition?.edition?.draw_date}/></ChoosePrizeBigText>
              </BigChoosePrizeContainer>
            ))} 
          </Options>
        </RowColumn>

        <HowWorksContainer>
          <Row style={{justifyContent:'space-between'}}>
            <PrizeText style={{fontSize:'32px', fontWeight:'bold'}}>Como funciona?</PrizeText>
            <TextLink>Ler mais</TextLink>
          </Row>
          <Options style={{justifyContent:'space-between', marginTop:'2rem'}}>
            <RowColumn style={{ justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <Row style={{gap:'0.5rem'}}>
                <OptionBox style={{backgroundColor:'#FFCE36', border:'inherit'}}>Escolha <ArrowCard src={ArrowFoward}/>   </OptionBox>
                <OptionBox>Compre<ArrowCard src={ArrowFoward}/>   </OptionBox>
                <OptionBox>Veja<ArrowCard src={ArrowFoward}/>   </OptionBox>
                <OptionBox>Ganhe<ArrowCard src={ArrowFoward}/>   </OptionBox>
              </Row>
              <Row style={{gap:'4rem', alignItems:'center'}}>
                <CardImgStyled src={CardImg}/>
                <YellowArrow src={ArrowLeft} />
                <GreyText>Selecione QUALQUER uma<br/>
                  das maiores loterias do <br/>
                  mundo!</GreyText> 
              </Row>
              <Row style={{gap:'0.43vw', alignItems: 'center'}}><TextLink style={{alignItems:'center'}}>Assista a um curto vídeo </TextLink><ArrowCard src={PlayImg}/></Row>
            </RowColumn>
            <WinnersBox>
              <RowColumn>
                <Row style={{paddingTop:'0.5rem'}}> <WinnersText>Ganhadores</WinnersText></Row>
                <WinnersList>
                  <Winner>
                    <img src={EuroMillionsEllipse}style={{width:'3rem'}}/>
                    <RowColumn style={{alignItems:'flex-start'}}>
                      <PrizeText style={{fontSize:'19px', color:'#1EB26E', fontWeight:'700'}}>R$ 50 mil</PrizeText>
                      <PrizeText style={{fontSize:'16px', color:'#8690B5', fontWeight:'400'}}>Usuário teste</PrizeText>
                    </RowColumn>
                  </Winner>
                </WinnersList>
              </RowColumn>
            </WinnersBox>
          </Options> 
        </HowWorksContainer>
        
        <IndicationContainer>
          <Options style={{justifyContent:'space-around', alignItems: 'center', width:'100%'}}>
            <RowColumn style={{justifyContent:'center', alignItems: 'flex-start', padding: '0 4vw'}}>
              <IndicationImgContainer>
                <IndicationImgStyled src={IndicationImg} />
                <IndicationImgInsideStyled src={IndicationInsideImg} style={{position:'absolute'}} />
              </IndicationImgContainer>
              <IndicationTitle>Indique e ganhe</IndicationTitle>
              <IndicationTitle style={{ fontSize: '19px', color: 'white', marginTop: '0.5rem'}}>
                  Indique seu amigo e ganhe R$2,00<br/>
                  por cada indicado que comprar uma cartela
                  </IndicationTitle>
            </RowColumn>
            <IndicationCount>
              <RowColumn>
                <PrizeText style={{fontSize:'31px', color:'#2D3142'}}>Simule sua indicação</PrizeText>
                <IndicationTitle style={{width: '90%', fontSize:'19px', color:'#8690B5', marginTop:'1rem', marginLeft: 0}}>Indique seu amigo e ganhe R$2,00 por cada indicado que comprar uma cartela</IndicationTitle>
                <Slider numFriends={numFriends} setNumFriends={setNumFriends} />
                <PrizeText style={{fontSize:'28px', color:'#1EB26E', marginTop:'2rem', fontWeight:'bold'}}>Você ganha: {formatPrice(earned)}</PrizeText>
              </RowColumn>
            </IndicationCount>
          </Options>
        </IndicationContainer>
        <Footer />
      </RowColumn> 
    </>
  )
}

export default Home