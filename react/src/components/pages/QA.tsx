import React from 'react';
import { useLocation } from 'react-router-dom';
import { memo, FC } from 'react';
import { send } from '../../functions/contractFunction';

export const QA: FC = memo(() => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <button
        className="rounded-xl border px-7 py-3 shadow-md mx-5 my-1 bg-white"
        onClick={() => {
          send('0x903b2142a321029e92ACa621301917151d38A443', '0.00001');
        }}
      >
        送金
      </button>
    </div>
  );
});
