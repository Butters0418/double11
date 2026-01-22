// react 相關
import { useEffect, useState } from 'react';

// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../../utils/getDataById';
import formatPriceText from '../../../utils/formatPriceText';

// components
import Card1 from '../../Cards/Card1';

// styles
import { SLaserTop, SLaserTab, STabButton, SLaserBox } from './style';

// images
import {
  section1LaserTabBg,
  section1LaserTop,
  section1LaserIcon,
  section1LaserIconActive,
  section1LaserTabActive,
  laserLaserBgL,
} from '../../../assets/layout';

const buttonData = [
  {
    name: '今日狂降',
    id: 0,
  },
  {
    name: '極限下殺',
    id: 1,
  },
  {
    name: '人氣必購',
    id: 2,
  },
];

function LowPricePc() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [tabState, setTabState] = useState(0);
  const [pd1, setPd1] = useState({ pd0: [], pd1: [], pd2: [] });

  function clickHandler(id) {
    setTabState(id);
  }

  useEffect(() => {
    const newPd1 = getDataById(newPdData, 99);
    const newPd2 = getDataById(newPdData, 110);
    const newPd3 = getDataById(newPdData, 121);
    setPd1((prev) => ({
      ...prev,
      pd0: newPd1.length !== 0 ? newPd1 : prev.pd0,
      pd1: newPd2.length !== 0 ? newPd2 : prev.pd1,
      pd2: newPd3.length !== 0 ? newPd3 : prev.pd2,
    }));
  }, [newPdData]);

  return (
    <>
      <div className="mx-auto max-w-[1240px]">
        <SLaserTop>
          <SLaserTab style={{ backgroundImage: `url(${section1LaserTabBg})` }}>
            {buttonData.map((item, index) => {
              return (
                <STabButton
                  key={item.id}
                  onClick={() => clickHandler(index)}
                  active={tabState === item.id ? true : false}
                >
                  <p>{item.name}</p>
                  <img
                    src={section1LaserIcon}
                    alt="laser light"
                    className="laser-icon"
                  />
                  <img
                    src={section1LaserIconActive}
                    alt="laser light"
                    className="laser-icon-active"
                  />
                  <img
                    src={section1LaserTabActive}
                    alt="tab active"
                    className="active-tab-bg"
                  />
                </STabButton>
              );
            })}
          </SLaserTab>
          <img src={section1LaserTop} alt="雷射頂部" />
        </SLaserTop>

        <SLaserBox>
          <div className="border-layer">
            <span
              className="shiftbg"
              style={{
                backgroundImage: `url(${laserLaserBgL})`,
              }}
            />
          </div>
          <span
            className="shiftbg"
            style={{
              backgroundImage: `url(${laserLaserBgL})`,
            }}
          />
          <div className="pd__container">
            {pd1[`pd${tabState}`].map((item, index) => {
              return (
                <Card1
                  item={item}
                  key={index}
                  discountPrice={formatPriceText(item.discountPrice)}
                />
              );
            })}
          </div>
        </SLaserBox>
      </div>
    </>
  );
}

export default LowPricePc;
