import {
  Button,
  Container,
  HeaderContainer,
  Image,
  LeftSide,
  Menu,
  RightSide,
  YellowButton
} from "./style"
import logo from "../../assets/images/logo.svg"
import { IoWalletOutline, IoPersonOutline } from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi"
import Burguer from "../Burger/index"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { formatPrice } from "../../utils/formatValue"

export const Header = () => {
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  const dontShow = ["/login", "/signup", "/address"]

  return(
    <Container>
      <HeaderContainer>
        <LeftSide>
          <Image src={logo} />
          <Burguer />
        </LeftSide>
        {dontShow.includes(location.pathname) ? 
          <></>
          :
          <RightSide>
            {
              !context?.user
              ?
              <Button onClick={() => navigate("/login")}>Minha conta</Button>
              : 
              <>
                <Menu>
                  <IoWalletOutline size={20} color= {'#2D3142'} />
                  <p style={{color: '#2D3142', fontSize: '1rem', fontWeight: 600 }}>{formatPrice(context?.user?.value)}</p>
                </Menu>
                <YellowButton>Depositar</YellowButton>
                <FiShoppingCart  cursor={'pointer'} size={20} color= {'#2D3142'} onClick={() => navigate("/cart")} />
                <IoPersonOutline cursor={'pointer'} size={20} color= {'#2D3142'} onClick={() => navigate("/profile")} />
              </>
            }
            
          </RightSide>
        }
      </HeaderContainer>
    </Container>
  )
}