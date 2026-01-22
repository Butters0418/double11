// 精選大品牌

// components
import BgLayer from './BgLayer/BgLayer';
import CrossLayer from './CrossLayer/CrossLayer';
import Brands from './Brands/Brands';
import BrandPD from './BrandPD/BrandPD';

// images
import { bglayerBgSection4 } from '../../assets/layout';

// styles
import { SPageContainer } from './style';

function Section4() {
  return (
    <SPageContainer
      style={{
        backgroundImage: `url(${bglayerBgSection4})`,
      }}
    >
      <BgLayer />
      <CrossLayer />
      <Brands />

      <BrandPD />
    </SPageContainer>
  );
}

export default Section4;
