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
import { SBankPagination } from './style';

function Bank() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [bankData, setBankData] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 231);
    idData.length !== 0 && setBankData(idData);
  }, [newPdData]);

  return (
    <div
      id="bank"
      data-title="銀行優惠"
      className="min-h-[99px] lg:min-h-[123px]"
    >
      {bankData.length > 0 && (
        <>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            spaceBetween={8}
            speed={1000}
            pagination={{
              el: '.bank-pagination',
              clickable: true,
            }}
            breakpoints={{
              767: {
                spaceBetween: 16,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {bankData
              .filter((item, index) => index % 2 === 0)
              .map((item, index) => (
                <SwiperSlide className="!w-[250px] md:!w-[600px]" key={index}>
                  <a href={item.url} className="group">
                    <picture>
                      <source srcSet={item.imgSrc} media="(min-width: 766px)" />
                      <img
                        className="duration-500 group-hover:brightness-110"
                        src={bankData[index * 2 + 1].imgSrc}
                        alt="銀行優惠"
                      />
                    </picture>
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
          <SBankPagination className="bank-pagination"></SBankPagination>
        </>
      )}
    </div>
  );
}

export default Bank;
