// react 相關
import { useEffect, useState } from 'react';

// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../../utils/getDataById';
import formatPriceText from '../../../utils/formatPriceText';

// components
import Card8 from '../../Cards/Card8';

// images
import {
  titleThemeTitlePic9,
  section6BgPdgroup1,
  section6TitlePdgroup1,
  section6TitlePdgroup1S,
} from '../../../assets/layout';

// styles
import {
  SFrontDeco,
  SContainBody,
  SContainWrap,
  SContainBox,
  SBlockTitle,
} from './style';

function PDGroup1() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [pd1, setPd1] = useState([]);
  const [pd2, setPd2] = useState([]);

  useEffect(() => {
    const newPd1 = getDataById(newPdData, 684);
    const newPd2 = getDataById(newPdData, 695);
    newPd1.length !== 0 && setPd1(newPd1);
    newPd2.length !== 0 && setPd2(newPd2);
  }, [newPdData]);

  return (
    <div
      className="relative min-h-[1420px] md:min-h-[1266px] lg:min-h-[822px]"
      data-title="箱選囤購"
      id="n3cgift"
    >
      <SFrontDeco className="pt-16 md:pt-12 lg:pt-0">
        <img src={section6BgPdgroup1} alt="deco" width="1261" height="215" />
      </SFrontDeco>
      {/* 標題 */}
      <SBlockTitle>
        <img
          src={titleThemeTitlePic9}
          alt="箱購囤起來"
          width="640px"
          height="140px"
        />
      </SBlockTitle>
      {/* 版身 */}
      <SContainBody>
        <a href="">
          <picture className="group-title min-h-[55px] md:min-h-[55px] lg:min-h-[66px]">
            <source srcSet={section6TitlePdgroup1} media="(min-width:767px)" />
            <img
              src={section6TitlePdgroup1S}
              alt="額滿登記送50P幣"
              width="267"
              height="54"
            />
          </picture>
        </a>
        <SContainWrap>
          {/* 產品 */}
          <SContainBox>
            {pd1.length > 0 &&
              pd1.map((item, index) => (
                <li key={index}>
                  <Card8
                    item={item}
                    discountPrice={formatPriceText(item.discountPrice)}
                  />
                </li>
              ))}

            {pd2.length > 0 &&
              pd2.map((item, index) => (
                <li key={index}>
                  <a href={item.url || ''}>
                    <img src={item.imgSrc} alt="img" height="220" />
                  </a>
                </li>
              ))}
          </SContainBox>
        </SContainWrap>
      </SContainBody>
    </div>
  );
}

export default PDGroup1;
