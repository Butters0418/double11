// 1111 超值購
// react 相關
import { useEffect, useState } from 'react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../../utils/getDataById';
import formatPriceText from '../../../utils/formatPriceText';

// components
import Card3 from '../../Cards/Card3';

// images
import { titleThemeTitlePic5 } from '../../../assets/layout';

// styles
import { SBlockTitle } from '../../../styles/style';
import { SSuperGreatPagination } from './style';

function SuperGreat() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [pd1, setPd1] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 300);
    idData.length !== 0 && setPd1(idData);
  }, [newPdData]);

  return (
    <div id="dis11" data-title="超值選購">
      <SBlockTitle>
        <img src={titleThemeTitlePic5} alt="1111 超值購" />
      </SBlockTitle>
      {pd1.length > 0 && (
        <div className="mx-auto max-w-[800px] lg:max-w-[1240px]">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            spaceBetween={4}
            effect={'coverflow'}
            grabCursor={true}
            coverflowEffect={{
              rotate: 36,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              el: '.super-great-pagination',
              clickable: true,
            }}
            breakpoints={{
              767: {
                spaceBetween: 8,
              },
            }}
          >
            {pd1.map((item, index) => {
              return (
                <SwiperSlide
                  className="max-w-[190px] lg:max-w-[284px]"
                  key={index}
                >
                  <Card3
                    type={0}
                    item={item}
                    discountPrice={formatPriceText(item.discountPrice)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <SSuperGreatPagination className="super-great-pagination"></SSuperGreatPagination>
        </div>
      )}
    </div>
  );
}

export default SuperGreat;
