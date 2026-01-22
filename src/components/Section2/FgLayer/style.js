import tw, { styled } from 'twin.macro';
/********************/
/*前景樣式
/********************/
export const SFGLayer = styled.div`
  ${tw`!absolute top-0 left-0 right-0 bottom-0 !z-[2] overflow-hidden pointer-events-none`}
  ${tw`flex flex-row justify-center items-end gap-x-[1100px]`}
  .img-girl-l {
    ${tw`w-[160px] h-[573px] max-w-none`}
    ${tw`translate-x-[30px]`}
  }
  .img-girl-r {
    ${tw`w-[163px] h-[575px] max-w-none`}
  }
  .deco {
    ${tw`absolute top-0 left-1/2 -translate-x-1/2 z-[1]`}
    img {
      ${tw`w-[375px] h-[152px] max-w-none`}
      ${tw`md:(w-[930px] h-[376px])`}
      ${tw`lg:(w-[1768px] h-[715px])`}
    }
  }
`;
