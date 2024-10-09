import { Button, Container, Image, Input, Select, StyledErroDiv, StyledError, Subtitle, Title, TitleContainer } from "./style";
import logoImg from "../../assets/images/logoImg.svg"
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from "react";
import { checkCEP } from "../../services/cepAPI";
import { Header } from "../../components/Header";
import { UF } from "../../utils/UFconstant";
import { AuthContext } from "../../context/AuthContext";
import { postUpdate } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from "react-loader-spinner"

interface Form {
  address: string | undefined,
  city: string | undefined,
  cep: string,
  uf: string | undefined,
  neighborhood: string | undefined,
  residence_number: string
}

const userSchema = yup.object({
  address: yup.string(),
  neighborhood: yup.string(),
  cep: yup
    .string()
    .test('validCEP', 'CEP inválido', value => {
      if (value) {
        const res = checkCEP(value);
        return res;
      }

      return false;
    })
    .required('Digite seu CEP'),
  uf: yup.string(),
  residence_number: yup.string().required('Digite o número da residência'),
  city: yup.string(),
})


const Address = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<Form>({
    resolver: yupResolver(userSchema),
  })
  const navigate = useNavigate()
  const context = useContext(AuthContext)
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState({
    address: '',
    neighborhood: '',
    city: '',
    uf: '',
  });

  useEffect(() => {
    if(context?.user?.address || !context?.user){
      navigate("/")
    }
  }, [context?.user])


  const onSubmit = async (data: Form) => {
    const body = {
      ...address,
      cep: data.cep,
      residence_number: data.residence_number,
    }
    setLoading(true)
    await postUpdate(body)
      .then(res => {
        toast.success("Cadastro finalizado, você será redirecionado!")
        setLoading(false)
        reset()
        context?.setUser(res)
        navigate("/")
      })
      .catch(err => {
        toast.error("Houve um erro, tente novamente!")
        setLoading(false)
        console.log(err)
      })
  }


  const handleCEP = async (data: string) => {
    await checkCEP(data).then(res => {
      if (res.success) {
        setAddress({
          neighborhood: res.data.bairro,
          city: res.data.localidade,
          address: res.data.logradouro,
          uf: res.data.uf,
        });
        setDisabled(false);
      }
    });
  };
  return(
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Image src={logoImg} />
          <Title>Finalizar Cadastro</Title>
          <Subtitle>Finalize o cadastro com seu endereço para que possa adquirir suas cartelas.</Subtitle>
        </TitleContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="CEP"
              onBlur={() => handleCEP(value)}
              onChange={onChange}
              value={value}
              defaultValue=""
              type="text"
            />
          )}
          name="cep"
        />
        <StyledErroDiv>
          {errors.cep && <StyledError>{errors.cep?.message}</StyledError>}
        </StyledErroDiv>

        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Cidade"
              onChange={onChange}
              defaultValue={address.city}
              type="text"
              disabled={disabled}
            />
          )}
          name="city"
        />
        <StyledErroDiv>
          {errors.city && <StyledError>{errors.city?.message}</StyledError>}
        </StyledErroDiv>

        <Controller
          control={control}
          name="uf"
          defaultValue={address.uf}
          render={({ field: { onChange } }) => (
            <Select onChange={onChange} value={address.uf} name="uf" disabled={disabled}>
              {UF.map(state => (
                <option key={state.value} value={state.value}>{state.name}</option>
              ))}
            </Select>
          )}
        />
        <StyledErroDiv>
          {errors.uf && <StyledError>{errors.uf?.message}</StyledError>}
        </StyledErroDiv>

        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Bairro"
              onChange={onChange}
              defaultValue={address.neighborhood}
              disabled={disabled}
              type="text"
            />
          )}
          name="neighborhood"
        />
        <StyledErroDiv>
          {errors.neighborhood && <StyledError>{errors.neighborhood?.message}</StyledError>}
        </StyledErroDiv>

        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Endereço"
              onChange={onChange}
              defaultValue={address.address}
              type="text"
              disabled={disabled}
            />
          )}
          name="address"
        />
        <StyledErroDiv>
          {errors.address && <StyledError>{errors.address?.message}</StyledError>}
        </StyledErroDiv>

        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Número da residência"
              onChange={onChange}
              defaultValue=""
              type='number'
              disabled={disabled}
            />
          )}
          name="residence_number"
        />
        <StyledErroDiv>
          {errors.residence_number && <StyledError>{errors.residence_number?.message}</StyledError>}
        </StyledErroDiv>

        <Button type="submit" disabled={disabled} onClick={handleSubmit(onSubmit)}>
          {loading ?
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color='white'
              ariaLabel="three-dots-loading"
            /> : 'Finalizar'}
        </Button>
      </Container>
      <ToastContainer />
    </>
  )
}

export default Address