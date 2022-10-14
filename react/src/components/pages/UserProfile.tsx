import React, { useEffect } from 'react';
import { memo, FC } from 'react';
import { getBalance } from '../../functions/contractFunction';

export const UserProfile: FC = memo(() => {
  useEffect(() => {
    getBalance();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col pt-12">
      <h2 className="text-2xl font-bold">TOTAL STOCK</h2>
      <div className="flex justify-center items-end pt-7 pb-12">
        <p className="text-2xl font-bold">10</p>
        <p className='className="text-2xl font-bold pl-2'>ETH</p>
        <button
          id="stockSubmit"
          className="ml-7 p-2 border-solid border-2 border-black"
          // onClick={() => {
          //   getBalance();
          // }}
        >
          STOCK
        </button>
      </div>
      <h2 className="text-2xl font-bold">PRICE / BEST ANSWER</h2>
      <div className="flex justify-center items-end pt-7 pb-12 gap-6">
        {/* <input
          type="num"
          value="0.004"
          className="text-5xl font-bold bg-white border-solid border-2 border-black text-center p-3 w-40"
        /> */}
        <p className="text-3xl font-bold">ETH</p>
      </div>
      <button
        id="priceSubmit"
        className=" border-solid border-2 border-black p-2"
      >
        SUBMIT
      </button>
    </div>
  );
});
