import Modal from 'react-modal';
import { FiCheckCircle } from "react-icons/fi"
import { Button, Subtitle, Title } from './style';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import "./style.css";

const SignupModal = () => {
  const context = useContext(AuthContext)
  const show = !!(context?.user && !context?.user.address)
  const navigate = useNavigate()
  return (
    <Modal
      isOpen={show}
      className="Modal"
      overlayClassName="Overlay"
    >
      <FiCheckCircle size={'6.8125rem'} color={'#22C55E'} />
      <Title>Cadastrado com sucesso!</Title>
      <Subtitle>Para conseguir utilizar a plataforma e adquirir suas cartelas, precisamos completar seu cadastro</Subtitle>
      <Button onClick={() => navigate("/address")}>Finalizar cadastro</Button>
    </Modal>
  )
}

export default SignupModal