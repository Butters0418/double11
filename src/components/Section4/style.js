import tw, { styled } from 'twin.macro';

export const SPageContainer = styled.div`
  ${tw`relative`}
  > * {
    ${tw`relative z-[1]`}
  }
  ${tw`bg-no-repeat bg-top bg-[length:100%_100%]`}
  ${tw`md:pt-4 pb-8`}
`;
