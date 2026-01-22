import { LazyLoadImage } from 'react-lazy-load-image-component';
// 精選大品牌 & 1+1 更划算
import {
  PdCard2,
  PdName,
  PdMkPrice,
  PdPrice,
  TitleStyle3,
  PdPriceBlock,
  Card5Border,
} from './style';
import { laserLaserBgM } from '../../assets/layout';

function Card5({ item, discountPrice }) {
  return (
    <PdCard2 href={item.url}>
      <LazyLoadImage
        className="overflow-hidden rounded-md lg:rounded-lg"
        src={item.imgSrc}
        alt={item.productName}
        height="174"
        threshold={100}
      />

      <Card5Border>
        <span
          className="borderbg"
          style={{
            backgroundImage: `url(${laserLaserBgM})`,
          }}
        />
        <TitleStyle3>
          <span>{item.productTitle}</span>
        </TitleStyle3>
      </Card5Border>

      <PdName className="mt-1 text-center">{item.productName}</PdName>

      <PdPriceBlock>
        {item.marketPrice.length !== 0 && (
          <PdMkPrice className="lg:order-2 lg:ml-1">
            ${item.marketPrice}
          </PdMkPrice>
        )}

        <PdPrice className="mt-1 lg:order-1 lg:mt-0">
          <p
            className="inline-block"
            dangerouslySetInnerHTML={{ __html: discountPrice }}
          ></p>
        </PdPrice>
      </PdPriceBlock>
    </PdCard2>
  );
}

export default Card5;
