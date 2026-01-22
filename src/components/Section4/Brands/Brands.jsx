// react 相關
import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';
// custom hooks & utils
import getDataById from '../../../utils/getDataById';
// components
import Card4 from '../../Cards/Card4';
// images
import { titleThemeTitlePic6 } from '../../../assets/layout';
// styles
import { SBlockTitle } from '../../../styles/style';
import { SBrandsPagination } from './style';

function Brands() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [pd1, setPd1] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 311);
    idData.length !== 0 && setPd1(idData);
  }, [newPdData]);

  return (
    <div id="brands" data-title="精選大牌">
      <SBlockTitle>
        <img src={titleThemeTitlePic6} alt="精選大品牌" />
      </SBlockTitle>
      {pd1.length > 0 && (
        <>
          <Swiper
            className="mb-4 !pb-2"
            modules={[Autoplay, Pagination]}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            spaceBetween={8}
            pagination={{
              el: '.brands-pagination',
              clickable: true,
            }}
            breakpoints={{
              767: {
                spaceBetween: 16,
              },
            }}
            speed={1000}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {pd1.map((item, index) => {
              return (
                <SwiperSlide className="!w-[260px] lg:!w-[372px]" key={index}>
                  <Card4 item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <SBrandsPagination className="brands-pagination"></SBrandsPagination>
        </>
      )}
    </div>
  );
}

export default Brands;
