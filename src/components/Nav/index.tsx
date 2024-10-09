import { Link } from "react-router-dom";
import { Button, LoginOut, Menu, Ul } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FiLogOut } from "react-icons/fi"

const RightNav = ({ open }: { open: boolean }) => {
  const context = useContext(AuthContext)

  const logOut = () => {
    context?.setUser(null)
    context?.setToken(null)
    context?.setCart(null)
    localStorage.removeItem("loginTime")
}
  return (
    <Ul open={open}>
      <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/">Home</Link>
      <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/titles">Sorteios</Link>
      <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/">Como funciona</Link>
      <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/">Suporte</Link>
      {context?.user ?
      <Menu>
        <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/">Minha conta</Link>
        <Button>Depositar</Button>
        <LoginOut onClick={logOut}
        >
          <FiLogOut />
          Sair
        </LoginOut>
      </Menu>
      :
      <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/login">Minha conta</Link>
      }
      
    </Ul>
  );
};

export default RightNav;