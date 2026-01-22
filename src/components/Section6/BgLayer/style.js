import tw, { styled } from 'twin.macro';
/********************/
/*背景樣式
/********************/
export const SBGLayer = styled.div`
  ${tw`!absolute top-0 left-0 right-0 bottom-0 !z-0 overflow-hidden pointer-events-none`}
  ${tw`flex flex-col justify-end items-center`}
  ${tw`before:(content-[attr(before)] absolute bottom-0 left-0 z-[-1] w-full h-[762px])`}
  ${tw`before:[background:linear-gradient(180deg,_rgba(76,_77,_234,_0),_#ffeff0)]`}
  ${tw`bg-[#0f0769]`}
  .bg-pattern {
    ${tw`absolute bottom-0 left-1/2 -translate-x-1/2 z-[1]`}
  }
`;
