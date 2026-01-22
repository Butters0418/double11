import tw, { styled } from 'twin.macro';
/********************/
/*區塊內容
/********************/
//大外層
export const SContainLayer = styled.div`
  ${tw`relative flex m-auto overflow-hidden`}
  ${tw`mt-[32px]`}

  ${tw`flex-col items-center`}
  ${tw`md:(items-end justify-end)`}
  ${tw`lg:(flex-row)`}

  ${tw`w-full px-[12px] pb-[138px]`}
  ${tw`md:(w-[720px] p-[12px])`}
  ${tw`lg:(w-[1240px] h-[396px] p-[16px])`}
`;

/************************/
/*左欄*/
/************************/
export const SContainLeft = styled.div`
  ${tw`relative z-[2] shrink-0 grow-0`}
  ${tw`w-[375px] overflow-hidden`}
  ${tw`md:(w-full h-[166px] overflow-visible)`}
  ${tw`lg:(w-[200px] h-full)`}
`;
export const SLeftBox = styled.div`
  ${tw`relative bg-top m-auto bg-no-repeat`}
  ${tw`lg:(absolute left-0 bottom-[-8px] z-auto)`}

  ${tw`h-[159px] px-[16px]`}
  ${tw`md:(w-[636px] h-[166px])`}
  ${tw`lg:(w-[370px] h-[400px] pt-[64px] px-[50px])`}

  .boxbg {
    ${tw`absolute top-0 left-0 z-[0] duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-full h-full`}
  }
  &:hover .boxbg {
    ${tw`brightness-[1.10] contrast-[1.10]`}
  }
  &:hover {
    img {
      ${tw`brightness-110`}
    }
  }
`;

export const SCardLeft = styled.a`
  ${tw`relative w-full h-full z-[0]`}
  ${tw`flex items-center justify-center`}
  ${tw`lg:(block)`}
  
  ${tw`md:(pr-[64px])`}
  ${tw`lg:(pl-[0px] pr-[0px])`}

  .info-box {
    ${tw`w-full`}
    ${tw`pl-[20px] space-y-[4px]`}
    ${tw`md:(pt-[50px] pl-[70px] space-y-[4px])`}
    ${tw`lg:(pt-[0px] pl-[0px] space-y-[0px])`}
    p {
      ${tw`relative w-full text-center`}
      ${tw`font-notosans font-bold`}
      ${tw`leading-[120%] text-white`}
      ${tw`text-[24px]`}
      ${tw`md:(text-[26px])`}
      ${tw`lg:(text-[36px])`}
      text-shadow: 2px 0px 0px #464646, 0px 2px 0px #464646, 0px 0px 2px #464646;
    }

    h3 {
      ${tw`relative w-full text-center`}
      ${tw`font-notosans font-medium`}
      ${tw`leading-[120%] tracking-[0.02em] text-white`}
      ${tw`text-[17px]`}
      ${tw`md:(text-[18px])`}
      ${tw`lg:(text-[24px])`}
      text-shadow: 2px 0px 0px #464646, 0px 2px 0px #464646, 0px 0px 2px #464646;
    }
  }
  .img-box {
    ${tw`grow-0 shrink-0`}
    ${tw`md:(w-[220px])`}
    ${tw`lg:(w-full)`}
    img {
      ${tw`m-auto duration-500`}
      ${tw`w-[145px] h-[145px]`}
      ${tw`md:(w-[156px] h-[156px])`}
      ${tw`lg:(w-[225px] h-[225px] mt-[16px])`}
    }
  }
`;
export const SBtnMore = styled.a`
  ${tw`absolute z-[1] overflow-hidden select-none`}
  ${tw`flex justify-center items-center shrink-0`}

  ${tw`w-[52px] h-[25px] top-3/4 left-1/4 mt-[10px] text-[12px] font-semibold`}
  ${tw`md:(w-[54px] h-[28px] left-auto top-2/3 right-[26px] mt-[0px] text-[14px] font-bold)`}
  ${tw`lg:(w-[52px] h-[40px] top-3/4 right-[20px] text-[16px] font-medium)`}

  ${tw`rounded-l-[25px] rounded-r-[25px]`}
  ${tw`md:(rounded-l-[25px] rounded-r-[0px])`}
  box-shadow: -4px 2px 4px 0px rgba(0, 0, 0, 0.25);
  span {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-[150%] h-[150%]`}
    ${tw`group-hover:(rotate-45)`}
  }
`;

/************************/
/*右欄*/
/************************/
export const SContainRight = styled.div`
  ${tw`relative z-[1] shrink-0 grow-0`}
  ${tw`w-full h-full`}
  ${tw`max-w-[450px]`}
  ${tw`md:(max-w-none)`}
  ${tw`lg:(w-[1008px] pt-[12px])`}
`;
// 右欄頂部
export const SContainTop = styled.div`
  ${tw`absolute top-[0px] right-[6px] z-[0]`}
  ${tw`bg-bottom rounded-full`}
  ${tw`w-full h-[24px] skew-x-[45deg] brightness-90 saturate-[80%]`}
`;
// 右欄外框
export const SContainWrap = styled.div`
  ${tw`relative bg-[length:100%_100%]`}
  ${tw`w-full h-full overflow-hidden`}
  ${tw`lg:drop-shadow-[0px 6px 12px rgba(0, 9, 86, 0.25)]`}
  ${tw`rounded-[12px]`}
  ${tw`p-[3px]`}

  .shiftbg {
    ${tw`absolute top-0 h-full left-0 z-[0]`}
    ${tw`bg-[length:450px_100%] w-[900px] [animation:shifting_25s_linear_infinite]`}
    ${tw`md:(bg-[length:696px_100%] [animation:shifting_20s_linear_infinite]) w-[1392px]`}
    ${tw`lg:(bg-[length:1008px_100%] [animation:shifting_15s_linear_infinite]) w-[2016px]`}
  }
`;

// 產品
export const SContainBox = styled.div`
  ${tw`relative z-[2]`}
  ${tw`w-full h-full bg-cover rounded-[10px]`}

  ${tw`grid grid-cols-2`}
  ${tw`md:(grid-cols-4)`}
  ${tw`lg:(flex flex-row justify-end)`}

  ${tw`gap-[8px] p-[16px]`}
  ${tw`md:(gap-[8px] p-[8px])`}
  ${tw`lg:(gap-[12px] p-[12px])`}
  >* {
    ${tw`md:(w-[160px])`}
    ${tw`lg:(w-[196px])`}
  }
`;
