import React from 'react';
import { memo, FC } from 'react';

import ProfileImg1 from '../../profile_img1.svg';
import ProfileImg2 from '../../profile_img2.svg';

export const UserProfiled: FC = memo(() => {
  return (
    <>
      <div className="pt-12 px-12 text-center">
        <img className="w-full" src={ProfileImg1} alt="" />
        <img className="w-full" src={ProfileImg2} alt="" />
      </div>
    </>
  );
});
