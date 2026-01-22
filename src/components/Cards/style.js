import tw, { styled } from 'twin.macro';

// [卡片共用] - 卡片本身
export const SPdCard = styled.a`
  ${tw`bg-white rounded-xl block relative p-1 pb-[50px] h-full`}
  ${tw`lg:(pb-[44px] px-[11px] pt-0)`}
  img {
    ${tw`duration-500`}
  }
  &:hover .borderbg {
    ${tw`rotate-45`}
  }
  &:hover img {
    ${tw`brightness-110`}
  }
`;

// 卡片本身 樣式2 (card2、card5)
export const SPdCard2 = styled(SPdCard)`
  ${tw`bg-transparent`}
  ${tw`lg:(pt-[11px ])`}
`;

// 卡片本身 樣式3 (card3)
export const SPdCard3 = styled(SPdCard)`
  ${tw`rounded-[10px] px-1 pt-0 pb-[58px]`}
  ${tw`lg:(rounded-[14px] px-2 pb-[61px])`}
`;

//  [卡片共用] - 優惠訊息
export const SPdTitle = styled.p`
  ${tw`font-notosans text-[14px] leading-[1.2] font-bold whitespace-nowrap overflow-hidden`}
  ${tw`lg:(text-base leading-[1.2])`}
`;

// title 樣式1 (card1)
export const STitleStyle1 = styled(SPdTitle)`
  ${tw`items-center justify-center bg-contain bg-top bg-no-repeat text-white pt-[6.5px] pb-[8.5px] px-3 hidden`}
  ${tw`lg:flex`}
  span {
    ${tw`block overflow-hidden`}
  }
`;

// title 樣式2 (card2)
export const STitleStyle2 = styled(SPdTitle)`
  ${tw`relative z-[1]`}
  ${tw`p-1 text-white flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-3xl bg-[#635BFF]`}
  ${tw`lg:(p-[5.5px])`}
  span {
    ${tw`block overflow-hidden`}
  }
`;

// title 樣式3 (card5)
export const STitleStyle3 = styled(STitleStyle2)`
  ${tw`text-[#070032] bg-[#fff]`}
`;

// title 樣式4 (card3)
export const STitleStyle4 = styled(STitleStyle1)`
  ${tw`text-[#070032] flex py-[4.5px] px-[13%]`}
  ${tw`sm:( px-6)`}
  ${tw`lg:(py-[7.5px] px-12)`}
`;

// title 樣式5 (card8)
export const STitleStyle5 = styled(STitleStyle2)`
  ${tw`text-[#070032]`}
  background: linear-gradient(
    270deg,
    #b89042 -2.5%,
    #ffe7b5 39.14%,
    #d4a73f 100%
  );
`;

// title 樣式6 (card9)
export const STitleStyle6 = styled(STitleStyle5)`
  background: linear-gradient(
    90deg,
    #71d4da -0.22%,
    #dbfcfe 56.55%,
    #72d9df 99.78%
  );
`;

//  [卡片共用] - 品名
export const SPdName = styled.h3`
  ${tw`font-notosans font-normal text-[13px] leading-[1.3] text-[#070032] line-clamp-2`}
  ${tw`lg:(text-[15px] leading-normal font-medium)`}
`;

// 品名 樣式2 (card3)
export const SPdNameStyle2 = styled(SPdName)`
  ${tw`mt-1 w-full px-1.5 text-left h-[34px] `}
  ${tw`lg:(mt-[10px] w-2/3 px-3 h-[45px])`}
`;

//  [卡片共用] - 價格區塊
export const SPdPriceBlock = styled.div`
  ${tw`absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-between  flex-col`}
  ${tw`lg:(flex-row items-end justify-center)`}
`;

// 價格區塊2
export const SPdPriceBlock2 = styled(SPdPriceBlock)`
  ${tw`bg-[#F9014B] rounded-lg px-1.5 py-1  w-[calc(100%-8px)] items-start bottom-1`}
  ${tw`lg:(rounded-[9px] py-1 px-2 items-center justify-start w-[calc(100%-16px)])`}
`;

// 價格區塊3 (card8、card9)
export const SPdPriceBlock3 = styled(SPdPriceBlock)`
  ${tw`-translate-x-1/2 left-1/2 items-center bottom-1.5 mt-0`}
  ${tw`md:(translate-x-0 left-1.5 items-start bottom-1.5 mt-0)`}
  ${tw`lg:(flex-col items-start relative mt-1.5 left-0)`}
`;

//  [卡片共用] - 特價
export const SPdPrice = styled.h4`
  ${tw`font-montserrat italic leading-none text-[20px] font-bold text-[#F9014B] flex justify-center items-end`}
  ${tw`lg:(text-[28px])`}
  > p {
    ${tw`whitespace-nowrap`}
  }
  span {
    ${tw`text-sm leading-[1.2] font-medium`}
    ${tw`lg:(text-lg leading-[1.2])`}
  }
`;

// 特價 樣式2 (card3)
export const SPdPrice2 = styled(SPdPrice)`
  ${tw`text-white leading-none text-[28px]`}
  ${tw`lg:(text-4xl leading-none)`}
  span {
    ${tw`text-[20px] leading-none`}
    ${tw`lg:(text-2xl leading-none)`}
  }
`;

//  [卡片共用] - 原價
export const SPdMkPrice = styled.h5`
  ${tw`font-montserrat text-xs font-medium leading-[1.2] line-through text-[#070032] opacity-50`}
`;

// 原價 樣式2 (card3)
export const SPdMkPrice2 = styled(SPdMkPrice)`
  ${tw`text-white opacity-100`}
`;

// 卡3 雷射邊框
export const SCard3Border = styled.div`
  ${tw`relative overflow-hidden`}
  ${tw`rounded-xl p-0.5 pb-1 bg-center bg-cover bg-no-repeat`}
  ${tw`lg:(rounded-2xl p-[3px] pb-2)`}
  .borderbg {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-[250%] h-[250%]`}
  }
  &:hover .borderbg {
    ${tw`rotate-45`}
  }
  img {
    ${tw`duration-500`}
  }
  &:hover img {
    ${tw`brightness-[1.05]`}
  }
`;

// 卡3 icon
export const SCard3Item = styled.img`
  ${tw`absolute drop-shadow-md w-[55px] bottom-0 right-1.5 duration-500`}
  ${tw`lg:(w-[76px] bottom-3 right-1.5 )`}
`;

// 卡4 霤射邊框
export const SCard4Border = styled.a`
  ${tw`relative z-[1]`}
  ${tw`pb-[3px] block bg-bottom bg-cover shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] rounded-[88px_8px_8px_8px]`}
  ${tw`lg:( pb-1.5) shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`}
  
  .border-layer {
    ${tw`absolute top-0 left-0 w-full h-full z-[0] rounded-[88px_8px_8px_8px] overflow-hidden`}
  }
  .borderbg {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-[250%] h-[250%]`}
  }
  &:hover .borderbg {
    ${tw`-rotate-45`}
  }
  &:hover img {
    ${tw`brightness-110`}
  }
