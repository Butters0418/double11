import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { SCounterTitle, SCountdownContainer, SNumContainer } from './style';

import { bannerCountdownBg } from '../../../assets/layout';

const timeData = [
  {
    endTime: '2026-01-31 23:59:59',
    titleText: '預熱活動結束倒數',
  },
  {
    endTime: '2026-02-08 23:59:59',
    titleText: '暖身活動結束倒數',
  },
  {
    endTime: '2026-11-10 23:59:59',
    titleText: '雙11活動結束倒數',
  },
];

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    saleText: '超早鳥預購優惠倒數',
  });

  useEffect(() => {
    const checkTargetTime = () => {
      const today = dayjs();
      const endTimeTarget = timeData.find((item) =>
        today.isBefore(dayjs(item.endTime)),
      );

      if (endTimeTarget) {
        setCountdown((prev) => ({
          ...prev,
          saleText: endTimeTarget.titleText,
        }));
        startCountDown(endTimeTarget.endTime);
      }
    };

    const startCountDown = (endTime) => {
      const intervalId = setInterval(() => {
        const nowSecond = dayjs(endTime).unix() - dayjs().unix();

        if (nowSecond >= 0) {
          const countDay = Math.floor(nowSecond / 86400);
          const countHour = Math.floor(nowSecond / 3600) % 24;
          const countMin = Math.floor(nowSecond / 60) % 60;
          const countSecond = nowSecond % 60;

          setCountdown({
            days: countDay,
            hours: countHour < 10 ? '0' + countHour : countHour,
            minutes: countMin < 10 ? '0' + countMin : countMin,
            seconds: countSecond < 10 ? '0' + countSecond : countSecond,
            saleText: countdown.saleText,
          });
        } else {
          clearInterval(intervalId);
          checkTargetTime();
        }
      }, 1000);

      return () => clearInterval(intervalId);
    };

    checkTargetTime();
  }, []);

  return (
    <div className="absolute left-1/2 top-0 z-30 m-auto flex w-[270px] -translate-x-1/2 flex-col items-center justify-center pt-3 md:pt-6 lg:ml-[445px]">
      <SCounterTitle>{countdown.saleText}</SCounterTitle>
      <SCountdownContainer>
        <img src={bannerCountdownBg} alt="倒數計時" />
        {/* 時間 */}
        <SNumContainer>
          <h3>{countdown.days}</h3>
          <p className="mr-1 md:mr-1.5">天</p>
          <h3 className="w-[20px] md:w-[30px]">{countdown.hours}</h3>
          <p className="mr-1 md:mr-1.5">時</p>
          <h3 className="w-[20px] md:w-[30px]">{countdown.minutes}</h3>
          <p className="mr-1 md:mr-1.5">分</p>
          <h3 className="w-[20px] md:w-[30px]">{countdown.seconds}</h3>
          <p>秒</p>
        </SNumContainer>
      </SCountdownContainer>
    </div>
  );
}

export default Countdown;
