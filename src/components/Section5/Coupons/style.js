import tw, { styled } from 'twin.macro';

// 箱子邊框
export const SLaserBorder = styled.div`
  ${tw`relative overflow-hidden z-20 -mt-[2px] rounded-[12px] bg-cover bg-top bg-no-repeat p-[2px]`}
  ${tw`sm:(rounded-[16px] p-[3px]  -mt-[1px])`}
  .shiftbg {
    ${tw`absolute top-0 h-full left-[0] z-[0]`}
    ${tw`bg-[length:450px_100%] w-[900px] [animation:shiftingLeft_25s_linear_infinite]`}
      ${tw`md:(bg-[length:720px_100%] [animation:shiftingLeft_20s_linear_infinite]) w-[1440px] `}
      ${tw`lg:(bg-[length:1240px_100%] [animation:shiftingLeft_15s_linear_infinite]) w-[2480px] `}
  }
`;

// 彩色箱子
export const SLaserBox = styled.div`
  ${tw`relative z-[2]`}
  ${tw`rounded-[10px] px-1 pt-2 pb-4 bg-center  bg-cover bg-no-repeat`}
  ${tw`sm:(p-2 rounded-[14px] pb-4 )`}
  ${tw`lg:(p-3 pb-8)`}
`;

// 折價券背景邊框
export const SCouponContainerBorder = styled.div`
  ${tw`rounded-[12px] p-[1px] bg-cover bg-center bg-no-repeat`}
  ${tw`sm:(p-0.5 rounded-[16px])`}
`;

// 折價券背景
export const SCouponContainer = styled.div`
  ${tw`rounded-[10px] overflow-hidden`}
  ${tw`sm:(rounded-[14px])`}
  background: linear-gradient(180deg, #01196C 0%, #708FFF 68.23%, rgba(20, 60, 205, 0.99) 100%);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8) inset;
`;

// 折價券上方區-全站券
export const SCouponTop = styled.div`
  ${tw`grid grid-cols-1 gap-y-2 p-3`}
  ${tw`md:(grid-cols-2 gap-x-2 p-3 py-3 px-6)`}
  ${tw`lg:(p-5 gap-x-5)`}
`;

// 折價券下方區-品類券
export const SCouponBot = styled.div`
  ${tw`overflow-hidden py-3 relative before:absolute after:absolute`}
  ${tw`lg:(py-4)`}
  background: linear-gradient(90deg, rgba(130, 166, 225, 0.00) -0.04%, #3D48AF 8.92%, #1C2C8D 49.5%, #233892 91.16%, rgba(129, 151, 221, 0.00) 101.17%);
  &:before {
    ${tw`z-20 w-[144px] h-[244px] bottom-0 -left-10 hidden lg:block`}
    background: linear-gradient(-324deg, #000836 3.78%, rgba(38, 50, 151, 0.00) 36.41%);
  }
  &:after {
    ${tw`z-20 w-[144px] h-[244px] bottom-0 -right-10 hidden lg:block`}
    background: linear-gradient(324deg, #000836 3.78%, rgba(38, 50, 151, 0.00) 36.41%);
  }
`;

// 折價券1
export const SCoupon1 = styled.div`
  ${tw`relative`}
  // 左下時間
  h5 {
    ${tw`absolute text-xs left-0.5 tracking-normal bottom-0.5 leading-[1.2] font-medium  text-[#070032] font-montserrat flex justify-start items-center whitespace-nowrap`}
    ${tw`lg:(left-2.5 bottom-2.5 tracking-wide)`}
    img {
      ${tw` w-[14px] h-[14px] mr-0.5`}
      ${tw`lg:(w-[15px] h-[15px] mr-1)`}
    }
  }
