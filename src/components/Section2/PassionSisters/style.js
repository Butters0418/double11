import tw, { styled } from 'twin.macro';
/********************/
/*區塊內容
/********************/
// 外殼
export const SContainWrap = styled.div`
  ${tw`relative m-auto bg-[length:100%_100%]`}

  ${tw`rounded-tl-[200px] rounded-tr-[12px] rounded-b-[12px]`}

  ${tw`lg:(rounded-tl-[280px] rounded-tr-[24px] rounded-b-[24px])`}
  
  ${tw`max-w-[450px] p-[2px]`}
  ${tw`md:(w-[720px] max-w-none)`}
  ${tw`lg:(w-[1240px] p-[3px])`}

  /* ${tw`h-[1480px]`} */
  ${tw`md:(h-[794px])`}
  ${tw`lg:(h-[708px])`}

  ${tw`md:(mt-[90px])`}
  ${tw`lg:(mt-0 overflow-hidden)`}
  .border-layer {
    ${tw`absolute top-0 left-0 w-full h-full z-[0] overflow-hidden`}
    ${tw`rounded-tl-[200px] rounded-tr-[12px] rounded-b-[12px]`}
    ${tw`lg:(rounded-tl-[280px] rounded-tr-[24px] rounded-b-[24px])`}
    .shiftbg {
      ${tw`absolute top-0 h-full left-[0] z-[0]`}
      ${tw`bg-[length:450px_100%] w-[900px] [animation:shiftingLeft_25s_linear_infinite]`}
      ${tw`md:(bg-[length:720px_100%] [animation:shiftingLeft_20s_linear_infinite]) w-[1440px] `}
      ${tw`lg:(bg-[length:1240px_100%] [animation:shiftingLeft_15s_linear_infinite]) w-[2480px] `}
    }
  }
`;
// 表層
export const SContainBox = styled.div`
  ${tw`relative flex w-full h-full z-[2]`}
  ${tw`bg-[linear-gradient(72deg,#ffd978_-0.79%,#f2b0d8_32.06%,#a394ff_69.61%,#d3d8ff_99.33%)]`}
  
  ${tw`pt-[0px] pb-[10px] pl-[10px] pr-[10px]`}
  ${tw`lg:(pt-[9px] pb-[9px] pl-[0px] pr-[13px])`}

  ${tw`rounded-tl-[200px] rounded-tr-[12px] rounded-b-[12px]`}
  ${tw`lg:(rounded-tl-[280px] rounded-tr-[24px] rounded-b-[24px])`}
  
  ${tw`flex-col items-center justify-start`}
  ${tw`md:justify-end`}
  ${tw`lg:(flex-row justify-center)`}
`;
// 左欄
export const SBoxLeft = styled.div`
  ${tw`flex items-center justify-center grow-0 shrink-0`}

  ${tw`w-full`}
  ${tw`md:(w-[720px])`}
  ${tw`lg:(w-[350px])`}
  img {
    ${tw`w-full duration-500`}
    ${tw`lg:(w-[350px])`}
  }
  &:hover img {
    ${tw`brightness-110`}
  }
`;
// 右欄
export const SBoxRight = styled.div`
  ${tw`relative bg-white overflow-hidden`}
  ${tw`grid grow-0 shrink-0`}

  ${tw`grid-cols-2`}
  ${tw`md:(grid-cols-4)`}

  ${tw`rounded-[8px] p-[6px] gap-[6px]`}
  ${tw`md:(p-[8px] gap-[8px])`}
  ${tw`lg:(rounded-[16px] px-[0px] py-[8px] gap-[0px])`}
  
  ${tw`lg:(w-[784px])`}
`;
