import tw, { styled } from 'twin.macro';
/********************/
/*背景樣式
/********************/
export const SBGLayer = styled.div`
  ${tw`!absolute top-0 left-0 right-0 bottom-0 !z-0 overflow-hidden pointer-events-none`}
  ${tw`flex flex-col justify-start items-center`}
  ${tw`[background:linear-gradient(180deg,_#5051ee_0%,_#8485ff_14.06%,_rgba(255,_184,_227,_0.97)_48.44%,_#5051ee_100%)]`}
  .img-girls {
    ${tw`w-[1260px] h-[260px] max-w-none`}
  }
  .deco {
    ${tw`absolute top-[560px] z-[0]`}
  }
  .deco:nth-of-type(1) {
    ${tw`right-1/2 mr-[580px]`}
  }
  .deco:nth-of-type(2) {
    ${tw`left-1/2 ml-[580px]`}
  }
  .deco-grid {
    ${tw`absolute top-0 left-1/2 -translate-x-1/2 z-[0]`}
  }
`;
