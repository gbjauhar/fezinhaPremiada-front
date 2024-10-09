import { SliderComponent, SliderContainer } from "./style";

interface Props {
  numFriends: number,
  setNumFriends: React.Dispatch<React.SetStateAction<number>>,
}

const Slider = ({ numFriends, setNumFriends }: Props) => {

  const handleSliderChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setNumFriends(parseInt(event.target.value));
  };

  return (
    <SliderContainer>
      <SliderComponent
        type="range"
        min="0"
        max="1000"
        value={numFriends}
        onChange={handleSliderChange}
      />
    </SliderContainer>
  );
};

export default Slider;
