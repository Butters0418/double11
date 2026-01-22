// custom hooks
import useWindowWidth from '../../../hooks/useWindowWidth';

// components
import BgRibbon from '../../../components/BgRibbon/BgRibbon';

// images
import {
  section1Part2BgGridline,
  section1Part2BgGridlineM,
  section1Part2BgGridlineS,
  section1Part2DecoFloatballs,
} from '../../../assets/layout';

// styles
import { SBGLayer } from './style';

function BgLayer() {
  const ww = useWindowWidth();
  return (
    <SBGLayer>
      <picture>
        <source srcSet={section1Part2BgGridline} media="(min-width:1240px)" />
        <source srcSet={section1Part2BgGridlineM} media="(min-width:767px)" />
        <img
          className="bg-grid ani-shine2"
          src={section1Part2BgGridlineS}
          alt="Deco"
          width="768"
          height="721"
        />
      </picture>
      {ww > 450 && ww < 1240 && (
        <img
          className="absolute left-1/2 top-[1000px] z-[1] h-[307px] w-[768px] max-w-none -translate-x-1/2 object-contain md:top-[1400px] md:h-[561px] md:w-[1240px] lg:h-[1022px] lg:w-[2560px]"
          src={section1Part2DecoFloatballs}
          alt="deco"
          width="2560"
          height="616"
        />
      )}
      {ww > 450 && (
        <img
          className="absolute bottom-[200px] left-1/2 z-[-1] h-[307px] w-[768px] max-w-none -translate-x-1/2 object-contain md:bottom-[200px] md:h-[561px] md:w-[1240px] lg:bottom-[300px] lg:h-[1022px] lg:w-[2560px]"
          src={section1Part2DecoFloatballs}
          alt="deco"
          width="2560"
          height="616"
        />
      )}
      <BgRibbon />
    </SBGLayer>
  );
}

export default BgLayer;
