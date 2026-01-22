import tw, { styled } from 'twin.macro';
/********************/
/*區塊內容
/********************/

export const SBlockTitle = styled.div`
  ${tw`relative z-[1] flex min-h-[76px] w-full items-center justify-center`}
  ${tw`md:(min-h-[96px])`}
  img {
    ${tw`m-auto min-h-[54px] w-auto`}
    ${tw`md:(min-h-[70px])`}
    ${tw`xl:(min-h-[136px])`}
  }
`;

/************************/
/*版身*/
/************************/
export const SFrontDeco = styled.div`
  ${tw`pointer-events-none absolute left-0 top-0 bottom-0 right-0 z-[2] overflow-hidden`}
  img {
    ${tw`relative w-[414px] max-w-none left-1/2 -ml-[207px]`}
    ${tw`md:(w-full max-w-[900px] m-auto left-auto)`}
    ${tw`lg:(w-full max-w-[1261px] m-auto left-auto)`}
  }
`;

export const SContainBody = styled.div`
  ${tw`relative m-auto`}
  ${tw`w-full h-full`}
  ${tw`max-w-[450px] px-[12px]`}
  ${tw`md:(max-w-[720px])`}
  ${tw`lg:(max-w-[1240px])`}
  .group-title {
    img {
      ${tw`relative z-[0] m-auto`}
      ${tw`w-[267px] h-[55px]`}
      ${tw`md:(mb-[-1px] w-[600px] h-[55px])`}
      ${tw`lg:(mb-[-2px] w-[724px] h-[66px])`}
    }
  }
`;

// 版身外框
export const SContainWrap = styled.div`
  ${tw`relative z-[1] w-full h-full overflow-hidden`}
  ${tw`p-[12px] rounded-[16px]`}
  background: linear-gradient(
    82deg,
    #e9ce8c 14.91%,
    #fff4cc 42.97%,
    #e7c77d 64.38%,
    #66512e 85.79%
  );
`;

// 產品
export const SContainBox = styled.ul`
  ${tw`w-full h-full overflow-hidden bg-transparent`}
  ${tw`grid gap-[4px] rounded-[14px]`}
  ${tw`grid-cols-2 md:grid-cols-4`}
  li {
    ${tw`bg-white`}
  }
  li:nth-last-of-type(1),
  li:nth-last-of-type(2) {
    ${tw`bg-transparent`}
    ${tw`col-span-2 md:col-span-4 lg:col-span-2`}
    img {
      ${tw`duration-500`}
    }
    &:hover {
      img {
        ${tw`brightness-110`}
      }
    }
  }
`;
