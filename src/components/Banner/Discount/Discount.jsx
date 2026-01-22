// react 相關
import { useState, useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';
import useOnsaleStore from '../../../stores/useOnsaleStore';

// custom hooks & utils
import getDataById from '../../../utils/getDataById';
import useWindowWidth from '../../../hooks/useWindowWidth';
import formatPriceText from '../../../utils/formatPriceText';

// styles
import {
  SContainer,
  SCampaignTop,
  SCampaignBot,
  SLaserBorder,
  SLaserBox,
  SLeftBox,
  SRightBox,
  SFooterBox,
  SOnsaleFirstPd,
  SLeftBoxCampaign,
  SRightBoxCampaign,
  SRightBoxSwiperPagination,
  SRightSwiper,
  SCouponGroup,
  SMoreBtnBorder,
  SMoreBtn,
  SSliderTag,
  SPdMkPrice,
  SPdPrice,
} from './style';

// images
import {
  laserLaserBgL,
  laserLaserBgM,
  bannerCampaignBoxBg,
  bannerCampaignTopBg,
  bannerOnsaleTitle,
  bannerBtnRight,
  section1HotPreviewTag,
} from '../../../assets/layout';

function Discount() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const onsaleData = useOnsaleStore((state) => state.onsaleData);

  const [pd1, setPd1] = useState([]);
  const [pd2, setPd2] = useState([]);
  const [pd3, setPd3] = useState([]);
  const [pd4, setPd4] = useState([]);
  const [pd5, setPd5] = useState([]);
  const [onsaleFirstPd, setOnsaleFirstPd] = useState({});

  const ww = useWindowWidth();

  const clickHandler = (domId) => {
    const target = document.querySelector(`#${domId}`);
    const padding = ww > 766 ? 0 : 40;
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const h = target.getBoundingClientRect().top + currentScroll - padding;
    window.scrollTo({ top: h, behavior: 'smooth' });
  };

  useEffect(() => {
    const newPd1 = getDataById(newPdData, 31);
    const newPd2 = getDataById(newPdData, 42);
    const newPd3 = getDataById(newPdData, 53);
    const newPd4 = getDataById(newPdData, 64);
    const newPd5 = getDataById(newPdData, 220);

    newPd1.length !== 0 && setPd1(newPd1);
    newPd2.length !== 0 && setPd2(newPd2);
    newPd3.length !== 0 && setPd3(newPd3);
    newPd4.length !== 0 && setPd4(newPd4);
    newPd5.length !== 0 && setPd5(newPd5);
  }, [newPdData]);

  useEffect(() => {
    if (onsaleData.length > 0 && onsaleData[0].products.length > 0) {
      setOnsaleFirstPd(onsaleData[0].products[0]);
    }
  }, [onsaleData]);

  return (
    <SContainer className="-mt-3 px-3 md:-mt-6 lg:-mt-11 lg:px-0">
      {/* 最上方三卡 */}
      <SCampaignTop>
        {pd1.length === 0 ? (
          <>
            <p className="col-span-2 h-[29vw] max-h-[131px] md:h-[195px] md:max-h-none md:w-[632px] lg:h-[132px] lg:w-[493px]">
              <Skeleton className="h-full" />
            </p>

            <p className="col-span-1 h-[20.5vw] max-h-[93px] md:h-[137px] md:max-h-none md:w-[308px] lg:h-[132px] lg:w-[240px]">
              <Skeleton className="h-full" />
            </p>

            <p className="col-span-1 h-[20.5vw] max-h-[93px] md:h-[137px] md:max-h-none md:w-[308px] lg:h-[132px] lg:w-[240px]">
              <Skeleton className="h-full" />
            </p>
          </>
        ) : (
          <>
            {pd1
              ?.slice(0, 6)
              .filter((item, index) => {
                return index % 2 === 0;
              })
              .map((item, index) => {
                return (
                  <a href={item.url} className="block" key={index}>
                    <picture>
                      <source
                        srcSet={item.imgSrc}
                        media="(min-width: 1240px)"
                      />
                      <img
                        src={pd1[index * 2 + 1].imgSrc}
                        alt={item.productName}
                      />
                    </picture>
                  </a>
                );
              })}
          </>
        )}
      </SCampaignTop>

      {/* 下面活動箱 */}
      <SCampaignBot>
        <div
          style={{ backgroundImage: `url(${bannerCampaignTopBg})` }}
          className="min-h-[58px] bg-contain bg-bottom bg-no-repeat text-center lg:min-h-[94px]"
        >
          {pd1.length === 0 ? (
            <>
              <p className="discount h-[16vw] max-h-[65px] w-[600px] md:h-[106px] md:max-h-none lg:h-[94px]">
                <Skeleton className="h-full" />
              </p>
            </>
          ) : (
            <picture>
              <source srcSet={pd1[6]?.imgSrc} media="(min-width: 1240px)" />
              <img
                src={pd1[7]?.imgSrc}
                alt={pd1[6].productName}
                className="discount"
              />
            </picture>
          )}
        </div>
        <SLaserBorder>
          <span
            className="shiftbg"
            style={{
              backgroundImage: `url(${laserLaserBgL})`,
            }}
          ></span>
          <SLaserBox style={{ backgroundImage: `url(${bannerCampaignBoxBg})` }}>
            {/* ============== 左區 ============= */}
            <SLeftBox>
              {/* 瘋殺錨點 */}
              <SOnsaleFirstPd
                id="dailysale_ad"
                onClick={() => {
                  clickHandler('dailysale');
                }}
              >
                <img
                  src={pd3[0] === undefined ? bannerOnsaleTitle : pd3[0].imgSrc}
                  alt="限時瘋殺"
                />
                <div className="onsale-container">
                  {Object.keys(onsaleFirstPd).length === 0 ? (
                    <>
                      <div className="px-1.5 md:p-0">
                        <Skeleton className="h-[30vw] max-h-[140px] w-full md:h-[236px] md:max-h-none lg:h-[196px]" />
                        <Skeleton
                          count={2}
                          className="mt-0 h-[16px] md:mt-2 md:h-[36px] lg:mt-1 lg:h-[28px]"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pd-img">
                        <img
                          src={onsaleFirstPd?.image}
                          alt={onsaleFirstPd?.name}
                        />
                      </div>
                      <p>{onsaleFirstPd.slogan}</p>
                      <div className="mt-1 flex items-end justify-center">
                        {onsaleFirstPd.price.origin !== '' && (
                          <SPdMkPrice>${onsaleFirstPd.price.origin}</SPdMkPrice>
                        )}

                        <SPdPrice>
                          {onsaleFirstPd.price.onsale.toLocaleString('zh-TW')}
                          {onsaleFirstPd.price.unit !== null && (
                            <span>/{onsaleFirstPd.price.unit}</span>
                          )}
                        </SPdPrice>
                      </div>
                    </>
                  )}
                </div>
              </SOnsaleFirstPd>

              {/* 右三卡 */}
              <SLeftBoxCampaign>
                {pd2.length === 0 ? (
                  <Skeleton className="h-[14.5vw] max-h-[66px] md:h-[107px] md:max-h-none lg:h-[90px]" />
                ) : (
                  <a href={pd2[0]?.url}>
                    <img src={pd2[0].imgSrc} alt={pd2[0].productName} />
                  </a>
                )}

                <span
                  className="laserBorder"
                  style={{ backgroundImage: `url(${laserLaserBgM})` }}
                ></span>

                {pd3.length === 0 ? (
                  <Skeleton className="h-[14.5vw] max-h-[66px] md:h-[107px] md:max-h-none lg:h-[90px]" />
                ) : (
                  <a href={pd3[1].url}>
                    <img src={pd3[1].imgSrc} alt={pd3[1].productName} />
                  </a>
                )}

                <span
                  className="laserBorder"
                  style={{ backgroundImage: `url(${laserLaserBgM})` }}
                ></span>

                {pd3.length === 0 ? (
                  <Skeleton className="h-[14.5vw] max-h-[66px] md:h-[107px] md:max-h-none lg:h-[90px]" />
                ) : (
                  <a href={pd3[2].url}>
                    <img src={pd3[2].imgSrc} alt={pd3[2].productName} />
                  </a>
                )}
              </SLeftBoxCampaign>
            </SLeftBox>

            {/* ============== 右區============== */}
            <SRightBox id="super">
              {/* 上輪播 */}
              {pd4.length === 0 ? (
                <Skeleton className="h-[35vw] max-h-[158px] w-full md:h-[258px] md:max-h-none lg:h-[221px]" />
              ) : (
                <SRightSwiper>
                  <Swiper
                    loop={pd4.length > 1}
                    allowTouchMove={pd4.length > 1}
                    modules={[Autoplay, Pagination]}
                    slidesPerView={'auto'}
                    spaceBetween={8}
                    pagination={{
                      el: '.right-pagination',
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                  >
                    {pd4.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <a href={item.url} className="block">
                            <img src={item.imgSrc} alt={item.productName} />
                            <SSliderTag>
                              <p>{item.productName}</p>
                              <img src={section1HotPreviewTag} alt="tag bg" />
                            </SSliderTag>
                          </a>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <SRightBoxSwiperPagination
                    className={`right-pagination ${pd4.length < 2 && 'hidden'}`}
                  ></SRightBoxSwiperPagination>
                </SRightSwiper>
              )}

              {/* 下二卡 */}
              <SRightBoxCampaign>
                <button
                  className="col-span-1"
                  id="gift3c_ad"
                  onClick={() => {
                    clickHandler('gift3c');
                  }}
                >
                  {pd3.length === 0 ? (
                    <Skeleton className="h-[14.5vw] max-h-[66px] !w-[42vw] max-w-[196px] md:h-[109px] md:max-h-none md:!w-[329px] md:max-w-none lg:h-[90px] lg:!w-[278px]" />
                  ) : (
                    <img src={pd3[3].imgSrc} alt={pd3[3].productName} />
                  )}
                </button>
                <span
                  className="laserBorder"
                  style={{ backgroundImage: `url(${laserLaserBgM})` }}
                ></span>
                <button
                  className="col-span-1"
                  id="n3cgift_ad"
                  onClick={() => {
                    clickHandler('n3cgift');
                  }}
                >
                  {pd3.length === 0 ? (
                    <Skeleton className="h-[14.5vw] max-h-[66px] !w-[42vw] max-w-[196px] md:h-[109px] md:max-h-none md:!w-[329px] md:max-w-none lg:h-[90px] lg:!w-[278px]" />
                  ) : (
                    <img src={pd3[4].imgSrc} alt={pd3[4].productName} />
                  )}
                </button>
              </SRightBoxCampaign>
            </SRightBox>

            {/* ============== 底區 ============== */}
            <SFooterBox id="couponpreview">
              <h4>限時優惠</h4>
              <SCouponGroup>
                <button
                  className="coupon-card"
                  onClick={() => {
                    clickHandler('coupon');
                  }}
                >
                  {pd5.length > 0 && <img src={pd5[0].imgSrc} alt="折價券" />}
                </button>
                <a
                  href={pd5.length > 1 ? pd5[1].url : ''}
                  className={`coupon-card ${
                    (pd5.length < 2 || pd5[1].url === '') &&
                    'pointer-events-none'
                  }`}
                >
                  {pd5.length > 1 && <img src={pd5[1].imgSrc} alt="限時優惠" />}
                </a>
              </SCouponGroup>
              <SMoreBtnBorder>
                <span
                  style={{ backgroundImage: `url(${laserLaserBgM})` }}
                ></span>
                <SMoreBtn href="">
                  <p>更多折價券</p>
                  <img src={bannerBtnRight} alt="arrow right" />
                </SMoreBtn>
              </SMoreBtnBorder>
            </SFooterBox>
          </SLaserBox>
        </SLaserBorder>
      </SCampaignBot>
    </SContainer>
  );
}

export default Discount;
