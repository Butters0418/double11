// custom hooks & utils
import useWindowWidth from '../../../hooks/useWindowWidth';

// images
import {
  bannerStageDecoDeliverybox,
  bannerStageTitleDouble11,
  bannerStageTitleMain,
  bannerStageTitleCoin1,
  bannerStageTitleCoin2,
  bannerStageTitleDouble11S,
  bannerStageTitleMainS,
  bannerStageTitleLinkS,
  bannerStageTitleLink,
  bannerStage2BgHeaderTitle,
  bannerStage2BgHeaderTitleS,
  bannerStage2TitleBox,
} from '../../../assets/layout';

// styles
import { SStage, STitleLayer, SFlashWrap } from './style';

function StageLayer() {
  const ww = useWindowWidth();

  return (
    <SStage className="pt-[60px] md:pt-[96px] lg:pt-[15px]">
      {/* 標題區 */}
      <STitleLayer
        style={
          ww > 766
            ? {
                backgroundImage: `url(${bannerStage2BgHeaderTitle})`,
              }
            : {
                backgroundImage: `url(${bannerStage2BgHeaderTitleS})`,
              }
        }
      >
        {/*裝飾品*/}
        <span className="deco-coin1 ani-rotating1">
          <img
            className="ani-spinning1"
            src={bannerStageTitleCoin1}
            alt="deco-coin"
            width="152"
            height="149"
          />
        </span>
        <span className="deco-coin2 ani-rotating2">
          <img
            className="ani-spinning2"
            src={bannerStageTitleCoin2}
            alt="deco-coin"
            width="137"
            height="135"
          />
        </span>
        <img
          className="deco-deliverybox ani-floating4"
          src={bannerStageDecoDeliverybox}
          alt="deco"
        />
        {/*BOXMAN*/}
        <img
          className="absolute bottom-[32px] left-[5px] z-[-1] h-[81px] w-[66px] md:bottom-[62px] md:left-[5px] md:h-[153px] md:w-[125px] lg:bottom-[82px] lg:left-[17px] lg:h-[180px] lg:w-[147px]"
          src="https://fs-c.ecimg.tw/img/activity/v1/AC29183/AC29183564/title-boxman.png"
          alt="boxman"
          width="147"
          height="180"
        />
        <img
          className="absolute left-0 top-0 z-[-1]"
          src={bannerStage2TitleBox}
          alt="box"
          width="850"
          height="480"
        />
        {/*連結*/}
        <a href="">
          <picture>
            <source srcSet={bannerStageTitleLink} media="(min-width:767px)" />
            <img
              src={bannerStageTitleLinkS}
              alt="千萬折價券 天天領不用搶"
              width="252"
              height="34"
            />
          </picture>
        </a>
        {/*大小標*/}
        <picture>
          <source srcSet={bannerStageTitleDouble11} media="(min-width:767px)" />
          <img
            className="ani-flashing1"
            src={bannerStageTitleDouble11S}
            alt="雙11"
            width="375"
            height="212"
          />
        </picture>
        <picture>
          <source srcSet={bannerStageTitleMain} media="(min-width:767px)" />
          <img
            className="ani-flashing2"
            src={bannerStageTitleMainS}
            alt="激殺戰"
            width="375"
            height="212"
          />
        </picture>
        <SFlashWrap />
      </STitleLayer>
    </SStage>
  );
}

export default StageLayer;
