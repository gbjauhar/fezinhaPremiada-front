import { Button, Container, Image, Input, StyledErroDiv, StyledError, StyledLink, Subtitle, Title, TitleContainer } from "./style";
import logoImg from "../../assets/images/logoImg.svg"
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { postSignIn, postUser } from "../../services/auth";
import { useContext, useEffect, useState } from "react";
import {ThreeDots} from "react-loader-spinner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../../components/Header";
import { AuthContext } from "../../context/AuthContext";
import { formatValue, testCNPJ, testCPF } from "../../utils/cpfValues";
import { formatTel } from "../../utils/formatValue";

type FormData = {
  name: string;
  doccument: string;
  email: string;
  cel: string;
  password: string;
  password_: string;
};

const userSchema = yup.object({
  name: yup.string().min(4, 'Nome muito curto').required('Digite seu nome'),
  doccument: yup
    .string().required('Digite seu documento')
    .test('valid-cpf-cnpj', 'CPF ou CNPJ inválido', value => {
    if (value?.length === 14) {
      return testCPF(value);
    } else {
      return testCNPJ(value);
    }
  }),
  email: yup
    .string()
    .matches(/^\S+@\S+$/i, 'Formato de e-mail inválido')
    .required('Digite seu email'),
  cel: yup
    .string()
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
      'Formato de telefone inválido',
    )
    .required('Digite seu telefone'),
  password: yup.string().min(6, 'Sua senha é muito curta').required('Digite sua senha'),
  password_: yup
    .string()
    .required('Digite novamente sua senha')
    .oneOf([yup.ref('password')], 'Senhas não são iguais'),
});

const SignUp = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: {errors}
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  })
  
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const context  = useContext(AuthContext)

  useEffect(() => {
    if(context?.user){
      navigate("/")
    }
  }, [context?.user])

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    await postUser(data)
    .then(async () => {
      await postSignIn(data)
      .then((res) => {
        toast.success("Cadastro realizado com sucesso, você será logado automaticamente!")
        setLoading(false)
        context?.setUser(res.user)
        context?.setToken(res.token)
        localStorage.setItem("loginTime", new Date().getTime().toString())
        reset()
        navigate("/")
      })
      .catch(err => {
        toast.error("Ocorreu um erro no login automático, tente novamente!")
        console.log(err)
        setLoading(false)
      })
    })
    .catch(err => {
      toast.error("Erro no cadastro, tente novamente!")
      console.log(err)
      setLoading(false)
    })
  }
  return(
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Image src={logoImg} />
          <Title>Cadastro</Title>
          <Subtitle>Crie uma conta e acesse sua plataforma de cartelas favorita.</Subtitle>
        </TitleContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Nome completo"
              onChange={onChange}
              value={value}
              defaultValue=""
              type="text"
            />
          )}
          name="name"
        />
        <StyledErroDiv>
          {errors.name && <StyledError>{errors.name?.message}</StyledError>}
        </StyledErroDiv>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              onChange={onChange}
              value={value}
              defaultValue=""
              type="email"
            />
          )}
          name="email"
        />
        <StyledErroDiv>
          {errors.email && <StyledError>{errors.email?.message}</StyledError>}
        </StyledErroDiv>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="CPF/CNPJ"
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
              placeholder="Telefone"
              onChange={text => onChange(formatTel(text.target.value))}
              value={value}
              defaultValue=""
              type="tel"
            />
          )}
          name="cel"
        />
        <StyledErroDiv>
          {errors.cel && <StyledError>{errors.cel?.message}</StyledError>}
        </StyledErroDiv>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              onChange={onChange}
              value={value}
              defaultValue=""
              type='password'
            />
          )}
          name="password"
        />
        <StyledErroDiv>
          {errors.password && <StyledError>{errors.password?.message}</StyledError>}
        </StyledErroDiv>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Confirmar senha"
              onChange={onChange}
              value={value}
              defaultValue=""
              type='password'
            />
          )}
          name="password_"
        />
        <StyledErroDiv>
          {errors.password_ && <StyledError>{errors.password_?.message}</StyledError>}
        </StyledErroDiv>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>{loading ? 
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color='white'
          ariaLabel="three-dots-loading"
        /> : 'Cadastrar'}</Button>
        <Link to={"/login"}>
          <StyledLink>Já tenho uma conta</StyledLink>
        </Link>
        <ToastContainer />     
      </Container>
    </>
  )
}

export default SignUp