`;

// 卡4 body
export const SCard4Body = styled.div`
  ${tw`relative rounded-[88px_8px_8px_8px] z-[2]`}
  ${tw`lg:()`}
`;

// 卡4 左圖
export const SCard4Img = styled.div`
  ${tw`p-[1px] overflow-hidden rounded-[4px] bg-cover bg-center h-full`}
  ${tw`lg:(p-0.5)`}
  img {
    ${tw`duration-500`}
    ${tw`overflow-hidden rounded-[4px]`}
  }
`;

// 卡4 右字
export const SCard4Info = styled.div`
  ${tw`h-auto w-[138px] shrink-0 flex flex-col justify-center items-center relative px-1 gap-y-1`}
  ${tw`lg:(w-[190px] px-2)`}
  span {
    ${tw`w-full h-[1px] bg-[#5882FF]`}
  }
  h3 {
    ${tw`text-[#070032] h-[44px] px-1 text-[18px] font-montserrat text-center leading-[1.2] font-bold flex justify-center items-center overflow-hidden`}
    ${tw`lg:(text-[24px] h-[58px] px-1)`}
  }
`;

// 卡4 上品名
export const SCardInfoTop = styled.div`
  ${tw`h-1/2 pb-1.5 flex items-end justify-center overflow-hidden relative w-full`}
  ${tw`lg:(p-1 pb-2)`}
`;

// 卡4 下資訊
export const SCardInfoBottom = styled.div`
  ${tw`text-center h-[46px]`}
  ${tw`lg:(h-[58px])`}
  p {
    ${tw`text-center font-notosans text-[14px] leading-normal font-medium line-clamp-1`}
    ${tw`lg:(text-[18px])`}
  }
  button {
    ${tw`px-3.5 py-1.5 mt-0.5 rounded-2xl  bg-[#070032] text-white font-montserrat text-xs italic font-bold leading-none tracking-wider`}
    ${tw`lg:(text-sm mt-1 leading-none)`}
  }
`;

// 卡5 霤射邊框
export const SCard5Border = styled.div`
  ${tw`relative overflow-hidden`}
  ${tw`mt-1 rounded-3xl p-[1px] lg:mt-3 lg:p-0.5`}
  .borderbg {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-[150%] h-[500%]`}
  }
`;

// 卡8 body
export const SCard8Body = styled(SPdCard)`
  ${tw`px-1.5 pt-1.5 bg-white block rounded-none`}
  ${tw`lg:(pt-1.5 pb-1.5)`}
  &:hover .borderbg {
    ${tw`rotate-45`}
  }
  &:hover img {
    ${tw`brightness-110`}
  }
`;

// 卡8 霤射邊框
export const SCard8Border = styled.div`
  ${tw`relative overflow-hidden`}
  ${tw`mx-auto rounded-3xl p-[1px] lg:max-w-[228px] lg:p-0.5`}
  .borderbg {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-[150%] h-[500%]`}
  }
