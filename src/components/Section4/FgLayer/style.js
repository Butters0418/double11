import tw, { styled } from 'twin.macro';
/********************/
/*背景樣式
/********************/
export const SFGLayer = styled.div`
  ${tw`!absolute top-0 left-0 w-full h-full !z-[0] overflow-hidden pointer-events-none`}
  .bgGradient {
    ${tw`absolute left-1/2 -translate-x-1/2 z-auto`}
    ${tw`-bottom-[20px] scale-[30%] origin-bottom`}
    ${tw`md:(-bottom-[50px] scale-[63%])`}
    ${tw`lg:(-bottom-[87px] scale-100)`}
  }
  .deco {
    ${tw`absolute z-auto origin-bottom`}
    ${tw`-bottom-[30px] scale-[63%]`}
    ${tw`lg:(-bottom-[30px] scale-100)`}
  }
  .deco:nth-of-type(1) {
    ${tw`right-1/2`}
    ${tw`mr-[320px]`}
    ${tw`lg:(mr-[620px])`}
  }
  .deco:nth-of-type(2) {
    ${tw`left-1/2`}
    ${tw`ml-[320px]`}
    ${tw`lg:(ml-[620px])`}
  }
  .deco-s {
    ${tw`absolute bottom-0 md:bottom-[32px] left-1/2 -translate-x-1/2 z-auto`}
  }
`;
