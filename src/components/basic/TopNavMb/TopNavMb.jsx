// 元件說明:手機版置滑動錨點
import { useEffect, useRef, memo } from 'react';

// packages
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// custom hooks & utils
import scrollToElement from '../../../utils/scrollToElement';

// style
import { SNavContainer, SListContainer, SHashLink } from './style';

// image
import { laserBgShineM } from '../../../assets/layout';

function TopNavMb({ hashContainer, currentContainer }) {
  const ul = useRef(null); // 選單本身
  useEffect(() => {
    const currentNav = [...document.querySelectorAll('[data-topnav]')].find(
      (item) => {
        return currentContainer === item.dataset.topnav;
      },
    );
    if (currentNav !== undefined) {
      ul.current.scrollLeft = currentNav.offsetLeft;
    }
  }, [currentContainer]);
  return (
    <SNavContainer className="no-scrollbar" ref={ul}>
      {hashContainer.length == 0 ? (
        <Skeleton
          count={3}
          className="h-full w-1/3"
          containerClassName="p-1 flex justify-center gap-x-2 item-center h-full"
        />
      ) : (
        <SListContainer>
          {hashContainer.map((item) => {
            return (
              <SHashLink key={item.id} data-topnav={item.id}>
                <button
                  style={{
                    backgroundImage:
                      currentContainer === item.id
                        ? `url(${laserBgShineM})`
                        : 'none',
                  }}
                  className={`${
                    currentContainer === item.id
                      ? 'font-bold text-[#black] duration-100'
                      : 'text-white'
                  }`}
                  onClick={() => {
                    scrollToElement(item.id);
                  }}
                >
                  {item.dataset.title}
                </button>
              </SHashLink>
            );
          })}
        </SListContainer>
      )}
    </SNavContainer>
  );
}

export default memo(TopNavMb);