`;

// 卡10 霤射邊框
export const SCard10Border = styled.div`
  ${tw`relative overflow-hidden`}
  ${tw`rounded-[12px] p-[1px] pb-[3px] bg-right bg-cover bg-no-repeat`}
  ${tw`lg:(rounded-[16px] p-0.5 pb-1.5)`}
  .borderbg {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] duration-500`}
    ${tw`bg-no-repeat bg-center bg-cover w-[250%] h-[250%]`}
  }
  &:hover .borderbg {
    ${tw`rotate-45`}
  }
`;

// 卡10  body
export const SPdCard10 = styled.a`
  ${tw`relative z-[1]`}
  ${tw`rounded-[10px] flex overflow-hidden bg-white`}
  ${tw`lg:(rounded-[14px])`}
`;

// 卡10 左img
export const SCard10Left = styled.div`
  ${tw`p-1 w-[138px] h-[138px]  shrink-0`}
  ${tw`lg:(w-[180px] h-[180px]  p-2)`}
  img {
    ${tw`rounded-md overflow-hidden`}
    ${tw`lg:(rounded-lg overflow-hidden)`}
  }
`;

// 卡10 右資訊
export const SCard10Right = styled.div`
  ${tw`overflow-hidden pt-1 pr-1`}
  ${tw`lg:(pt-[9px] pr-1.5) grow`}
  .top {
    ${tw`px-2 pt-1`}
    ${tw`lg:(pb-1)`}
  }
  p {
    ${tw`font-notosans font-bold text-[#070032] leading-[1.2] text-[14px] line-clamp-1`}
    ${tw`lg:(text-[16px])`}
  }
  h3 {
    ${tw`font-notosans font-normal text-[#070032] text-[13px] leading-[1.3] mt-1 h-[34px]`}
    ${tw`lg:(text-[15px] leading-normal font-medium line-clamp-2 h-[42px])`}
  }
  .bot {
    ${tw`bg-no-repeat bg-left-top relative h-[74px]`}
    ${tw`lg:(h-[95px]  bg-[left_top_8px])`}
  }
`;

// 卡10 特價
export const SPdPrice10 = styled(SPdPrice)`
  ${tw`absolute top-[3px] right-2.5`}
  ${tw`lg:(right-1.5)`}
`;
// 卡10 原價
export const SPdMkPrice10 = styled(SPdMkPrice)`
  ${tw`absolute top-[9.5px] left-[7px]`}
  ${tw`lg:(top-[14.5px] left-1)`}
`;
// 卡10 馬上搶
export const SCard10Button = styled.button`
  ${tw`absolute p-[1px] rounded-3xl bg-no-repeat bg-center bg-cover top-[34px] right-1.5`}
  ${tw`lg:(top-[46px] right-[5px]) p-[1.5px]`}
  p {
    ${tw`flex justify-center items-center bg-[#F9014B] text-white rounded-3xl leading-none text-sm px-[14px] py-1.5`}
    ${tw`lg:(leading-none text-base px-[19px] py-[8px])`}
  }
`;

// Legacy exports for backward compatibility (can be removed later)
export const PdCard = SPdCard;
export const PdCard2 = SPdCard2;
export const PdCard3 = SPdCard3;
export const TitleStyle1 = STitleStyle1;
export const TitleStyle2 = STitleStyle2;
export const TitleStyle3 = STitleStyle3;
export const TitleStyle4 = STitleStyle4;
export const TitleStyle5 = STitleStyle5;
export const TitleStyle6 = STitleStyle6;
export const PdName = SPdName;
export const PdNameStyle2 = SPdNameStyle2;
export const PdPriceBlock = SPdPriceBlock;
export const PdPriceBlock2 = SPdPriceBlock2;
export const PdPriceBlock3 = SPdPriceBlock3;
export const PdPrice = SPdPrice;
export const PdPrice2 = SPdPrice2;
export const PdMkPrice = SPdMkPrice;
export const PdMkPrice2 = SPdMkPrice2;
export const Card3Border = SCard3Border;
export const Card3Item = SCard3Item;
export const Card4Border = SCard4Border;
export const Card4Body = SCard4Body;
export const Card4Img = SCard4Img;
export const Card4Info = SCard4Info;
export const CardInfoTop = SCardInfoTop;
export const CardInfoBottom = SCardInfoBottom;
export const Card5Border = SCard5Border;
export const Card8Body = SCard8Body;
export const Card8Border = SCard8Border;
export const Card10Border = SCard10Border;
export const PdCard10 = SPdCard10;
export const Card10Left = SCard10Left;
export const Card10Right = SCard10Right;
export const PdPrice10 = SPdPrice10;
export const PdMkPrice10 = SPdMkPrice10;
export const Card10Button = SCard10Button;
