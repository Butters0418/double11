// custom hooks
import useWindowWidth from '../../../hooks/useWindowWidth';

// images
import {
  bannerStage2BgStagelayer,
  bannerStage2BgStagelayerM,
  bannerStage2BgStagelayerS,
  bannerStage2DecoFloatball,
  bannerStage2BgShiney,
  bannerStage2BgStagelayerSpace,
  bannerStage2BgStagelayerSpaceM,
  bannerStage2BgStagelayerSpaceS,
  laserLaserBgL,
} from '../../../assets/layout';

// styles
import {
  SBGLayer1Part2,
  SBGRibbonsSatge,
  SBGGradientSatge,
  SBGShiney,
} from './style';

function BgLayer1() {
  const ww = useWindowWidth();
  const quantity1 = Array.from({ length: 2 });
  const quantity2 = Array.from({ length: 9 });

  return (
    <SBGLayer1Part2
      style={
        ww > 1239
          ? {
              backgroundImage: `url(${bannerStage2BgStagelayer})`,
            }
          : ww > 766
            ? {
                backgroundImage: `url(${bannerStage2BgStagelayerM})`,
              }
            : {
                backgroundImage: `url(${bannerStage2BgStagelayerS})`,
              }
      }
    >
      <picture>
        <source
          srcSet={bannerStage2BgStagelayerSpace}
          media="(min-width:1240px)"
        />
        <source
          srcSet={bannerStage2BgStagelayerSpaceM}
          media="(min-width:767px)"
        />
        <img
          className="ani-color1 absolute left-1/2 top-0 z-[1] -translate-x-1/2 -scale-x-100"
          src={bannerStage2BgStagelayerSpaceS}
          alt="bg"
        />
      </picture>

      <SBGShiney>
        <img className="ani-stars" src={bannerStage2BgShiney} alt="bg shiney" />
        <img className="ani-stars" src={bannerStage2BgShiney} alt="bg shiney" />
        <img className="ani-stars" src={bannerStage2BgShiney} alt="bg shiney" />
      </SBGShiney>

      <SBGRibbonsSatge>
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
      </SBGRibbonsSatge>

      <SBGGradientSatge />

      {ww > 450 && ww < 1240 && (
        <img
          className="absolute left-1/2 top-1/3 z-[5] h-[185px] w-[768px] max-w-none -translate-x-1/2 object-contain md:h-[338px] md:w-[1240px] lg:h-[616px] lg:w-[2560px]"
          src={bannerStage2DecoFloatball}
          alt="deco"
          width="2560"
          height="616"
        />
      )}

      {ww > 450 && (
        <img
          className="absolute bottom-0 left-1/2 z-[5] h-[185px] w-[768px] max-w-none -translate-x-1/2 object-contain md:h-[338px] md:w-[1240px] lg:h-[616px] lg:w-[2560px]"
          src={bannerStage2DecoFloatball}
          alt="deco"
          width="2560"
          height="616"
        />
      )}
    </SBGLayer1Part2>
  );
}

export default BgLayer1;
