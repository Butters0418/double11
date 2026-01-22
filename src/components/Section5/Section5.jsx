// 必搶神券

// components
import BgRibbon from '../BgRibbon/BgRibbon';
import BarRibbon from '../BgRibbon/BarRibbon';
import Coupons from './Coupons/Coupons';
// images
import {
  bglayerBgSection5DecoL,
  bglayerBgSection5DecoR,
} from '../../assets/layout';
import BgSection2Grid from '../../assets/layout/bglayer/bg-section2-grid.svg?react';

// styles
import { SPageContainer, SBgLayer } from './style';

function Section5() {
  return (
    <SPageContainer>
      <BarRibbon />
      <SBgLayer>
        <BgRibbon />
        <BgSection2Grid className="deco-grid" />
        <img className="deco" src={bglayerBgSection5DecoL} alt="deco" />
        <img className="deco" src={bglayerBgSection5DecoR} alt="deco" />
      </SBgLayer>
      <Coupons />
    </SPageContainer>
  );
}

export default Section5;
