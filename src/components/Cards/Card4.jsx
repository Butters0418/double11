import {
  Card4Border,
  Card4Body,
  Card4Img,
  Card4Info,
  CardInfoTop,
  CardInfoBottom,
} from './style';
import { cardItemCard4Bg, laserLaserBgM } from '../../assets/layout';

function Card4({ item }) {
  return (
    <Card4Border href={item.url}>
      <div className="border-layer">
        <span
          className="borderbg"
          style={{
            backgroundImage: `url(${laserLaserBgM})`,
          }}
        />
      </div>

      <Card4Body style={{ backgroundImage: `url(${cardItemCard4Bg})` }}>
        <div className="flex p-1.5">
          <Card4Img
            style={{
              backgroundImage: `url(${laserLaserBgM})`,
            }}
          >
            <img src={item.imgSrc} alt={item.productName} />
          </Card4Img>

          <Card4Info>
            <h3 dangerouslySetInnerHTML={{ __html: item.imgTitle }}></h3>
            <span />
            <CardInfoBottom>
              <p>{item.productTitle}</p>
              <button>GO!</button>
            </CardInfoBottom>
          </Card4Info>
        </div>
      </Card4Body>
    </Card4Border>
  );
}

export default Card4;
