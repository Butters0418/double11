import tw, { styled } from 'twin.macro';

export const SContainer = styled.div`
  ${tw`mx-auto max-w-[450px] relative z-30`}
  ${tw`md:(max-w-[720px])`}
  ${tw`lg:(max-w-[1180px])`}
`;

// 上方三卡區
export const SCampaignTop = styled.div`
  ${tw`grid w-full grid-cols-2 gap-2 min-h-[180px]`}
  ${tw`md:(gap-4 px-[32px])`}
  ${tw`lg:(flex px-[86px] gap-x-3 min-h-[132px])`}
  a {
    ${tw`duration-500`}
    &:hover {
      ${tw`brightness-110`}
    }
  }
  a:nth-of-type(1) {
    ${tw`col-span-2`}
    ${tw`lg:max-w-[493px]`}
  }
  a:nth-of-type(2),
  a:nth-of-type(3) {
    ${tw`col-span-1`}
    ${tw`lg:max-w-[240px]`}
  }
  img {
    ${tw`drop-shadow-[0px_2px_4px_rgba(0, 0, 0, 0.25)]`}
  }
`;

// 下方箱子
export const SCampaignBot = styled.div`
  ${tw`mt-3`}
  ${tw`md:(mt-5)`}
  ${tw`lg:(mt-5)`}
  .discount {
    ${tw`inline-block w-[92vw] max-w-[370px]`}
    ${tw`md:(w-[600px]  max-w-none)`}
    ${tw`lg:(w-[790px])`}
  }
`;

// 箱子邊框
export const SLaserBorder = styled.div`
  ${tw`relative z-20 -mt-[4px] rounded-[12px] p-[2px] overflow-hidden `}
  ${tw`sm:(rounded-[16px] p-[3px] -mt-[5px] )`}
  ${tw`md:(-mt-[4px])`}
  ${tw`lg:(-mt-[2px] )`}

  .shiftbg {
    ${tw`absolute top-0 h-full left-[0] z-[0]`}
    ${tw`bg-[length:450px_100%] w-[900px] [animation:shiftingLeft_25s_linear_infinite]`}
    ${tw`md:(bg-[length:720px_100%] [animation:shiftingLeft_20s_linear_infinite]) w-[1440px] `}
    ${tw`lg:(bg-[length:1240px_100%] [animation:shiftingLeft_15s_linear_infinite]) w-[2480px] `}
  }
`;

// 彩色箱子
export const SLaserBox = styled.div`
  ${tw`rounded-[10px] p-2 bg-center bg-cover bg-no-repeat relative z-20 min-h-[626px]`}
  ${tw`md:(rounded-[14px] block p-4)`}
  ${tw`lg:(px-6 py-4  grid grid-cols-2 gap-3 min-h-[522px])`}
`;

// ============== 左區 ====================
// 左區框
export const SLeftBox = styled.div`
  ${tw` grid grid-cols-2 gap-2`}
  ${tw`md:(gap-4)`}
  ${tw`lg:(col-span-1 gap-3)`}
`;

