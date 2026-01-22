import tw, { styled } from 'twin.macro';
export const SPageContainer = styled.div`
  ${tw`relative`}
  > * {
    ${tw`relative z-[1]`}
  }
  ${tw`flex w-full flex-col gap-4 pt-4 pb-16`}
  ${tw`md:min-h-[1200px]`}
  ${tw`before:(absolute top-0 left-0 z-[1] w-full h-[140px] [background:linear-gradient(180deg,_#010E5C_50%,_rgba(255,255,255,0)_100%)])`}
  ${tw`lg:(before:content-[''])`}
`;
