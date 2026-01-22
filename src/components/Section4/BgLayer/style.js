import tw, { styled } from 'twin.macro';
/********************/
/*背景樣式
/********************/
export const SBGLayer = styled.div`
  ${tw`!absolute top-0 left-0 right-0 bottom-0 !z-0 overflow-hidden pointer-events-none`}
  ${tw`flex flex-col justify-end items-center`}
  ${tw`[background:linear-gradient(180deg,_#DAB54E_0%,_rgba(255,_255,_180,_0.00)_44.22%)]`}
  .deco {
    ${tw`absolute top-[460px] z-[10]`}
  }
  .deco:nth-of-type(1) {
    ${tw`right-1/2 mr-[620px]`}
  }
  .deco:nth-of-type(2) {
    ${tw`left-1/2 ml-[620px]`}
  }
`;
