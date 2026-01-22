import tw, { styled } from 'twin.macro';

export const SCounterTitle = styled.h3`
  ${tw`text-white font-notosans text-sm leading-normal font-bold text-center`}
  ${tw`md:(tracking-wider text-[20px] leading-normal )`}
  text-shadow: 0px 0px 4px #000;
`;

export const SCountdownContainer = styled.div`
  ${tw`relative mt-1`}
  img {
    ${tw`relative w-[176px] drop-shadow-2xl`}
    ${tw`md:(w-[263px])`}
  }
`;

export const SNumContainer = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 text-white`}
  p {
    ${tw`font-semibold font-notosans text-xs leading-none`}
    ${tw`md:(text-base leading-none)`}
  }
  h3 {
    ${tw`mr-0.5 font-montserrat font-bold leading-none text-center text-base `}
    ${tw`md:(mr-1 text-[24px] leading-none)`}
  }
`;
