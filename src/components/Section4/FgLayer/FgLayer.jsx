// custom hooks
import useWindowWidth from '../../../hooks/useWindowWidth';
// images
import {
  bglayerBgSection4DecoL,
  bglayerBgSection4DecoR,
  bglayerBgSection4DecoS,
} from '../../../assets/layout';
import BgGradient from '../../../assets/layout/bglayer/bg-section4-brandpd.svg?react';
// styles
import { SFGLayer } from './style';

function FgLayer() {
  const ww = useWindowWidth();
  return (
    <SFGLayer>
      <BgGradient className="bgGradient" />
      {ww > 766 ? (
        <>
          <img className="deco" src={bglayerBgSection4DecoL} alt="deco" />
          <img className="deco" src={bglayerBgSection4DecoR} alt="deco" />
        </>
      ) : (
        <img className="deco-s" src={bglayerBgSection4DecoS} alt="deco" />
      )}
    </SFGLayer>
  );
}
export default FgLayer;
