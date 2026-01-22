import tw, { styled } from 'twin.macro';
import { bannerStageTitleMainS } from '../../../assets/layout';
/********************/
/*場景內容
/********************/
export const SStage = styled.div`
  ${tw`relative z-[3] w-full h-full overflow-hidden`}
  ${tw`bg-top bg-no-repeat`}
`;

export const STitleLayer = styled.div`
  ${tw`relative z-[1]`}
  ${tw`flex justify-center items-end`}
  ${tw`bg-top bg-no-repeat bg-contain`}
  ${tw`w-[375px] h-[212px] left-1/2 -translate-x-1/2`}
  ${tw`md:(w-[720px] h-[407px] m-auto left-auto -translate-x-0)`}
  ${tw`lg:(w-[850px] h-[480px])`}
  > picture img {
    ${tw`absolute w-full h-full z-[0] top-0 left-0 pointer-events-none`}
  }
  > span {
    ${tw`block absolute z-[0] pointer-events-none`}
    img {
    }
  }
  .deco-coin1 {
    ${tw`left-[77px] top-[19px] w-[67px] h-[56px]`}
    ${tw`md:(left-[148px] top-[37px] w-[129px] h-[127px])`}
    ${tw`lg:(left-[174px] top-[43px] w-[152px] h-[149px])`}
    ${tw`origin-bottom-left`}
  }
  .deco-coin2 {
    ${tw`left-[228px] top-[0px] w-[60px] h-[59px]`}
    ${tw`md:(left-[440px] top-[0px] w-[117px] h-[115px])`}
    ${tw`lg:(left-[518px] top-[0px] w-[137px] h-[135px])`}
    ${tw`origin-bottom-right`}
  }
  a img {
    ${tw`relative z-[10] duration-500`}
    ${tw`w-[252px] mb-[28px]`}
    ${tw`md:(w-[483px] mb-[55px])`}
    ${tw`lg:(w-[570px] mb-[65px])`}
  }
  a:hover img {
    ${tw`hue-rotate-[-115deg] brightness-[1.15] contrast-[1.05]`}
  }
  .deco-deliverybox {
    ${tw`absolute z-[-1]`}
    ${tw`left-[48px] top-[-24px] w-[40px] h-[60px]`}
    ${tw`md:(left-[102px] top-[-13px] w-[55px] h-[83px])`}
    ${tw`lg:(left-[102px] top-[22px] w-[60px] h-[90px])`}
  }
`;

export const SFlashWrap = styled.div`
  ${tw`absolute left-0 top-0 z-[10] h-full w-full overflow-hidden pointer-events-none`};
  mask-size: contain;
  mask-image: url(${bannerStageTitleMainS});

  ${tw`before:(content-[attr(before)] absolute top-0 left-0 right-0 bottom-0 z-auto)`}
  ::before {
    animation: flashshine 5s ease infinite;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 1) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
`;
