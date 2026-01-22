import tw, { styled } from 'twin.macro';

export const SBtnBorder = styled.a`
  ${tw`rounded-[6px] p-[1.5px] block bg-center bg-no-repeat bg-cover`}
  ${tw`lg:(p-0.5 rounded-[10px])`}
`;

export const SBtnContent = styled.div`
  ${tw`rounded-[5px] relative overflow-hidden`}
  ${tw`lg:(rounded-[9px])`}
  span {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500`}
    ${tw`bg-center bg-no-repeat bg-cover w-[150%] h-[150%]`}
    ${tw`group-hover:(rotate-45)`}
  }
  img {
    ${tw`relative z-20`}
  }
`;
