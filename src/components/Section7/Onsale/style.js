import tw, { styled } from 'twin.macro';
import { laserBgShineM } from '../../../assets/layout';

export const SBlockTitle = styled.div`
  ${tw`relative z-[1] flex min-h-[76px] w-full items-center justify-center`}
  ${tw`md:(min-h-[96px])`}
  img {
    ${tw`m-auto min-h-[54px] w-auto`}
    ${tw`md:(min-h-[70px])`}
    ${tw`xl:(min-h-[136px])`}
  }
`;

export const SContainer = styled.div`
  ${tw`mx-auto max-w-[360px] p-0 -mt-6`}
  ${tw`sm:(max-w-[720px] -mt-3)`}
  ${tw`lg:(max-w-[1240px] px-2 pt-2 pb-4 mt-0)`}
`;

// 上選單
export const STabContainer = styled.div`
  ${tw`relative max-w-[1050px] mx-auto`}
  ${tw`lg:(px-9)`}
  .tabListBorder {
    ${tw`rounded-xl bg-no-repeat bg-cover p-[1px]`}
    ${tw`lg:(p-0.5 rounded-full)`}
  }
  .tabList {
    ${tw`grid grid-cols-4 relative px-2 py-1.5 rounded-xl gap-x-1.5`}
    ${tw`lg:(pl-[280px] py-2 pr-1.5 gap-x-2 rounded-full)`}
    background-image: linear-gradient(270deg, #CA0000 4.12%, #F32D2D 49.56%, #FF7A5C 100%);
  }
  .title-clock {
    ${tw`z-10 pointer-events-none w-[263px] mx-auto relative -mb-3.5`}
    ${tw`lg:(absolute -left-1 -bottom-2 w-[330px])`}
  }
  .mask-bg {
    ${tw`block absolute top-[90px] left-1/2 -translate-x-1/2 w-[256px] h-10 rounded-[190px_190px_0_0]`}
    ${tw`lg:(hidden)`}
    background: linear-gradient(180deg, #CA0000 0%, #F32D2D 33.19%, rgba(255, 122, 92, 0.89) 70.41%, rgba(255, 122, 92, 0.00) 86.11%);
  }
`;

// 選單按鈕
export const STabButton = styled.button`
  ${tw`bg-cover bg-center rounded-lg text-center relative py-2 duration-100`}
  ${tw`lg:(px-[16px] py-3.5 rounded-full)`}
  ${tw`after:(absolute -right-[3px] lg:-right-1 top-1/2 w-[1px] h-[36px] bg-white/50 translate-x-1/2 -translate-y-1/2)`}
  ${(props) =>
    props.$active ? tw`text-[#070032]` : tw`text-white hover:(bg-white/20)`}
  background-image: ${(props) =>
    props.$active ? `url(${laserBgShineM})` : 'none'};
  &:last-of-type {
    ${tw`after:(hidden)`}
  }

  // 時間
  h3 {
    ${tw`font-montserrat font-bold leading-none text-[18px] whitespace-nowrap`}
    ${tw`sm:(text-[22px])`}
    ${tw`lg:(text-[26px] tracking-wide)`}
  }
  // 文字
  p {
    ${tw`font-normal leading-none tracking-wide font-notosans mt-1 text-xs whitespace-nowrap`}
    ${tw`sm:(text-[15px])`}
    ${tw`lg:(text-[18px] mt-0)`}
  }
`;

// 下商品
export const SPdContainer = styled.div`
  ${tw`grid grid-cols-1 gap-y-1 mt-2`}
  ${tw`sm:(grid-cols-2 gap-x-2 gap-y-3)`}
  ${tw`lg:(gap-x-3 gap-y-5 grid-cols-3 mt-9)`}
`;
