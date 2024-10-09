import { formatPrice } from "../../utils/formatValue"
import {
  Container,
  LuckyContainer,
  LuckyNumber,
  LuckyLabel,
  ChanceContainer,
  ChanceNumber,
  ChanceValue,
} from "./style"

interface TitleCardHeaderProps {
  name: string;
  chance: number;
  price: number;
}

const TitleCardHeader = ({name, chance, price}: TitleCardHeaderProps) => {
  return(
    <Container>
      <LuckyContainer>
        <LuckyNumber>{name}</LuckyNumber>
        <LuckyLabel>Número da sorte</LuckyLabel>
      </LuckyContainer>
      <ChanceContainer>
        <ChanceNumber>
          {chance} Chance: <ChanceValue> {formatPrice(price)}</ChanceValue>
        </ChanceNumber>
      </ChanceContainer>
    </Container>
  )
}

export default TitleCardHeader