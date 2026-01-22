import tw, { styled } from 'twin.macro';

export const SBgRibbons = styled.div`
  ${tw`relative w-[3310px] min-h-[739px] max-h-[762px] select-none`}
  b {
    ${tw`absolute bottom-0 z-0`}
    ${tw`flex w-1/2 gap-4 px-2 pb-[4px]`}
    em {
      ${tw`absolute bottom-[0px] left-0`}
      ${tw`w-full h-[2px] bg-white bg-cover`}
    }
  }
  b:nth-of-type(1) {
    ${tw`justify-end`}
    ${tw`right-1/2 rotate-[16.5deg] [transform-origin:right bottom]`}
    em {
      ${tw`right-0`}
    }
  }
  b:nth-of-type(2) {
    ${tw`justify-start`}
    ${tw`left-1/2 rotate-[-16.5deg] [transform-origin:left bottom]`}
    em {
      ${tw`left-0`}
    }
  }
  span {
    ${tw`font-montserrat text-[20px] italic font-semibold leading-6 text-center`}
    ${tw`shrink-0 grow-0`}
  }
  span:nth-of-type(2n) {
    background: linear-gradient(
      90deg,
      #a573af 0%,
      #7588bc 18%,
      #7aa68b 37%,
      #7e8baf 57%,
      #96a3c6 79%,
      #8d7966 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span:nth-of-type(2n + 1) {
    background: linear-gradient(
      90deg,
      #d5a9de 0%,
      #f1f4fc 18%,
      #c6ebd5 37%,
      #b9c5e7 57%,
      #f1f4fc 79%,
      #f6e5b5 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SBarRibbons = styled.div`
  ${tw`relative w-full h-[48px] overflow-hidden md:mb-4`}
  ${tw`flex gap-3 items-center justify-center`}
  span {
    ${tw`relative inline-flex h-[36px] shrink-0 grow-0 items-center justify-center`}
    ${tw`font-montserrat italic leading-[120%]`}
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    img {
      ${tw`absolute top-0 left-0 z-[0]`}
      ${tw`w-full h-full object-fill `}
    }
  }
  span:nth-of-type(2n) {
    ${tw`w-[292px]`}
    ${tw`text-[25px] font-medium`}
  }
  span:nth-of-type(2n + 1) {
    ${tw`text-[24px] font-bold`}
  }
`;
