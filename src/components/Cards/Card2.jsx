// ps
import {
  PdCard2,
  PdName,
  PdMkPrice,
  PdPrice,
  TitleStyle2,
  PdPriceBlock,
  Card5Border,
} from './style';
import { laserLaserBgM } from '../../assets/layout';

function Card2({ item, dollar, discountPrice }) {
  return (
    <PdCard2 href={item.url}>
      <img
        className="overflow-hidden rounded-md lg:rounded-lg"
        src={item.imgSrc}
        alt={item.productName}
      />

      <Card5Border>
        <span
          className="borderbg"
          style={{
            backgroundImage: `url(${laserLaserBgM})`,
          }}
        />
        <TitleStyle2>
          <span>{item.productTitle}</span>
        </TitleStyle2>
      </Card5Border>

      <PdName className="mt-1 text-center">{item.productName}</PdName>

      <PdPriceBlock>
        {item.marketPrice !== '' && (
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

export default Card2;
