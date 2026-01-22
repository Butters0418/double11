// components
import Bank from './Bank/Bank';
import HotPreview from './HotPreview/HotPreview';
import Category from './Category/Category';
import LowPrice from './LowPrice/LowPrice';
import BgLayer from './BgLayer/BgLayer';

// styles
import { SPageContainer } from './style';

function Section1() {
  return (
    <SPageContainer>
      <BgLayer />
      <Bank />
      <HotPreview />

      <div id="cate_1" data-title="必敗會場">
        <Category />
      </div>
      <LowPrice />
    </SPageContainer>
  );
}

export default Section1;
