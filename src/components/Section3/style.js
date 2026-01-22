import tw, { styled } from 'twin.macro';

export const SPageContainer = styled.div`
  ${tw`relative`}
  > * {
    ${tw`relative z-[1]`}
  }
  ${tw`md:pt-4 pb-32`}
`;
export const SBgLayer = styled.div`
  ${tw`!absolute top-0 left-0 right-0 bottom-0 !z-0 overflow-hidden pointer-events-none`}
  ${tw`flex flex-col justify-end items-center`}
  ${tw`[background:linear-gradient(180deg,_#5252ee_0%,_#000153_51.56%,_#dab44d_81.77%)]`}
`;