`;

// 折價券2
export const SCoupon2 = styled.div`
  ${tw`relative`}
  ${tw`lg:()`}
  // 左下時間
  h5 {
    ${tw`absolute text-xs left-0.5 tracking-normal bottom-0.5 leading-[1.2] font-medium  text-[#070032] font-montserrat flex justify-start items-center whitespace-nowrap`}
    ${tw`lg:(left-2 bottom-1.5 tracking-wide)`}
    img {
      ${tw` w-[14px] h-[14px] mr-0.5`}
      ${tw`lg:(w-[15px] h-[15px] mr-1)`}
    }
  }
`;

// 折價券1 資訊
export const SCouponInfo1 = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 flex py-1 justify-between items-center pb-5`}
  ${tw`lg:(py-2)`}
  .left {
    ${tw`w-[70px] mr-1 shrink-0 -mt-0 p-1 pr-1.5 ml-[1.5px] rounded-[0px_47px_47px_0px] bg-white text-center text-[13px] font-notosans  leading-[1.3] font-normal line-clamp-2`}
    ${tw`lg:(w-[125px] mr-[15px] -mt-2 text-[18px] ml-0.5)`}
  }
  .mid {
    ${tw`mr-auto text-[#070032] text-left -mt-0 pr-1`}
    ${tw`lg:(-mt-2 pr-2)`}
    p {
      ${tw`font-notosans  leading-[1.5] font-medium line-clamp-2 text-sm`}
      ${tw`lg:(text-[20px])`}
    }
    h4 {
      ${tw`font-montserrat leading-none font-bold italic text-[36px]`}
      ${tw`lg:(text-[56px])`}
      span {
        ${tw`font-semibold mr-0.5 text-[0.7em] relative bottom-1`}
        ${tw`lg:(mr-1)`}
      }
    }
  }
  .right {
    ${tw`w-[96px] h-full flex shrink-0 border-l-2 px-1.5 border-[#070032] border-dotted`}
    ${tw`lg:(px-2.5 w-[170px] border-l-4 )`}
  }
  button {
    ${tw`relative overflow-hidden`}
    ${tw`rounded-full my-auto p-[1px] bg-cover bg-no-repeat bg-center overflow-hidden`}
    ${tw`lg:(p-0.5)`}
    .borderbg {
      ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] duration-500`}
      ${tw`bg-no-repeat bg-center bg-cover w-[250%] h-[250%]`}
    }
    &:hover .borderbg {
      ${tw`rotate-45`}
    }
    p {
      ${tw`relative z-[1]`}
      ${tw`rounded-full text-center font-notosans w-[75px] h-[27px]  text-[13px] leading-none font-normal tracking-wider whitespace-nowrap text-white bg-[#0085FF] flex justify-center items-center`}
      ${tw`lg:(w-[130px] h-[44px] text-2xl )`}
    }
  }
`;

// 折價券2 資訊
export const SCouponInfo2 = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 flex py-1 justify-between items-center`}
  ${tw`lg:(py-2)`}
  .left {
    ${tw`w-[70px] mr-1 shrink-0 -mt-2.5 p-1 pr-1.5 ml-[1.5px] rounded-[0px_47px_47px_0px] bg-white text-center text-[12px] font-notosans  leading-[1.3] font-normal line-clamp-2`}
    ${tw`lg:(w-[88px] mr-[6px] -mt-2 text-[15px] ml-0.5  leading-[1.3])`}
  }
  .mid {
    ${tw`mr-auto text-[#070032] text-left -mt-3 pr-1`}
    ${tw`lg:( pr-2)`}
    p {
      ${tw`font-notosans  leading-[1.5] font-medium line-clamp-2 text-[13px]`}
    }
    h4 {
      ${tw`font-montserrat leading-none font-bold italic text-[24px]`}
      ${tw`lg:(text-[24px])`}
      span {
        ${tw`font-semibold mr-0.5 text-[0.7em] relative bottom-0.5`}
        ${tw`lg:(mr-0.5)`}
      }
    }
  }
  .right {
    ${tw`w-[96px] h-full flex shrink-0 border-l-2 px-1.5 border-[#070032] border-dotted`}
    ${tw`lg:(px-2.5 w-[124px] border-l-4 )`}
  }
  button {
    ${tw`relative overflow-hidden`}
    ${tw`rounded-full my-auto p-[1px] bg-cover bg-no-repeat bg-center overflow-hidden`}
    ${tw`lg:(p-[1.5px])`}
    .borderbg {
      ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] duration-500`}
      ${tw`bg-no-repeat bg-center bg-cover w-[250%] h-[250%]`}
    }
    &:hover .borderbg {
      ${tw`rotate-45`}
    }

    p {
      ${tw`relative z-[1]`}
      ${tw`rounded-full text-center font-notosans text-[13px] w-[75px] h-[27px] leading-none font-medium tracking-wider whitespace-nowrap text-white bg-[#0085FF] flex justify-center items-center`}
      ${tw`lg:(w-[90px] h-[36px] text-[16px ] )`}
    }
  }
