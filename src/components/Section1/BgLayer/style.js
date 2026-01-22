import tw, { styled } from 'twin.macro';

export const SBGLayer = styled.div`
  ${tw`!absolute top-0 left-0 right-0 bottom-0 !z-0 overflow-hidden pointer-events-none`}
  ${tw`flex flex-col justify-end items-center`}
  ${tw`[background:linear-gradient(180deg,_#010E5C_42.71%,_#5051EE_100%)] `}

  .deco {
    ${tw`absolute top-[680px] z-[10]`}
  }
  .deco:nth-of-type(1) {
    ${tw`right-1/2 mr-[620px]`}
  }
  .deco:nth-of-type(2) {
    ${tw`left-1/2 ml-[620px]`}
    ${tw`-scale-x-100`}
  }
  .deco-grid {
    ${tw`absolute top-0 left-1/2 -translate-x-1/2 z-[10]`}
  }

  .bg-grid {
    ${tw`absolute top-0 left-1/2 -translate-x-1/2 z-[-1]`}
    ${tw`w-[768px] md:w-[1240px] lg:w-full max-w-none h-[42.71%] max-h-[721px] lg:opacity-80`}
    ${tw`lg:object-fill`}
  }
`;
