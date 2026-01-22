// react 相關
import { useState } from 'react';

// stores
import useOnsaleStore from '../../../stores/useOnsaleStore';

// components
import Card10 from '../../Cards/Card10';

// styles & images
import {
  titleThemeTitlePic11,
  laserLaserBgM,
  section7TitleClock,
} from '../../../assets/layout';
import {
  SBlockTitle,
  SContainer,
  STabContainer,
  SPdContainer,
  STabButton,
} from './style';

function Onsale() {
  const onsaleData = useOnsaleStore((state) => state.onsaleData);
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      {onsaleData.length > 0 && (
        <div id="dailysale" data-title="整點瘋殺">
          <SBlockTitle>
            <img
              src={titleThemeTitlePic11}
              alt="整點瘋殺賞"
              width="680"
              height="137"
            />
          </SBlockTitle>

          <SContainer>
            {/* 時間按鈕 */}
            <STabContainer className="min-h-[186px] md:min-h-[190px] lg:min-h-[92px]">
              <img
                className="title-clock"
                src={section7TitleClock}
                alt="限時回饋，最高8%起"
                width="330"
                height="170"
              />
              <div className="mask-bg"></div>
              <div
                className="tabListBorder"
                style={{ backgroundImage: `url(${laserLaserBgM})` }}
              >
                <div className="tabList">
                  {onsaleData.map((item, index) => {
                    return (
                      <STabButton
                        key={item.slot}
                        $active={activeId === index}
                        onClick={() => setActiveId(index)}
                      >
                        <h3>{item.time}</h3>
                        <p>
                          {item.status === 'now'
                            ? '現正瘋搶'
                            : item.status === 'ready'
                              ? '準時開搶'
                              : '明天開搶'}
                        </p>
                      </STabButton>
                    );
                  })}
                </div>
              </div>
            </STabContainer>
            {/* 商品區塊 */}
            <SPdContainer className="min-h-[872px] sm:min-h-[450px] lg:min-h-[396px]">
              {onsaleData[activeId].products.map((item) => {
                return <Card10 key={item.id} item={item} />;
              })}
            </SPdContainer>
          </SContainer>
        </div>
      )}
    </>
  );
}

export default Onsale;
