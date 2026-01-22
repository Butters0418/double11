// react 相關
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../../utils/getDataById';

// styles
import { SBlockTitle } from '../../../styles/style';
import { SBtnBorder, SBtnContent } from './style';

// images
import {
  titleThemeTitlePic2,
  laserBgShineM,
  laserLaserBgM,
} from '../../../assets/layout';

function Category() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 88);
    idData.length !== 0 && setCategoryData(idData);
  }, [newPdData]);

  return (
    <>
      <SBlockTitle>
        <img src={titleThemeTitlePic2} alt="分會場" />
      </SBlockTitle>
      {categoryData.length > 0 && (
        <div className="mx-auto min-h-[204px] max-w-[450px] px-2 md:max-w-[640px] lg:min-h-[315px] lg:max-w-[1240px] lg:px-[70px]">
          <div className="-m-1 flex flex-wrap justify-center lg:-m-4 ">
            {categoryData.map((item, index) => {
              return (
                <div className="w-1/5 p-1 lg:w-[14%] lg:p-4" key={index}>
                  <SBtnBorder
                    href={item.url}
                    style={{ backgroundImage: `url(${laserLaserBgM})` }}
                    className="group block"
                  >
                    <SBtnContent>
                      <img src={item.imgSrc} alt={item.productName} />
                      <span
                        style={{
                          backgroundImage: `url(${laserBgShineM})`,
                        }}
                      ></span>
                    </SBtnContent>
                  </SBtnBorder>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Category;
