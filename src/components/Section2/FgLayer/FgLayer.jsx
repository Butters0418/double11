// custom hooks
import useWindowWidth from '../../../hooks/useWindowWidth';
// images
import {
  section2GirlL,
  section2GirlR,
  section2FgConffiti,
  section2FgConffitiS,
} from '../../../assets/layout';
// styles
import { SFGLayer } from './style';

function FgLayer() {
  const ww = useWindowWidth();
  return (
    <SFGLayer>
      {ww > 1300 && (
        <>
          <img
            className="img-girl-l"
            src={section2GirlL}
            alt="img-girl-L"
            width="160"
            height="573"
          />
          <img src={section2GirlR} alt="img-girl-r" width="163" height="575" />
        </>
      )}
      <picture className="deco">
        <source srcSet={section2FgConffiti} media="(min-width:767px)" />
        <img src={section2FgConffitiS} alt="deco" width="1768" height="715" />
      </picture>
    </SFGLayer>
  );
}
export default FgLayer;
