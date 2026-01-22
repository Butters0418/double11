// 1111超值購

// components
import SuperGreat from './SuperGreat/SuperGreat';
import BgRibbon from '../BgRibbon/BgRibbon';

// style
import { SPageContainer, SBgLayer } from './style';

function Section3() {
  return (
    <SPageContainer>
      <SBgLayer>
        <BgRibbon />
      </SBgLayer>
      <SuperGreat />
    </SPageContainer>
  );
}

export default Section3;
