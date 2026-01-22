// 必搶神券
import tw, { styled } from 'twin.macro';

import { useState } from 'react';

// swiper
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// modal
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// stores
import useCouponStore from '../../../stores/useCouponStore';

// utils

// components
import { SBlockTitle } from '../../../styles/style';
import {
  SLaserBorder,
  SLaserBox,
  SCouponContainerBorder,
  SCouponContainer,
  SCouponTop,
  SCouponBot,
  SCoupon1,
  SCoupon2,
  SCouponInfo1,
  SCouponInfo2,
  SCouponPagination,
  SGetAllBtnBorder,
  SGetAllBtn,
  SMoreBtnBorder,
  SMoreBtn,
} from './style';

// images
import {
  titleThemeTitlePic7,
  laserLaserBgM,
  laserLaserBgL,
  section5BoxBg,
  section5Coupon1Pc,
  section5Coupon1Mb,
  section5Coupon2Pc,
  section5Coupon2Mb,
  section5IonTime,
  section5Hand,
  section5ArrowRight,
  section5CouponAccept,
  section5LaserTop,
} from '../../../assets/layout';

const MyDialog = styled(Dialog)`
  .MuiPaper-root {
    ${tw`m-2`}
  }
  .MuiDialogContent-root {
    ${tw`p-2 md:p-3`}
  }
`;

