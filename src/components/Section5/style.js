import tw, { styled } from 'twin.macro';
export const SPageContainer = styled.div`
  ${tw`relative px-3`}
  > * {
    ${tw`relative z-[1]`}
  }
  ${tw`pb-32`}
`;
export const SBgLayer = styled.div`
  ${tw`!absolute top-0 left-0 right-0 bottom-0 !z-0 overflow-hidden pointer-events-none`}
  ${tw`flex flex-col justify-end items-center`}
  ${tw`[background:linear-gradient(180deg,_#140C01_0%,_#000153_51.56%,_#0F0769_81.77%)]`}
  .deco {
    ${tw`absolute top-[200px] z-[10]`}
  }
  .deco:nth-of-type(1) {
    ${tw`right-1/2 mr-[620px]`}
  }
  .deco:nth-of-type(2) {
    ${tw`left-1/2 ml-[620px]`}
  }
  .deco-grid {
    ${tw`absolute top-[48px] left-1/2 -translate-x-1/2 z-[10] origin-top scale-y-[0.8] md:scale-y-[0.4]`}
  }
`;
