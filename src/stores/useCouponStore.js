// 元件說明:折價券 store
import { create } from 'zustand';
import dayjs from 'dayjs';

// fake data
import { mockCouponTopData, mockCouponBotData } from '../constants';

const useCouponStore = create((set, get) => ({
  couponLargeData: [],
  couponSmallData: [],

  getData: async () => {
    // 模擬取得資料
    await new Promise((resolve) => setTimeout(resolve, 500));

    const now = dayjs();

    // 折價券加上 timeStatus
    const addTimeStatus = (data) => {
      return data.map((item) => {
        const startDate = dayjs(item.UseStartDate);
        const endDate = dayjs(item.UseEndDate);

        let timeStatus = 'start';
        if (now.isBefore(startDate)) {
          timeStatus = 'ready';
        } else if (now.isAfter(endDate)) {
          timeStatus = 'end';
        }

        return { ...item, timeStatus };
      });
    };

    set({
      couponLargeData: addTimeStatus(mockCouponTopData),
      couponSmallData: addTimeStatus(mockCouponBotData),
    });
  },

  // 2. 領取單張折價券
  clickCoupon: (couponId) => {
    const updatedLarge = get().couponLargeData.map((item) =>
      item.discountPrice === couponId ? { ...item, couponGot: true } : item,
    );

    const updatedSmall = get().couponSmallData.map((item) =>
      item.discountPrice === couponId ? { ...item, couponGot: true } : item,
    );

    set({
      couponLargeData: updatedLarge,
      couponSmallData: updatedSmall,
    });
  },

  // 3. 一次領全部
  clickAllCoupon: () => {
    const setAllTrue = (array) =>
      array.map((item) =>
        item.timeStatus === 'start' ? { ...item, couponGot: true } : item,
      );

    set({
      couponLargeData: setAllTrue(get().couponLargeData),
      couponSmallData: setAllTrue(get().couponSmallData),
    });
  },
}));

export default useCouponStore;
