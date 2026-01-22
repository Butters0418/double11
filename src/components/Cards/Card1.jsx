// 新低價
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  PdCard,
  PdName,
  PdMkPrice,
  PdPrice,
  TitleStyle1,
  PdPriceBlock,
} from './style';

import { cardItemCard1TitleBg } from '../../assets/layout';

function Card1({ item, discountPrice }) {
  return (
    <PdCard href="">
      <TitleStyle1 style={{ backgroundImage: `url(${cardItemCard1TitleBg})` }}>
        <span>{item.productTitle}</span>
      </TitleStyle1>

      <LazyLoadImage
        className="mt-0 overflow-hidden rounded-md lg:mt-[9px] lg:rounded-lg"
        src={item.imgSrc}
        alt="card"
        height="180"
        threshold={100}
      />

      <PdName className="mt-1 text-center lg:mt-3">{item.productName}</PdName>

      <PdPriceBlock>
        {item.marketPrice !== '' && (
          <PdMkPrice className="lg:order-2 lg:ml-1">$9999</PdMkPrice>
        )}

        <PdPrice className="mt-1 lg:order-1 lg:mt-0">
          <p
            className="inline-block"
            dangerouslySetInnerHTML={{ __html: discountPrice }}
          ></p>
        </PdPrice>
      </PdPriceBlock>
    </PdCard>
  );
}

export default Card1;
