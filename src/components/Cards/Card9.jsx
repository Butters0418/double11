// ps
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Card8Body,
  Card8Border,
  PdName,
  PdMkPrice,
  PdPrice,
  TitleStyle6,
  PdPriceBlock3,
} from './style';
import { laserLaserBgM } from '../../assets/layout';

function Card9({ item, dollar, discountPrice }) {
  return (
    <Card8Body href={item.url}>
      <Card8Border>
        <span
          className="borderbg"
          style={{
            backgroundImage: `url(${laserLaserBgM})`,
          }}
        />
        <TitleStyle6>
          <span>{item.productTitle}</span>
        </TitleStyle6>
      </Card8Border>
      <div className="mt-0 block grid-cols-2 gap-1.5 lg:mt-1.5 lg:grid">
        <LazyLoadImage
          className="mt-1.5 overflow-hidden rounded-md duration-500 lg:mt-0 lg:rounded-lg"
          src={item.imgSrc}
          alt={item.productName}
          height="150"
          threshold={100}
        />
        <div className="block flex-col items-start justify-center lg:flex">
          <PdName className="mt-1.5 text-center md:text-left lg:mt-0">
            {item.productName}
          </PdName>

          <PdPriceBlock3>
            {item.marketPrice !== '' && (
              <PdMkPrice>${item.marketPrice}</PdMkPrice>
            )}

            <PdPrice className="mt-1">
              <span>{dollar}</span>
              <p
                className="inline-block"
                dangerouslySetInnerHTML={{ __html: discountPrice }}
              ></p>
            </PdPrice>
          </PdPriceBlock3>
        </div>
      </div>
    </Card8Body>
  );
}

export default Card9;
