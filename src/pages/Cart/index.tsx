import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import Title from "../../components/Title"
import {
  ButtonContainer,
  Container,
  FooterContainer,
  GreenButton,
  Input,
  PageTitle,
  Row,
  TitleContainer,
  TitlesContainer,
  Total,
} from "./style"
import { useContext, useEffect, useState } from "react"
import { getSum } from "../../utils/titleSum"
import { AuthContext, TitleInterface } from "../../context/AuthContext"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { buyTitles } from "../../services/titles"
import { ToastContainer, toast } from "react-toastify"
import { Controller, useForm } from "react-hook-form";

const Cart = () => {
  const {
    handleSubmit,
    reset,
    control,
  } = useForm()

  const context = useContext(AuthContext)
  const [combinedArray, setCombinedArray] = useState<TitleInterface[]>([])
  useEffect(() => {
    const uniqueMap = new Map();
    context?.cart?.forEach((innerArray: TitleInterface[]) => {
      innerArray.forEach(item => {
        if (!uniqueMap.has(item.id)) {
          uniqueMap.set(item.id, item);
        }
      });
    });
    const uniqueArray = Array.from(uniqueMap.values());
    setCombinedArray(uniqueArray)
  }, [context?.cart])

  const buy = async (data: { code?: string }) => {
   const titles: string[] = [];
    combinedArray?.forEach(title => titles.push(title.id));
    const body = {
      user_doccument: context?.user?.doccument,
      titles: titles,
      payment_form: 'PIX',
      code: !data.code ? "" : data.code,
    }
    await buyTitles(body)
    .then(res => {
      console.log(res)
      context?.setCart(null)
      toast.success("Títulos comprados com sucesso!")
      reset()
    })
    .catch(err => {
      console.log(err)
      toast.error("Erro na compra, tente novamente!")
    })
  }
  return (
    <>
      <Header />
      <Container>
        <PageTitle><AiOutlineShoppingCart size={30} /> Carrinho</PageTitle>
        {!context?.cart ? <></> : (
          <TitleContainer>
            <TitlesContainer>
              {combinedArray?.map(title => (
                <Title
                  key={title.id}
                  name={title.name}
                  price={title.value}
                  chance={title.chances}
                  dozens={title.dozens}
                />))}
            </TitlesContainer>
            <FooterContainer>
              <Row>
                <Total>Total:</Total>
                <Total>{getSum(combinedArray)}</Total>
                </Row>
                <ButtonContainer>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      placeholder="Código do vendedor"
                      onChange={onChange}
                      value={value}
                      defaultValue=""
                      type='text'
                    />
                  )}
                  name="code"
                />
                <GreenButton onClick={handleSubmit(buy)}>Finalizar compra</GreenButton>
              </ButtonContainer>
            </FooterContainer>
          </TitleContainer>
        )}
      </Container>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default Cart