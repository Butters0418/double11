// react 相關
import { useEffect, useState } from 'react';

// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';

// custom hooks & utils
import useWindowWidth from '../../../hooks/useWindowWidth';
import getDataById from '../../../utils/getDataById';
import formatPriceText from '../../../utils/formatPriceText';

// components
import Card5 from '../../Cards/Card5';
import FgLayer from '../FgLayer/FgLayer';

// images
import {
  cardItemCard1Light,
  laserLaserBgL,
  section6BgPdMain,
  section6BgPdMainM,
  section6BgPdMainS,
  section6BgCotainbox,
} from '../../../assets/layout';

// styles
import {
  SContainLayer,
  SContainLeft,
  SLeftBox,
  SCardLeft,
  SBtnMore,
  SContainRight,
  SContainTop,
  SContainWrap,
  SContainBox,
} from './style';

function BrandPD() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [pd1, setPd1] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 684);
    idData.length !== 0 && setPd1(idData);
  }, [newPdData]);

  const ww = useWindowWidth();

  return (
    <>
      {pd1.length > 0 && (
        <div
          className="relative min-h-[835px] md:min-h-[470px] lg:min-h-[396px]"
          data-title="品類日"
          id="sbdbody_2"
        >
          <SContainLayer>
            {/* 左欄 */}
            <SContainLeft>
              <SLeftBox>
                <span
                  className="boxbg"
                  style={
                    ww > 1239
                      ? {
                          backgroundImage: `url(${section6BgPdMain})`,
                        }
                      : ww > 766
                        ? {
                            backgroundImage: `url(${section6BgPdMainM})`,
                          }
                        : {
                            backgroundImage: `url(${section6BgPdMainS})`,
                          }
                  }
                />
                {/*主卡片*/}
                <SCardLeft href={pd1[0].url || ''}>
                  <div className="info-box">
                    <p className="whitespace-nowrap">{pd1[0].productName}</p>
                    <h3>{pd1[0].productTitle}</h3>
                  </div>
                  <div className="img-box">
                    <img src={pd1[0].imgSrc} alt="商品圖" />
                  </div>
                </SCardLeft>
                <SBtnMore href={pd1[0].url || ''} className="group">
                  更多
                  <span
                    className="group-hover:rotate-45"
                    style={{
                      backgroundImage: `url(${cardItemCard1Light})`,
                    }}
                  ></span>
                </SBtnMore>
              </SLeftBox>
            </SContainLeft>

            {/* 右欄 */}
            <SContainRight>
              {ww > 1239 && (
                <SContainTop
                  style={{
                    backgroundImage: `url(${laserLaserBgL})`,
                  }}
                />
              )}
              <SContainWrap>
                <span
                  className="shiftbg"
                  style={{
                    backgroundImage: `url(${laserLaserBgL})`,
                  }}
                />
                {/* 產品 */}
                <SContainBox
                  style={{
                    backgroundImage: `url(${section6BgCotainbox})`,
                  }}
                >
                  {pd1.slice(1, 5).map((item, index) => (
                    <Card5
                      key={index}
                      item={item}
                      discountPrice={formatPriceText(item.discountPrice)}
                    />
                  ))}
                </SContainBox>
              </SContainWrap>
            </SContainRight>
          </SContainLayer>

          {/* 底圖 */}
          <FgLayer />
        </div>
      )}
    </>
  );
}

export default BrandPD;
