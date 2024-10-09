import { useContext, useState } from "react";
import RightNav from "../Nav/index";
import { Container, IconStyled, Image, StyledBurger } from "./style";
import logo from "../../assets/images/logoImg.svg"
import { AuthContext } from "../../context/AuthContext";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(AuthContext)
  return (
    <Container>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Image src={logo} isLogin={!!context?.user}/>
      {context?.user ?
        <IconStyled size={30} />
        : <></>
      }
      <RightNav open={open} />
    </Container>
  );
};

export default Burger;