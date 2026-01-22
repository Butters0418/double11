// packages
import { useEffect } from 'react';

// stores
import { useLaLaStore1 } from './stores/useLaLaStore';
import useOnsaleStore from './stores/useOnsaleStore';
import useCouponStore from './stores/useCouponStore';

// custom hooks & utils
import scrollToElement from './utils/scrollToElement';

// components
import Header from './components/basic/Header.jsx';
import Footer from './components/basic/Footer.jsx';
import LeftNav from './components/basic/LeftNav.jsx';
import RightNav from './components/basic/RightNav.jsx';

// layout
import Banner from './components/Banner/Banner.jsx';
import Section1 from './components/Section1/Section1.jsx';
import Section2 from './components/Section2/Section2.jsx';
import Section3 from './components/Section3/Section3.jsx';
import Section4 from './components/Section4/Section4.jsx';
import Section5 from './components/Section5/Section5.jsx';
import Section6 from './components/Section6/Section6.jsx';
import Section7 from './components/Section7/Section7.jsx';

function App() {
  const hasLeftNav = true; // 是否需要左選單?
  const getLalaData1 = useLaLaStore1((state) => state.getData); // 執行呼叫拉拉熊 1 資料方法
  const getOnsaleData = useOnsaleStore((state) => state.getData); // 執行瘋殺特賣方法
  const getCouponData = useCouponStore((state) => state.getData); // 執行取得優惠券資料方法

  // 取得拉拉熊 1 資料
  useEffect(() => {
    getLalaData1();
    getOnsaleData();
    getCouponData();
  }, []);

  // 判斷是否有網址 #id 錨點
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 30;

    const scrollHandler = () => {
      const anchor = window.location.hash.split('#')[1];
      if (!anchor) {
        return;
      } else {
        scrollToElement(anchor, 'instant');
      }

      if (retryCount < maxRetries) {
        retryCount++;
        requestAnimationFrame(scrollHandler);
      } else {
        console.warn('錨點 id 有誤');
      }
    };

    scrollHandler();
  }, []);
  return (
    <div>
      <Header />
      {hasLeftNav && <LeftNav />}
      <RightNav />
      {/* ============ Main ============ */}
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      {/* ============ End Main ============ */}
      <Footer hasLeftNav={hasLeftNav} />
    </div>
  );
}
export default App;
