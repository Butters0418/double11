// react 相關
import { useState, useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../../utils/getDataById';

// styles
import { SBlockTitle } from '../../../styles/style';
import { SHotPreviewPagination, SSliderTag, SSliderCard } from './style';

// images
import {
  titleThemeTitlePic1,
  section1HotPreviewBg1,
  section1HotPreviewBg2,
  section1HotPreviewTag,
} from '../../../assets/layout';

function HotPreview() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [previewData, setPreviewData] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 242);
    idData.length !== 0 && setPreviewData(idData);
  }, [newPdData]);

  const swiperParams = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    className: '!absolute left-[14%] top-[8%] w-[82%]',
  };

  return (
    <div
      id="sbdpreview"
      data-title="人氣預告"
      className="min-h-[353px] lg:min-h-[403px]"
    >
      <SBlockTitle className="md:mt-4">
        <img src={titleThemeTitlePic1} alt="人氣必搶預告" />
      </SBlockTitle>
      {previewData.length > 0 && (
        <div className="mx-auto grid min-h-[283px] max-w-[450px] grid-cols-1 md:max-w-[620px] lg:min-h-[251px]  lg:max-w-[1240px] lg:grid-cols-2">
          {/* swiper 1 */}
          <div className="relative col-span-1">
            <img src={section1HotPreviewBg1} alt="人氣必搶預告 背景" />
            <Swiper
              {...swiperParams}
              pagination={{
                el: '.hotPreview1-pagination',
                clickable: true,
              }}
            >
              {previewData.slice(0, 2).map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SSliderCard
                      href={item.url}
                      className={`${
                        item.url === 'nolink' && 'pointer-events-none'
                      }`}
                    >
                      <SSliderTag>
                        <p>{item.productName}</p>
                        <img src={section1HotPreviewTag} alt="tag bg" />
                      </SSliderTag>
                      <img src={item.imgSrc} alt="人氣必搶預告" />
                    </SSliderCard>
                  </SwiperSlide>
                );
              })}
              <SHotPreviewPagination className="hotPreview1-pagination"></SHotPreviewPagination>
            </Swiper>
          </div>

          {/* swiper 2 */}
          <div className="relative col-span-1">
            <img src={section1HotPreviewBg2} alt="人氣必搶預告 背景" />
            <Swiper
              {...swiperParams}
              pagination={{
                el: '.hotPreview2-pagination',
                clickable: true,
              }}
            >
              {previewData.slice(2, 4).map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SSliderCard
                      href={item.url}
                      className={`${
                        item.url === 'nolink' && 'pointer-events-none'
                      }`}
                    >
                      <SSliderTag>
                        <p>{item.productName}</p>
                        <img src={section1HotPreviewTag} alt="tag bg" />
                      </SSliderTag>
                      <img src={item.imgSrc} alt="人氣必搶預告" />
                    </SSliderCard>
                  </SwiperSlide>
                );
              })}
              <SHotPreviewPagination className="hotPreview2-pagination"></SHotPreviewPagination>
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotPreview;