// 左區瘋殺
export const SOnsaleFirstPd = styled.button`
  ${tw`bg-[#F9014B] overflow-hidden rounded-lg p-[3px]`}
  ${tw`md:(rounded-2xl p-1.5)`}
  &:hover .pd-img img {
    ${tw`brightness-110`}
  }
  .onsale-container {
    ${tw` overflow-hidden bg-white py-1 rounded-md mt-0.5`}
    ${tw`md:(rounded-xl px-2 pt-1.5 pb-[14px] mt-1)`}
  }
  .pd-img {
    ${tw`overflow-hidden text-center rounded-md  px-5`}
    ${tw`md:(px-6 rounded-xl)`}
    img {
      ${tw`bg-white inline-block w-full duration-500`}
      ${tw`md:(w-[240px] h-[240px])`}
      ${tw`lg:(w-[200px] h-[200px])`}
    }
  }
  p {
    ${tw`font-notosans font-medium text-[#070032] line-clamp-1 text-xs`}
    ${tw`md:(text-[24px] leading-[1.5] mt-2)`}
    ${tw`lg:(text-[15px] leading-[1.5] mt-1)`}
  }
`;

//  瘋殺原價
export const SPdMkPrice = styled.h5`
  ${tw`font-montserrat text-xs font-medium mr-0.5 leading-[1.2] line-through text-[#070032] opacity-50`}
  ${tw`md:(text-base mr-1 -ml-3)`}
  ${tw`lg:(text-xs  mr-1 -ml-3)`}
`;

//  瘋殺特價
export const SPdPrice = styled.h4`
  ${tw`font-montserrat italic leading-none text-[20px] font-extrabold text-[#F9014B]`}
  ${tw`md:(text-[42px])`}
  ${tw`lg:(text-[36px])`}
  span {
    ${tw`text-sm leading-[1.2] font-bold`}
    ${tw`lg:(text-lg leading-[1.2])`}
  }
`;

// 三小活動
export const SLeftBoxCampaign = styled.div`
  ${tw`grid grid-cols-1 relative py-1.5 gap-y-1`}
  ${tw`md:(py-3 gap-y-2)`}
  ${tw`lg:(py-2 gap-y-2.5)`}
  a {
    ${tw`block`}
    :hover >img {
      ${tw`brightness-110`}
    }
    img {
      ${tw`duration-500`}
    }
  }
  .laserBorder {
    ${tw`bg-cover h-[1px] block bg-no-repeat`}
  }
`;

// ============== 右區 ====================
export const SRightBox = styled.div`
  ${tw`grid gap-y-1  relative mt-2`}
  ${tw`md:(mt-4 gap-y-2)`}
  ${tw`lg:(col-span-1 mt-0)`}
`;

export const SRightSwiper = styled.div`
  ${tw`relative pb-2.5`}
  ${tw`md:(pb-4)`}
  ${tw`lg:(pb-4)`}
  a {
    ${tw`rounded-lg overflow-hidden`}
    ${tw`lg:rounded-xl`}
    &:hover >img {
      ${tw`brightness-110`}
    }
    > img {
      ${tw`duration-500`}
    }
  }
`;

export const SSliderTag = styled.div`
  ${tw`absolute right-1 top-0 w-[32%] flex justify-center items-center `}
  ${tw`sm:(w-[154px] right-1)`}
  ${tw`lg:(right-2)`}
  >p {
    ${tw`absolute z-10 text-center whitespace-nowrap text-white font-notosans text-[12px] leading-none`}
    ${tw`sm:(text-[15px] font-medium tracking-tighter)`}
  }
  > img {
    ${tw`w-full drop-shadow-[1px_2px_1px_rgba(0,0,0,0.5)]`}
  }
`;

// 自訂點點
export const SRightBoxSwiperPagination = styled.div`
  ${tw`absolute flex justify-center !left-1/2 -translate-x-1/2 !bottom-0`}
  span {
    ${tw`w-[5px] h-[5px] opacity-100 bg-[#C2C2C2] duration-200 !mx-0.5`}
    ${tw`md:(w-2 h-2 !mx-1)`}
    &.swiper-pagination-bullet-active {
      ${tw`w-6 bg-[#070032] rounded-lg`}
      ${tw`lg:w-6`}
    }
  }
`;

// 右下小活動
export const SRightBoxCampaign = styled.div`
  ${tw`flex`}
  ${tw`md:()`}
  ${tw`lg:(py-1.5)`}
  .laserBorder {
    ${tw`bg-cover shrink-0 w-[1px] bg-center block bg-no-repeat mx-1.5 mt-1.5 h-[calc(100%-12px)]`}
  }
  a:hover img {
    ${tw`brightness-110`}
  }
  img {
    ${tw`duration-500`}
  }
`;

// ============== 底區 ====================
export const SFooterBox = styled.div`
  ${tw`mt-2 p-2 rounded-lg`}
  ${tw`md:(rounded-2xl mt-4 p-4)`}
  ${tw`lg:(rounded-xl col-span-2 mt-0 px-[45px] py-2 flex justify-center items-center)`}
  background: linear-gradient(180deg, rgba(0, 49, 174, 0.80) 0%, rgba(54, 93, 232, 0.80) 68.23%, rgba(2, 46, 204, 0.80) 100%);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.65) inset;
  // 直文字
  h4 {
    ${tw`text-white font-notosans font-bold leading-[1.3] tracking-widest text-[21px] mr-[11px] hidden`}
    ${tw`lg:(block)`}
    writing-mode: vertical-lr;
    text-shadow: 0px 2px 4px #000;
  }

  .coupon-card {
    ${tw`col-span-1`}
    ${tw`lg:(max-w-[420px])`}
    &:hover img {
      ${tw`brightness-110`}
    }
    img {
      ${tw`duration-500`}
    }
  }
`;

export const SCouponGroup = styled.div`
  ${tw`grid gap-y-1`}
  ${tw`md:(grid-cols-1 gap-y-2)`}
  ${tw`lg:(grid-cols-2 gap-1.5)`}
`;

export const SMoreBtnBorder = styled.div`
  ${tw`rounded-full my-auto p-[1px] overflow-hidden relative w-[134px] h-[36px] mx-auto mt-1`}
  ${tw`md:(w-[300px] h-[82px] mt-2)`}
  ${tw`lg:(p-0.5 w-[152px] h-[54px] shrink-0 m-auto ml-[11px])`}
  span {
    ${tw`block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[300%] bg-no-repeat bg-center duration-500`}
  }
  &:hover {
    span {
      ${tw`rotate-45`}
    }
    img {
      ${tw`scale-[0.85]`}
    }
  }
`;

export const SMoreBtn = styled.a`
  ${tw`px-4 py-2 rounded-full relative overflow-hidden flex justify-center items-center bg-[#070032] w-full h-full`}

  p {
    ${tw`font-notosans text-[13px] font-normal tracking-wider text-white whitespace-nowrap`}
    ${tw`md:(text-[27px])`}
    ${tw`lg:(text-[18px])`}
  }
  img {
    ${tw`w-3 h-3 ml-0.5 duration-200`}
    ${tw`md:(ml-1 w-5 h-5)`}
  }
`;
