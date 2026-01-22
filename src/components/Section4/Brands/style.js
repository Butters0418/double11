import tw, { styled } from 'twin.macro';

// 自訂點點
export const SBrandsPagination = styled.div`
  ${tw`flex justify-center`}
  span {
    ${tw`w-[5px] h-[5px] opacity-100 bg-white duration-200 !mx-0.5`}
    ${tw`md:(w-2 h-2 !mx-1)`}
    &.swiper-pagination-bullet-active {
      ${tw`w-6 bg-[#0085FF] rounded-lg`}
      ${tw`lg:w-12`}
    }
  }
`;
