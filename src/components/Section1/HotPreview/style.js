import tw, { styled } from 'twin.macro';

export const SSliderCard = styled.a`
  ${tw`relative overflow-hidden rounded-[4px] block`}
  ${tw`lg:(rounded-[6px])`}
  >img {
    ${tw`relative z-[0] w-full duration-500`}
  }
  &:hover > img {
    ${tw`brightness-110`}
  }
`;

export const SSliderTag = styled.div`
  ${tw`absolute right-1 top-0 w-[32%] z-[1] flex justify-center items-center `}
  ${tw`sm:(w-[154px] right-1)`}
  ${tw`lg:(right-1)`}
  >p {
    ${tw`absolute z-10 text-center whitespace-nowrap text-white font-notosans text-[12px] leading-none`}
    ${tw`sm:(text-[15px] font-medium tracking-tighter)`}
  }
  > img {
    ${tw`w-full drop-shadow-[1px_2px_1px_rgba(0,0,0,0.5)]`}
  }
`;

export const SHotPreviewPagination = styled.div`
  ${tw`flex justify-center mt-[2%]`}
  ${tw`lg:(mt-[2.2%])`}
  span {
    ${tw`w-[5px] h-[5px] opacity-100 bg-white duration-200 !mx-0.5`}
    ${tw`md:(w-2 h-2 !mx-1)`}
    &.swiper-pagination-bullet-active {
      ${tw`w-6 bg-[#0085FF] rounded-lg`}
    }
  }
`;