function Coupons() {
  const { couponLargeData, couponSmallData, clickCoupon, clickAllCoupon } =
    useCouponStore();
  const [popupText, setPopupText] = useState('折價券已歸戶'); // 燈箱文字
  const [open, setOpen] = useState(false); // 燈箱開關
  const [svgKey, setSvgKey] = useState(Date.now()); // svg key 值方便重新渲染
  // 燈箱開
  const handleClickOpen = () => {
    setSvgKey(Date.now());
    setOpen(true);
  };

  // 燈箱關
  const handleClose = () => {
    setOpen(false);
  };

  // 領取折價券
  const clickHandler = (couponId) => {
    clickCoupon(couponId);
    setPopupText('折價券已歸戶');
    handleClickOpen();
  };

  // 可領的是否都已領取
  const allCouponGot = [...couponLargeData, ...couponSmallData]
    .filter((item) => item.timeStatus === 'start')
    .every((item) => item.couponGot);

  return (
    <div
      id="coupon"
      data-title="必搶神券"
      className="min-h-[594px] md:min-h-[527px] lg:min-h-[703px]"
    >
      <SBlockTitle>
        <img src={titleThemeTitlePic7} alt="必搶神券" />
      </SBlockTitle>
      <div className="mx-auto max-w-[450px] md:max-w-[720px] lg:max-w-[1240px]">
        <img src={section5LaserTop} alt="laser top" />
        <SLaserBorder>
          <span
            className="shiftbg"
            style={{
              backgroundImage: `url(${laserLaserBgL})`,
            }}
          />

          <SLaserBox style={{ backgroundImage: `url(${section5BoxBg})` }}>
            <SCouponContainerBorder
              style={{ backgroundImage: `url(${laserLaserBgL})` }}
            >
              <SCouponContainer>
                {/* 全站折價券 */}
                <SCouponTop>
                  {couponLargeData.length !== 0 &&
                    couponLargeData.map((item, index) => {
                      // 折價券類型(金額、折數)
                      const couponType =
                        item.SendAmtMode === 'Amount'
                          ? `<span>$</span>${item.SendAmt}`
                          : `${
                              (1 - item.SendAmt).toString().split('.')[1]
                            }<span>折</span>`;

                      // button type
                      let btnText = '登入領取';
                      let btnClass = '';

                      // 按鈕判斷
                      if (item.timeStatus === 'ready') {
                        // 未開始
                        btnText = '敬請期待';
                        btnClass = 'pointer-events-none brightness-75';
                      } else if (item.timeStatus === 'end') {
                        // 活動結束
                        btnText = '活動結束';
                        btnClass = 'pointer-events-none brightness-75';
                      } else {
                        // 活動進行中
                        if (item.couponGot) {
                          btnText = '已領取';
                          btnClass = 'pointer-events-none brightness-75';
                        } else {
                          btnText = '立即領取';
                          btnClass = '';
                        }
                      }

                      return (
                        <SCoupon1 key={item.discountPrice}>
                          <SCouponInfo1>
                            <p
                              className="left"
                              dangerouslySetInnerHTML={{
                                __html: item.marketPrice,
                              }}
                            ></p>
                            <div className="mid">
                              <p>{item.productName}</p>
                              <h4
                                dangerouslySetInnerHTML={{
                                  __html: couponType,
                                }}
                              ></h4>
                            </div>
                            <div className="right">
                              <button
                                className={`duration-200 ${btnClass}`}
                                onClick={() => {
                                  clickHandler(item.discountPrice);
                                }}
                              >
                                <span
                                  className="borderbg"
                                  style={{
                                    backgroundImage: `url(${laserLaserBgM})`,
                                  }}
                                />
                                <p>{btnText}</p>
                              </button>
                            </div>
                          </SCouponInfo1>
                          <h5>
                            <img src={section5IonTime} alt="icon clock" />
                            {`${item.UseStartDate} ~ ${item.UseEndDate}`}
                          </h5>
                          <picture>
                            <source
                              srcSet={section5Coupon1Pc}
                              media="(min-width: 1240px)"
                            />
                            <img src={section5Coupon1Mb} alt="coupon1 bg" />
                          </picture>
                        </SCoupon1>
                      );
                    })}
                </SCouponTop>
                {/* 品類折價券 */}
                <SCouponBot>
                  {couponSmallData.length !== 0 && (
                    <>
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={4}
                        pagination={{
                          el: '.coupon-pagination',
                          clickable: true,
                        }}
                        breakpoints={{
                          1240: {
                            spaceBetween: 6,
                          },
                        }}
                      >
                        {couponSmallData.map((item, index) => {
                          // 折價券類型(金額、折數)
                          const couponType =
                            item.SendAmtMode === 'Amount'
                              ? `<span>$</span>${item.SendAmt}`
                              : `${
                                  (1 - item.SendAmt).toString().split('.')[1]
                                }<span>折</span>`;

                          // button type
                          let btnText = '登入領取';
                          let btnClass = '';

                          // 按鈕判斷
                          if (item.timeStatus === 'ready') {
                            // 未開始
                            btnText = '敬請期待';
                            btnClass = 'pointer-events-none brightness-75';
                          } else if (item.timeStatus === 'end') {
                            // 活動結束
                            btnText = '活動結束';
                            btnClass = 'pointer-events-none brightness-75';
                          } else {
                            // 活動進行中
                            if (item.couponGot) {
                              btnText = '已領取';
                              btnClass = 'pointer-events-none brightness-75';
                            } else {
                              btnText = '立即領取';
                              btnClass = '';
                            }
                          }

                          return (
                            <SwiperSlide
                              className="sm:max-w-auto !w-[calc(90vw-24px)] max-w-[412px] sm:!w-[318px] lg:!w-[380px]"
                              key={item.discountPrice}
                            >
                              <SCoupon2>
                                <SCouponInfo2>
                                  <p
                                    className="left"
                                    dangerouslySetInnerHTML={{
                                      __html: item.marketPrice,
                                    }}
                                  ></p>
                                  <div className="mid">
                                    <p>{item.productName}</p>
                                    <h4
                                      dangerouslySetInnerHTML={{
                                        __html: couponType,
                                      }}
                                    ></h4>
                                  </div>
                                  <div className="right">
                                    <button
                                      className={`duration-200 ${btnClass}`}
                                      onClick={() => {
                                        clickHandler(item.discountPrice);
                                      }}
                                    >
                                      <span
                                        className="borderbg"
                                        style={{
                                          backgroundImage: `url(${laserLaserBgM})`,
                                        }}
                                      />
                                      <p>{btnText}</p>
                                    </button>
                                  </div>
                                </SCouponInfo2>
                                <h5>
                                  <img src={section5IonTime} alt="icon clock" />
                                  {item.UseEndDate} 到期
                                </h5>
                                <picture>
                                  <source
                                    srcSet={section5Coupon2Pc}
                                    media="(min-width: 1240px)"
                                  />
                                  <img
                                    src={section5Coupon2Mb}
                                    alt="coupon1 bg"
                                  />
                                </picture>
                              </SCoupon2>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                      <SCouponPagination className="coupon-pagination"></SCouponPagination>
                    </>
                  )}
                </SCouponBot>
              </SCouponContainer>
            </SCouponContainerBorder>
            <div className="mt-4 flex  flex-col items-center justify-center gap-y-3 md:flex-row md:gap-x-3 lg:mt-6 lg:gap-x-6">
              {/* 一鍵全領按鈕 */}
              <SGetAllBtnBorder>
                <span
                  className="borderbg"
                  style={{
                    backgroundImage: `url(${laserLaserBgM})`,
                  }}
                />
                <SGetAllBtn
                  className={`${
                    allCouponGot && 'pointer-events-none brightness-75'
                  }`}
                  onClick={() => {
                    clickAllCoupon();
                    setPopupText('折價券已領取');
                    handleClickOpen();
                  }}
                >
                  <h3>{allCouponGot ? '已領取' : '一鍵領取'}</h3>
                  <p>限量用完為止</p>
                  <img src={section5Hand} alt="hand" />
                </SGetAllBtn>
              </SGetAllBtnBorder>
              {/* 看更多 */}
              <SMoreBtnBorder>
                <span
                  className="borderbg"
                  style={{
                    backgroundImage: `url(${laserLaserBgM})`,
                  }}
                />
                <SMoreBtn href="">
                  <p>更多折價券</p>
                  <img src={section5ArrowRight} alt="arrow right" />
                </SMoreBtn>
              </SMoreBtnBorder>
            </div>
          </SLaserBox>
        </SLaserBorder>
      </div>

      <MyDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogContent className="text-center">
          <div className="text-right">
            <IconButton aria-label="delete" size="middle" onClick={handleClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>

          <div className="mt-2 w-[320px] max-w-[500px] gap-2 pb-6 text-center  sm:w-[500px]">
            {open && (
              <img
                key={svgKey}
                src={`${section5CouponAccept}?time=${new Date().getTime()}`}
                className="mx-auto h-[200px] w-[200px] duration-200"
              />
            )}

            <p className="text- text-2xl font-bold">{popupText}</p>
          </div>

          <div className="mt-2">
            <Button variant="outlined" onClick={handleClose}>
              關閉
            </Button>
          </div>
        </DialogContent>
      </MyDialog>
    </div>
  );
}

export default Coupons;
