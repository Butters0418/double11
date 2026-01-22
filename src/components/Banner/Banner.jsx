// components
import Countdown from './Countdown/Countdown';
import Discount from './Discount/Discount';
import BgLayer1Part2 from './BgLayer/BgLayer1Part2';
import StageLayer from './StageLayer/StageLayer';

// styles
import { SPageContainer } from './style';

function Banner() {
  return (
    <SPageContainer>
      <BgLayer1Part2 />
      <StageLayer />
      <Countdown />
      <Discount />
    </SPageContainer>
  );
}

export default Banner;
