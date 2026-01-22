// react 相關
import { lazy, Suspense } from 'react';

// custom hooks
import useWindowWidth from '../../../hooks/useWindowWidth';

// styles
import { SBlockTitle } from '../../../styles/style';

// images
import { titleThemeTitlePic3 } from '../../../assets/layout';

// lazy load components
const LowPriceMb = lazy(() => import('./LowPriceMb'));
const LowPricePc = lazy(() => import('./LowPricePc'));

function LowPrice() {
  const ww = useWindowWidth();

  return (
    <div data-title="挑戰新低" id="supersale">
      <SBlockTitle className="lg:mt-4">
        <img src={titleThemeTitlePic3} alt="挑戰新低價" />
      </SBlockTitle>
      <Suspense fallback={<div>Loading...</div>}>
        {ww >= 1240 ? <LowPricePc /> : <LowPriceMb />}
      </Suspense>
    </div>
  );
}

export default LowPrice;
