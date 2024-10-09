/* eslint-disable no-unsafe-optional-chaining */
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import backgroundImg from "../../assets/images/EuroMillionsEllipse.svg"
import Title from "../../components/Title"
import {
  Button,
  ButtonContainer,
  Column,
  Container,
  FooterContainer,
  GreenButton,
  HeaderContainer,
  HeaderDate,
  HeaderPrice,
  Image,
  LeftButtons,
  PageTitle,
  SmallButton,
  TitleContainer,
  TitlesContainer,
  Total,
  Value
} from "./style"
import { useContext, useEffect, useState } from "react"
import { getTitles } from "../../services/titles"
import { getRandomElementsFromArray } from "../../utils/getRandomFromArray"
import { getSum } from "../../utils/titleSum"
import { formatPrice } from "../../utils/formatValue"
import { AuthContext, TitleInterface } from "../../context/AuthContext"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { MdChangeCircle } from "react-icons/md"
import SignupModal from "../../components/SignupModal"
import { shouldLogoutUser } from "../../utils/logginOut"

const Buy = () => {

  const [titles, setTitles] = useState<TitleInterface[]>([])
  const [random, setRandom] = useState<TitleInterface[]>([])
  const [single, setSingle] = useState(false)
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(context)
  useEffect(() => {
    if(!context?.user) {
      navigate("/login")
    }
    async function fetchData(){
      await getTitles()
      .then(res => {
        console.log(res)
        setTitles(res)
        const data = getRandomElementsFromArray(res, 4)
        setRandom(data)
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

  const changeTitles = (howMany: number) => {
    const data = getRandomElementsFromArray(titles, howMany)
    setRandom(data)
  }

  const buyTitles = () => {
    if(!context?.user){
      navigate("/login")
    }
    if(!context?.cart){
      context?.setCart([random])
    } else {
      if(!context?.cart.includes(random)){
        context?.setCart([...context?.cart, random])
    }
  }
}

  return(
    <>
      <SignupModal />
      <Header />
      <Container>
        <PageTitle>Jogue no Euro Millions Spain</PageTitle>
        <TitleContainer>
          <HeaderContainer>
            <Image src={backgroundImg}/>
            <HeaderPrice>R$ <span style={{ fontWeight: 700, fontSize:'1.8em' }}>100</span> mil</HeaderPrice>
            <HeaderDate>1 DIA 39439</HeaderDate>
          </HeaderContainer>
          <ButtonContainer>
            <LeftButtons>
              <Button disabled={single} onClick={() => {
                setSingle(true)
                changeTitles(1)
              }}>Cartelas avulsas</Button>
              <Button disabled={!single} onClick={() => {
                setSingle(false)
                changeTitles(4)
              }}>Cartelas em lote</Button>
            </LeftButtons>
            <SmallButton onClick={() => changeTitles(single ? 1 : 4)}>
              <MdChangeCircle size={20} />Trocar</SmallButton>
          </ButtonContainer>
          <p>Selecione suas cartelas</p>
          <TitlesContainer>
            {random?.map(title => (
              <Title
                key={title.id}
                name={title.name}
                price={title.value}
                chance={title.chances}
                dozens={title.dozens}
              />
            ))}
          </TitlesContainer>
          <FooterContainer>
            <Column>
              <Value>Preço do bilhete</Value>
              <Total>Total</Total>
            </Column>
            <Column>
              <Value>{formatPrice(random[0]?.value)}</Value>
              <Total>{getSum(random)}</Total>
            </Column>
            <div style={{display: 'flex', alignItems: 'center', gap: '2vw'}}>
              {context?.cart ? <div onClick={() => navigate("/cart")} style={{ display: 'flex', alignItems: 'center', gap: '1vw', cursor: 'pointer', fontWeight: 700 }}>
                <AiOutlineShoppingCart size={20} /> Ver carrinho
              </div> : <></>}
              
              <GreenButton onClick={buyTitles}>Comprar cartela</GreenButton>
            </div>
          </FooterContainer>
        </TitleContainer>
      </Container>
      <Footer /> 
    </>
  )
}

export default Buy