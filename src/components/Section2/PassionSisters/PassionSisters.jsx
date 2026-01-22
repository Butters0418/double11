// react 相關
import { useEffect, useState } from 'react';
// components
import Card2 from '../../Cards/Card2';
// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';
// custom hooks & utils
import getDataById from '../../../utils/getDataById';
import formatPriceText from '../../../utils/formatPriceText';
// images
import {
  laserLaserBgL,
  titleThemeTitlePic4,
  section2TempLeftBoxPic,
  section2TempLeftBoxPicM,
  section2TempLeftBoxPicS,
} from '../../../assets/layout';
// styles
import { SContainWrap, SContainBox, SBoxLeft, SBoxRight } from './style';
import { SBlockTitle } from '../../../styles/style';

function PassionSisters() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [pd1, setPd1] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 289);
    idData.length !== 0 && setPd1(idData);
  }, [newPdData]);

  return (
    <div id="kol" data-title="揪團激推">
      <SBlockTitle>
        <img
          src={titleThemeTitlePic4}
          alt="Passion Sisters 推推"
          width="640px"
          height="140px"
        />
      </SBlockTitle>
      <SContainWrap>
        <div className="border-layer">
          <span
            className="shiftbg"
            style={{
              backgroundImage: `url(${laserLaserBgL})`,
            }}
          />
        </div>
        <SContainBox>
          {/*左欄(上欄) 揪團PK戰 撈拉拉熊圖片*/}
          <SBoxLeft>
            <div>
              <picture>
                <source
                  srcSet={section2TempLeftBoxPic}
                  media="(min-width:1240px)"
                />
                <source
                  srcSet={section2TempLeftBoxPicM}
                  media="(min-width:767px)"
                />
                <img
                  src={section2TempLeftBoxPicS}
                  alt="揪團PK戰"
                  width="701"
                  height="779"
                />
              </picture>
            </div>
          </SBoxLeft>
          {/*右欄（下欄) 八品商品區 撈拉拉熊資料*/}
          {pd1.length > 0 && (
            <SBoxRight>
              {pd1.map((item, index) => {
                return (
                  <Card2
                    key={index}
                    item={item}
                    discountPrice={formatPriceText(item.discountPrice)}
                  />
                );
              })}
            </SBoxRight>
          )}
        </SContainBox>
      </SContainWrap>
    </div>
  );
}

export default PassionSisters;
