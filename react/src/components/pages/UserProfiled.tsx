import React, { useState } from 'react';
import { memo, FC } from 'react';

import ProfileImg1 from '../../profile_img1.svg';
import ProfileImg2 from '../../profile_img2.svg';

export const UserProfiled: FC = memo(() => {
  const [switchProf, setswitchProf] = useState(true);
  return (
    <>
      <div className="w-3/4 h-1/4 mx-auto">
        <div className="flex">
          <button
            className="py-2 px-3 my-3 text-sm focus:bg-sky-400 rounded-md focus:text-white"
            onClick={() => {
              setswitchProf(true);
            }}
          >
            プロフィール
          </button>
          <button
            className="py-2 px-3 my-3 text-sm focus:bg-sky-400 rounded-md focus:text-white"
            onClick={() => {
              setswitchProf(false);
            }}
          >
            アクティビティ
          </button>
        </div>
        {switchProf && <img className="w-full" src={ProfileImg1} alt="" />}
        {!switchProf && (
          <div className="border-2 border-current text-sm rounded-md text-center bg-gray-50">
            <img className="w-3/4 mx-auto py-24" src={ProfileImg2} alt="" />
          </div>
        )}
      </div>
      {/* <div className="pt-12 px-12 text-center">
        <img className="w-full" src={ProfileImg1} alt="" />
        <img className="w-full" src={ProfileImg2} alt="" />
      </div> */}
    </>
  );
});
