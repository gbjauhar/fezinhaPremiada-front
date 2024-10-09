import TitleCardHeader from "../TitleCardHeader"
import { Container, Dozen, DozenContainer, Dozens } from "./style"

export interface TitleCardProps {
  dozens: string[];
  name: string;
  chance: number;
  price: number;
}

const Title = ({dozens, ...rest}: TitleCardProps) => {
  return(
    <Container>
      <TitleCardHeader {...rest}/>
      <Dozens>
        {dozens.map(dozen => (
          <DozenContainer key={dozen}>
            <Dozen>{dozen}</Dozen>
          </DozenContainer>
        ))}
        </Dozens>
    </Container>
  )
}

export default Title