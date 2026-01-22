// 整點瘋殺賞
import tw, { styled } from 'twin.macro';

import Onsale from './Onsale/Onsale';

/********************/
/*區塊樣式、背景樣式、背景層
/********************/
const SPageContainer = styled.div`
  ${tw`relative pb-8 px-3`}
  ${tw`md:(pt-4)`}
  ${tw`lg:(px-0)`}
  > * {
    ${tw`relative z-[1]`}
  }
`;

const SBgLayer = styled.div`
  ${tw`!absolute top-0 left-0 right-0 bottom-0 !z-0 overflow-hidden pointer-events-none`}
  ${tw`flex flex-col justify-end items-center`}
  ${tw`[background:linear-gradient(180deg,_#FFEFEF_17.88%,_#FFA3AE_92.21%)]`}
`;

function Section7() {
  return (
    <SPageContainer>
      <SBgLayer />
      <Onsale />
    </SPageContainer>
  );
}

export default Section7;
