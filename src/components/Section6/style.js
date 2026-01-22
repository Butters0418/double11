import tw, { styled } from 'twin.macro';

export const SPageContainer = styled.div`
  ${tw`relative`}
  > * {
    ${tw`relative z-[1]`}
  }
  ${tw`md:pt-4 pb-32`}
`;
