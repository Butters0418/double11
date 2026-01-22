import { SBarRibbons } from './style.js';
import { laserLaserBgL, bglayerFrameDecoRibbon } from '../../assets/layout';

function BarRibbon() {
  const quantity = Array.from({ length: 14 });
  return (
    <SBarRibbons>
      {quantity.map((_, index) => (
        <span
          key={index}
          style={{
            backgroundImage: `url(${laserLaserBgL})`,
          }}
        >
          PChome 1111 Sale!
          {index % 2 !== 0 && <img src={bglayerFrameDecoRibbon} alt="bg" />}
        </span>
      ))}
    </SBarRibbons>
  );
}

export default BarRibbon;
