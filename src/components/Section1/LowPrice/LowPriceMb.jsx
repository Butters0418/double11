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
import { SLaserTopBg, SLaserBox, SLaserTitleMb } from './style';

// images
import {
  section1LaserTop,
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

function LowPriceMb() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [pd1, setPd1] = useState({ pd0: [], pd1: [], pd2: [] });

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
    <div className="mx-auto w-full max-w-[450px] overflow-hidden px-2 md:max-w-[680px]">
      {buttonData.map((item, index) => {
        return (
          <div key={item.id}>
            <div className="relative">
              <SLaserTitleMb
                style={{ backgroundImage: `url(${section1LaserTabActive})` }}
              >
                <p>{buttonData[index].name}</p>
                <img
                  src={section1LaserIconActive}
                  alt="laser light"
                  className="active-icon"
                />
              </SLaserTitleMb>

              <SLaserTopBg
                src={section1LaserTop}
                alt="雷射頂部"
                className="mx-auto h-[80px] w-[98%]"
              />
            </div>
            <SLaserBox>
              <div className="border-layer">
                <span
                  className="shiftbg"
                  style={{
                    backgroundImage: `url(${laserLaserBgL})`,
                  }}
                />
              </div>
              <div className="pd__scrollContainer no-scrollbar">
                <div className="pd__container">
                  {pd1[`pd${index}`].map((item, idx) => {
                    return (
                      <Card1
                        item={item}
                        key={idx}
                        discountPrice={formatPriceText(item.discountPrice)}
                      />
                    );
                  })}
                </div>
              </div>
            </SLaserBox>
          </div>
        );
      })}
    </div>
  );
}

export default LowPriceMb;
