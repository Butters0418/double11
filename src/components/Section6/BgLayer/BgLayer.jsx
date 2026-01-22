// components
import BgRibbon from '../../BgRibbon/BgRibbon';
import { bglayerBgSection6 } from '../../../assets/layout';
// styles
import { SBGLayer } from './style';
/********************/
/*背景樣式
/********************/
function BgLayer() {
  return (
    <SBGLayer>
      <BgRibbon />
      <img className="bg-pattern" src={bglayerBgSection6} alt="deco" />
    </SBGLayer>
  );
}
export default BgLayer;
