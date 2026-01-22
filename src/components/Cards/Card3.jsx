// 新低價
import {
  PdCard3,
  PdNameStyle2,
  PdMkPrice2,
  PdPrice2,
  TitleStyle4,
  PdPriceBlock2,
  Card3Border,
  Card3Item,
} from './style';
import {
  laserLaserBgM,
  cardItemCard3TitleBg,
  cardItemCard3ItemType1,
  cardItemCard3ItemType2,
} from '../../assets/layout';

const CardItem = [cardItemCard3ItemType1, cardItemCard3ItemType2];
function Card3({ type, item, discountPrice }) {
  return (
    <Card3Border>
      <span
        className="borderbg"
        style={{
          backgroundImage: `url(${laserLaserBgM})`,
        }}
      />
      <PdCard3 href={item.url}>
        <TitleStyle4
          style={{ backgroundImage: `url(${cardItemCard3TitleBg})` }}
        >
          <span>{item.productTitle}</span>
        </TitleStyle4>

        <div className="mt-1 px-[14px] lg:mt-1.5 lg:px-1.5">
          <img
            className="overflow-hidden rounded-md lg:rounded-lg"
            src={item.imgSrc}
            alt={item.productName}
          />
        </div>

        <PdNameStyle2>{item.productName}</PdNameStyle2>

        <PdPriceBlock2>
          {item.marketPrice !== '' && (
            <PdMkPrice2 className="mr-1">${item.marketPrice}</PdMkPrice2>
          )}

          <PdPrice2>
            <p
              className="inline-block"
              dangerouslySetInnerHTML={{ __html: discountPrice }}
            ></p>
          </PdPrice2>
          <Card3Item src={CardItem[type]} alt="超值狂降" />
        </PdPriceBlock2>
      </PdCard3>
    </Card3Border>
  );
}

export default Card3;
