// react 相關
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../../utils/getDataById';
import formatPriceText from '../../../utils/formatPriceText';

// components
import Card9 from '../../Cards/Card9';

// images
import {
  titleThemeTitlePic10,
  section6BgPdgroup2,
  section6TitlePdgroup2,
  section6TitlePdgroup2S,
} from '../../../assets/layout';

// styles
import {
  SFrontDeco,
  SContainBody,
  SContainWrap,
  SContainBox,
  SBlockTitle,
} from './style';

function PDGroup2() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [pd1, setPd1] = useState([]);
  const [pd2, setPd2] = useState([]);

  useEffect(() => {
    const newPd1 = getDataById(newPdData, 728);
    const newPd2 = getDataById(newPdData, 739);
    newPd1.length !== 0 && setPd1(newPd1);
    newPd2.length !== 0 && setPd2(newPd2);
  }, [newPdData]);

  return (
    <>
      {pd1.length > 0 && (
        <div
          className="relative mt-[32px] min-h-[1048px] md:min-h-[1266px] lg:min-h-[822px]"
          id="gift3c"
          data-title="機不可失"
        >
          <SFrontDeco className="pt-16 md:pt-24 lg:pt-12">
            <img
              src={section6BgPdgroup2}
              alt="deco"
              width="1261"
              height="215"
            />
          </SFrontDeco>
          {/* 標題 */}
          <SBlockTitle>
            <img
              src={titleThemeTitlePic10}
              alt="機不可失買就抽"
              width="640px"
              height="140px"
            />
          </SBlockTitle>
          {/* 版身 */}

          <SContainBody>
            <a href="">
              <picture className="group-title">
                <source
                  srcSet={section6TitlePdgroup2}
                  media="(min-width:767px)"
                />
                <img
                  src={section6TitlePdgroup2S}
                  alt="額滿登記送50P幣"
                  width="267"
                  height="54"
                />
              </picture>
            </a>
            <SContainWrap
              style={{
                background: `linear-gradient(
              118deg,
              #fff -24.08%,
              #3ae9f4 33.76%,
              #003134 102.11%
            )`,
              }}
            >
              {/* 產品 */}
              <SContainBox>
                {pd1.map((item, index) => (
                  <li key={index}>
                    <Card9
                      item={item}
                      discountPrice={formatPriceText(item.discountPrice)}
                    />
                  </li>
                ))}

                {pd2.map((item, index) => (
                  <li key={index}>
                    <a href={item.url || ''}>
                      <LazyLoadImage
                        src={item.imgSrc}
                        alt="img"
                        height="220"
                        threshold={100}
                      />
                    </a>
                  </li>
                ))}
              </SContainBox>
            </SContainWrap>
          </SContainBody>
        </div>
      )}
    </>
  );
}

export default PDGroup2;
