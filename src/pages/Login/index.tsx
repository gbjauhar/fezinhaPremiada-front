import { Button, Container, Image, Input, LinkDiv, StyledErroDiv, StyledError, StyledLink, Subtitle, Title, TitleContainer } from "./style";
import logoImg from "../../assets/images/logoImg.svg"
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { postSignIn } from "../../services/auth";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../../components/Header";
import { AuthContext } from "../../context/AuthContext";
import { formatValue, testCNPJ, testCPF } from "../../utils/cpfValues";

interface FormData {
  doccument: string;
  password: string;
}

const userSchema = yup.object({
  doccument: yup
    .string().required('Digite seu documento')
    .test('valid-cpf-cnpj', 'CPF ou CNPJ inválido', value => {
    if (value?.length === 14) {
      return testCPF(value);
    } else {
      return testCNPJ(value);
    }
  }),
  password: yup.string().required('Digite sua senha'),
});

const Login = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  })

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const context = useContext(AuthContext)

  useEffect(() => {
    if(context?.user){
      navigate("/")
    }
  }, [context?.user])
  
  const onSubmit = async (data: FormData) => {
  setLoading(true)
  await postSignIn(data)
    .then((res) => {
      toast.success("Login realizado com sucesso! Você será redirecionado")
      setLoading(false)
      context?.setUser(res.user)
      context?.setToken(res.token)
      localStorage.setItem("loginTime", new Date().getTime().toString())
      reset()
      navigate("/")
    })
    .catch(err => {
      toast.error("Erro no login, tente novamente!")
      console.log(err)
      setLoading(false)
    })
  }
  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Image src={logoImg} />
          <Title>Login</Title>
          <Subtitle>Faça login abaixo e acesse sua plataforma de cartelas favorita.</Subtitle>
        </TitleContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="CPF ou CNPJ"
              onChange={text => onChange(formatValue(text.target.value))}
              value={value}
              defaultValue=""
            />
          )}
          name="doccument"
        />
        <StyledErroDiv>
          {errors.doccument && <StyledError>{errors.doccument?.message}</StyledError>}
        </StyledErroDiv>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Informe sua senha"
              onChange={onChange}
              value={value}
              defaultValue=""
              type='password'
            />
          )}
          name="password"
        />
        <StyledErroDiv>
          {errors.doccument && <StyledError>{errors.doccument?.message}</StyledError>}
        </StyledErroDiv>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>{loading ?
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color='white'
            ariaLabel="three-dots-loading"
          /> : 'Acessar'}</Button>
        <LinkDiv>
        <p>Ainda não tem conta? </p>
          <Link to={"/signup"}>
            <StyledLink>Cadastrar agora</StyledLink>
          </Link>
        </LinkDiv>
        <ToastContainer />
      </Container>
    </>
  )
}

export default Login