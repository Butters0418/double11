// custom hooks
import useWindowWidth from '../../../hooks/useWindowWidth';
// images
import { section2Girls } from '../../../assets/layout';
import BgDeco from '../../../assets/layout/section2/bg-deco.svg?react';
// styles
import { SBGLayer } from './style';

function BgLayer() {
  const ww = useWindowWidth();
  return (
    <SBGLayer>
      {ww > 1239 && (
        <>
          <img
            className="img-girls"
            src={section2Girls}
            alt="img-girls"
            width="1260"
            height="260"
          />
          <BgDeco className="deco" />
          <BgDeco className="deco" />
        </>
      )}
    </SBGLayer>
  );
}
export default BgLayer;
