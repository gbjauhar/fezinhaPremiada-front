import { Columns, Container, Content, IconContainer, Image, Info, InfoColumn, InfoContainer, InfoLink, InfoTitle, InfoWarning, Options } from "./style"
import logo from "../../assets/images/logo.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagram.svg"
import telegram from "../../assets/images/telegram.svg"
export const Footer = () => {
  return(
    <Container>
      <Content>
        <img src={logo} width={150}/>
        <IconContainer>
          <Image src={facebook}/>
          <Image src={instagram} />
          <Image src={telegram} />
        </IconContainer>
        <Columns>
          <Options>
            <InfoTitle>Regulamentação</InfoTitle>
            <InfoColumn>
              <Info>Termos de Uso</Info>
              <Info>Política de Cookies</Info>
              <Info>Política de Privacidade</Info>
            </InfoColumn>
          </Options>
          <Options>
            <InfoTitle>Sobre nós</InfoTitle>
            <InfoColumn>
              <Info>Sobre a Fezinha Premiada</Info>
              <Info>Programa de Afiliação</Info>
              <Info>Entre em contato</Info>
              <Info>RSS</Info>
            </InfoColumn>
          </Options>
          <Options>
            <InfoTitle>Informações</InfoTitle>
            <InfoColumn>
              <Info>Transação Bancária</Info>
              <Info>FAQ</Info>
              <Info>Impostos Loteria</Info>
            </InfoColumn>
          </Options>
        </Columns>
        <InfoContainer>
          <InfoWarning>
            Este site é operado pela Fezinha Premiada, uma empresa registrada em São Paulo 
            (número de registro: C77583) com sede registrada em Endereço. 
            Número de telefone: +51 11 9999 9999. A Fezinha Premiada é licenciada e regulada pela Autoridade de 
            Jogos de São Paulo (Licença: MGA/CRP/402/2017 emitida em 01/08/2023).
          </InfoWarning>
          <InfoWarning>
            A Fezinha Premiada e suas marcas associadas operam como um serviço independente de compra de bilhetes 
            de loteria e não são associadas nem endossadas pela MUSL, Française des Jeux ou Loterías y Apuestas 
            del Estado, nem por qualquer empresa que administre qualquer produto para o qual seus serviços sejam 
            empregados.
          </InfoWarning>
          <InfoLink href="https://www.thelotter.com/pt/jogo-responsavel/">
            Apostar em jogos de azar pode ser prejudicial, se não for feito de forma controlada. Jogue com 
            responsabilidade.
          </InfoLink>
        </InfoContainer>
      </Content>
    </Container>
  )
}