`;

// 自訂點點
export const SCouponPagination = styled.div`
  ${tw`flex justify-center mt-2`}
  ${tw`lg:(mt-3)`}
  span {
    ${tw`w-[5px] h-[5px] opacity-100 bg-white duration-200 !mx-0.5`}
    ${tw`md:(w-2 h-2 !mx-1)`}
    &.swiper-pagination-bullet-active {
      ${tw`w-6 bg-[#0085FF] rounded-lg`}
      ${tw`lg:w-12`}
    }
  }
`;

// 一鍵全領按鈕
export const SGetAllBtnBorder = styled.div`
  ${tw`relative overflow-hidden`}
  ${tw`duration-200 rounded-full my-auto p-[1px] bg-cover bg-no-repeat bg-center overflow-hidden`}
  ${tw`lg:(p-0.5)`}
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25) inset, 2px 4px 8px 0px rgba(0, 0, 0, 0.25);

  .borderbg {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-[250%] h-[250%]`}
  }
  &:hover .borderbg {
    ${tw`rotate-45`}
  }
`;

export const SGetAllBtn = styled.a`
  ${tw`relative z-[1]`}
  ${tw`rounded-full text-white relative overflow-hidden px-[70px] py-[12px] block duration-200`}

  ${tw`lg:(py-[14px] px-[100px])`}
  background-image: linear-gradient(270deg, #0E2476 0.08%, #374CAE 58.45%, #7E92DA 100.15%);
  box-shadow:
    0px 0px 12px 0px rgba(0, 0, 0, 0.25) inset,
    2px 4px 8px 0px rgba(0, 0, 0, 0.25);
  h3 {
    ${tw`text-center font-notosans font-bold leading-none tracking-widest text-[24px]`}
    ${tw`lg:(text-[32px])`}
  }
  p {
    ${tw`text-center font-notosans leading-none tracking-wider font-normal text-[12px] mt-1`}
    ${tw`lg:(mt-2 text-base  leading-none)`}
  }
  img {
    ${tw`absolute -right-1 -bottom-2 w-[60px]`}
    ${tw`lg:(-right-2 -bottom-3 w-[90px])`}
  }
`;

// 看更多按鈕
export const SMoreBtnBorder = styled.div`
  ${tw`relative overflow-hidden`}
  ${tw`rounded-full my-auto p-[1px] bg-cover bg-no-repeat bg-center overflow-hidden`}
  ${tw`lg:(p-0.5)`}

  .borderbg {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-[250%] h-[250%]`}
  }
  &:hover .borderbg {
    ${tw`rotate-45`}
  }
`;

export const SMoreBtn = styled.a`
  ${tw`relative z-[1]`}
  ${tw`px-4 py-2 rounded-full relative overflow-hidden flex justify-center items-center bg-[#eae4f5]`}
  ${tw`lg:(py-[26px] px-[45px])`}
  p {
    ${tw`font-notosans text-[13px] font-normal tracking-wider`}
    ${tw`text-[18px]`}
  }
  img {
    ${tw`ml-1`}
  }
`;
