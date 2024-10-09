import { styled } from "styled-components";

interface Props {
  value: number
}
export const SliderContainer = styled.div`
  margin-top: 8vh;
  position: relative;
  margin-bottom: 1rem;
  @media (min-width: 500px) and (max-width:800px){
    margin-top: 4vh;
    margin-bottom: 0;
  }
  @media (max-width: 500px){
    margin-top: 3.5vh;
    margin-bottom: 0;
  }
`;

export const SliderComponent = styled.input<Props>`
  width: 17.85981rem;
  height: 0.75rem; 
  appearance: none;

  background: linear-gradient(to right, #2D3142 ${props => props.value / 10}%, #ECEFFA ${props => props.value / 10}%, #ECEFFA 100%);
  border-radius: 6.25rem;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 6.48681rem;
    height: 2.5625rem;
    background: #FFCE36;
    border-radius: 0.4375rem;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 6.48681rem;
    height: 2.5625rem;
    background: #FFCE36;
    border-radius: 0.4375rem;
    cursor: pointer;
  }
`;
