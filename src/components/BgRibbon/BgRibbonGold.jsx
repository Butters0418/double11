import { SBgRibbons } from './style.js';
import { laserLaserBgL } from '../../assets/layout';
import BgRibbonGradient from '../../assets/layout/bglayer/bg-ribbon-gradient-00.svg?react';

function BgRibbonGold() {
  const quantity1 = Array.from({ length: 2 });
  const quantity2 = Array.from({ length: 9 });
  return (
    <SBgRibbons>
      {quantity1.map((_, index) => (
        <b key={index}>
          {quantity2.map((_, index) => (
            <span key={index}>PChome 1111 Sale!</span>
          ))}
          <em
            style={{
              backgroundImage: `url(${laserLaserBgL})`,
            }}
          />
        </b>
      ))}
      <BgRibbonGradient className="absolute bottom-0 left-0 z-[-1]" />
    </SBgRibbons>
  );
}

export default BgRibbonGold;
