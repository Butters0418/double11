// Passion Sisters 推推
import tw, { styled } from 'twin.macro';
// components
import BgLayer from './BgLayer/BgLayer';
import PassionSisters from './PassionSisters/PassionSisters';
import FgLayer from './FgLayer/FgLayer';

// styles
const SPageContainer = styled.div`
  ${tw`relative`}
  > * {
    ${tw`relative z-[1]`}
  }
  ${tw`py-4 px-3`}
`;

function Section2() {
  return (
    <SPageContainer>
      <BgLayer />
      <PassionSisters />
      <FgLayer />
    </SPageContainer>
  );
}

export default Section2;
