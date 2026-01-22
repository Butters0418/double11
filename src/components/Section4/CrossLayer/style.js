import tw, { styled } from 'twin.macro';
/********************/
/*跨區樣式
/********************/
export const SCrossSectionLayer = styled.div`
  ${tw`absolute top-0 left-1/2 -translate-x-1/2 z-[0] overflow-hidden pointer-events-none`}
  ${tw` w-full h-full mt-[-180px]`}
  .deco-ribbon {
    ${tw`relative top-0 left-1/2 -translate-x-1/2 z-auto`}
  }
`;
