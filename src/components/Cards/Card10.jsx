import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Card10Border,
  PdCard10,
  Card10Left,
  Card10Right,
  PdPrice10,
  PdMkPrice10,
  Card10Button,
} from './style';
import {
  laserLaserBgM,
  section7TitleClock,
  section7IconClock,
  section7CardBg,
} from '../../assets/layout';

function Card10({ item }) {
  return (
    <Card10Border>
      <span
        className="borderbg"
        style={{
          backgroundImage: `url(${laserLaserBgM})`,
        }}
      />
      <PdCard10 href={item.url}>
        <Card10Left>
          <LazyLoadImage
            src={item.image}
            height="300"
            className="w-full"
            alt={item.name}
          />
        </Card10Left>
        <Card10Right>
          <div className="top">
            <p>{item.slogan}</p>
            <h3>{item.name}</h3>
          </div>
          <div
            className="bot"
            style={{ backgroundImage: `url(${section7CardBg})` }}
          >
            <PdPrice10>
              <span>$</span>
              {item.price.onsale.toLocaleString('zh-TW')}
            </PdPrice10>
            {item.price.origin !== '' && (
              <PdMkPrice10>${item.price.origin}</PdMkPrice10>
            )}
            <Card10Button style={{ backgroundImage: `url(${laserLaserBgM})` }}>
              <p>
                馬上搶
                <img className="ml-1" src={section7IconClock} alt="馬上搶" />
              </p>
            </Card10Button>
          </div>
        </Card10Right>
      </PdCard10>
    </Card10Border>
  );
}

export default Card10;
