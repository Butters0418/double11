import tw, { styled } from 'twin.macro';

export const SLaserTop = styled.div`
  ${tw`relative z-10`}
  ${tw`md:()`}
  ${tw`xl:()`}
`;

export const SLaserTab = styled.div`
  ${tw`absolute bottom-0 left-1/2 -translate-x-1/2 w-[960px] h-[80px] bg-bottom bg-no-repeat grid grid-cols-3 px-4 gap-x-2`}
  ${tw`md:()`}
  ${tw`xl:()`}
`;

export const STabButton = styled.button`
  ${tw`text-white text-2xl tracking-[2px] font-bold font-notosans italic flex justify-center items-end pb-2.5 bg-bottom bg-no-repeat bg-contain relative`}
  ${(props) =>
    props.active ? tw`text-black text-3xl` : tw`text-white text-2xl`}
  p {
    ${tw`mr-1 whitespace-nowrap relative z-10`}
    ${(props) =>
      props.active &&
      `
    text-shadow: 1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;
  `}
  }
  .laser-icon {
    ${tw`relative z-10 duration-500`}
    ${(props) => (props.active ? tw`hidden` : tw`block`)}
  }
  .laser-icon-active {
    ${tw`absolute z-10 right-4 -bottom-1.5 w-[70px] duration-500`}
    ${(props) => (props.active ? tw`block` : tw`hidden`)}
  }
  .active-tab-bg {
    ${tw`absolute bottom-0 left-0 w-full z-[1] duration-500`}
    ${(props) => (props.active ? tw`block` : tw`hidden`)}
  }

  &:hover img.laser-icon {
    ${tw`hue-rotate-180 saturate-[5]`}
  }
`;

export const SLaserTitleMb = styled.h3`
  ${tw`absolute bottom-0 left-1/2 -translate-x-1/2 w-[232px] h-[56px] bg-no-repeat bg-bottom bg-contain pt-1.5`}
  ${tw`flex justify-center items-center`}
  ${tw`sm:(w-[320px] h-[70px] )`}
  p {
    ${tw`mr-1 whitespace-nowrap relative z-10 text-black text-[22px] tracking-[2px] font-bold font-notosans italic`}
    ${tw`sm:(text-3xl)`}
    text-shadow: 1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff
  }
  .active-icon {
    ${tw`w-12 relative z-20 -mt-1.5 -mr-10`}
    ${tw`sm:(w-16  -mt-3 -mr-10)`}
  }
`;

export const SLaserTopBg = styled.img`
  ${tw`mx-auto h-[64px] w-[96%]`}
  ${tw`sm:(h-[80px] w-[98%])`}
`;

export const SLaserBox = styled.div`
  ${tw`relative z-20 -mt-0.5 rounded-[12px] bg-cover bg-top p-[2px]`}
  ${tw`sm:(rounded-[16px] p-[3px])`}
  ${tw`md:(rounded-[24px])`}

  .border-layer {
    ${tw`absolute top-0 left-0 w-full h-full z-[0] overflow-hidden rounded-[12px]`}
    ${tw`sm:(rounded-[16px])`}
    ${tw`lg:(rounded-[24px])`}
    .shiftbg {
      ${tw`absolute top-0 h-full left-0 z-[0]`}
      ${tw`bg-[length:450px_100%] w-[900px] [animation:shifting_25s_linear_infinite]`}
      ${tw`md:(bg-[length:720px_100%] [animation:shifting_20s_linear_infinite]) w-[1440px] `}
      ${tw`lg:(bg-[length:1240px_100%] [animation:shifting_15s_linear_infinite]) w-[2480px] `}
    }
  }

  .pd__container {
    ${tw`relative z-[2]`}
    ${tw`grid grid-cols-6  gap-1.5 rounded-[10px] bg-[#000833] p-2 w-[840px] min-h-[428px]`}
    ${tw`sm:(w-[820px])`}
    ${tw`md:(w-[950px] rounded-[22px] p-3 gap-2 min-h-[484px])`}
    ${tw`lg:(w-auto min-h-[695px])`}
  }
  .pd__scrollContainer {
    ${tw`relative z-[2]`}
    ${tw`relative overflow-scroll rounded-[10px] bg-black`}
    ${tw`sm:(rounded-[14px])`}
    ${tw`md:(rounded-[22px])`}
  }
`;
