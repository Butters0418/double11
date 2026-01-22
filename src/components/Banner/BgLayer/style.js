import tw, { styled } from 'twin.macro';
/********************/
/*場景內容
/********************/
/*預熱活動*/
export const SBGLayer1 = styled.div`
  ${tw`absolute z-[1] w-full h-full overflow-hidden pointer-events-none`}
  ${tw`[background-position:center -38px] md:bg-top bg-no-repeat bg-[#BD8B50]`}
  ${tw`lg:bg-[#140C01]`}
`;
export const SBGLayer2 = styled.div`
  ${tw`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[762px] z-[2] overflow-hidden pointer-events-none`}
  ${tw`flex flex-col justify-end items-center`}
  /* ${tw`bg-[#140C01]`} */
  .deco {
    ${tw`absolute bottom-0 z-[10]`}
  }
  .deco:nth-of-type(1) {
    ${tw`right-1/2 mr-[620px]`}
  }
  .deco:nth-of-type(2) {
    ${tw`left-1/2 ml-[620px]`}
    ${tw`-scale-x-100`}
  }
`;
export const SBGLayer3 = styled.div`
  ${tw`absolute top-0 left-1/2 -translate-x-1/2 z-[4] w-full h-full overflow-hidden pointer-events-none`}
`;
export const SDecoLayer = styled.div`
  ${tw`relative top-0 left-1/2 -translate-x-1/2`}
  ${tw`w-[375px] h-full`}
  ${tw`md:(w-[1218px])`}
  ${tw`lg:(w-[1600px])`}
  img {
    ${tw`absolute z-auto`}
  }
  /*lg only */
  .deco-baloon1 {
    ${tw`left-[116px] top-[34px] w-[79px] h-[189px]`}
    ${tw`-scale-x-100`}
  }
  .deco-redbox1 {
    ${tw`left-[97px] top-[526px] w-[116px] h-[105px]`}
  }
  .deco-redbox2 {
    ${tw`left-[1407px] top-[570px] w-[126px] h-[122px]`}
  }
  /*lg md*/
  .deco-headphone {
    ${tw`md:(left-[1137px] top-[217px] w-[80px] h-[80px])`}
    ${tw`lg:(left-[1505px] top-[288px] w-[95px] h-[95px])`}
  }
  /*lg md sm xs*/
  .deco-baloon2 {
    ${tw`left-[48px] top-[40px] w-[41px] h-[62px]`}
    ${tw`md:(left-[326px] top-[38px] w-[102px] h-[153px])`}
    ${tw`lg:(left-[286px] top-[96px] w-[153px] h-[228px])`}
  }
  .deco-baloon3 {
    ${tw`left-[17px] top-[90px] w-[30px] h-[72px]`}
    ${tw`md:(left-[272px] top-[109px] w-[91px] h-[216px])`}
    ${tw`lg:(left-[1060px] top-[21px] w-[79px] h-[189px])`}
  }
  .deco-boxman {
    ${tw`left-[0px] top-[180px] w-[66px] h-[85px]`}
    ${tw`md:(left-[194px] top-[300px] w-[156px] h-[204px])`}
    ${tw`lg:(left-[1130px] top-[214px] w-[185px] h-[242px])`}
  }
  .deco-deliverybox {
    ${tw`left-[300px] top-[14px] w-[38px] h-[57px]`}
    ${tw`md:(left-[898px] top-[25px] w-[88px] h-[134px])`}
    ${tw`lg:(left-[1387px] top-[77px] w-[83px] h-[126px])`}
  }
`;

/*主檔活動*/
export const SBGLayer1Part2 = styled.div`
  ${tw`absolute z-[1] w-full h-full overflow-hidden pointer-events-none`}
  ${tw`bg-top bg-no-repeat bg-[#153f91] md:bg-[#1a4498] lg:bg-[#02115B]`}
`;
export const SBGRibbonsSatge = styled.div`
  ${tw`absolute top-[0] left-1/2 -translate-x-1/2 z-[1] w-[3310px] h-[330px] md:h-[650px] lg:h-[810px] select-none`}
  b {
    ${tw`absolute bottom-0 z-0 bg-[#1A4398]`}
    ${tw`flex w-1/2 gap-4 px-2 pb-[0px] md:pb-[4px]`}
    em {
      ${tw`absolute bottom-[24px] md:bottom-[28px] left-0`}
      ${tw`w-full h-[2px] bg-white bg-cover brightness-105 contrast-150`}
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
    ${tw`font-montserrat text-[16px] md:text-[20px] italic font-semibold leading-6 text-center`}
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
export const SBGGradientSatge = styled.div`
  ${tw`absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] select-none`}
  ${tw`w-full h-[calc(100%-700px)] md:h-[calc(100%-1000px)] lg:h-0`}
  ${tw`md:bg-[linear-gradient(180deg,_#1a4498_0%,_#02115B_100%)]`}
  ${tw`bg-[linear-gradient(180deg,_#153f91_0%,_#02115B_100%)]`}
`;

export const SBGShiney = styled.div`
  ${tw`absolute left-1/2 -translate-x-1/2 z-auto mix-blend-plus-lighter brightness-125 pointer-events-none`}
  ${tw`w-[450px] h-[900px] top-[-350px]`}
  ${tw`sm:(w-full h-[900px] top-[-300px])`}
  ${tw`md:( w-full h-[1200px] top-[-350px])`}
  ${tw`lg:( w-full h-[1200px] top-[-300px])`}
  img {
    ${tw`absolute top-0 left-0 z-auto`}
    ${tw`w-full h-full`}
  }
  img:nth-of-type(2) {
    animation-delay: 600ms;
  }
  img:nth-of-type(3) {
    animation-delay: 1200ms;
  }
  /* img:nth-of-type(2) {
    animation-delay: 400ms;
  }
  img:nth-of-type(3) {
    animation-delay: 800ms;
  }
  img:nth-of-type(4) {
    animation-delay: 1200ms;
  }
  img:nth-of-type(5) {
    animation-delay: 1600ms;
  } */
`;
