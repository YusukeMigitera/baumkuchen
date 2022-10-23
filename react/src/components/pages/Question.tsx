import React, { useEffect, useState, useContext, ChangeEvent } from 'react';
import { memo, FC } from 'react';
import { getBalance, deposit } from '../../functions/contractFunction';
// import { MyContext } from '../../App';
import { usePriceValue } from '../hooks/usePriceValue';



export const Question: FC = memo(() => {
  const [stock, setstock] = useState('');
  useEffect(() => {
    getBalance().then((res) => setstock(res!));
  }, []);

  const { priceValue, setPriceValue } = usePriceValue();
  const onChangePriceValue = (e: ChangeEvent<HTMLInputElement>) =>
    setPriceValue(Number(e.target.value) ?? priceValue);
  console.log(onChangePriceValue);

  return (
    <div className="flex justify-center items-center flex-col pt-12 mb-32">
      <div className='w-1/2 h-1/4'>
        <div className="w-full flex flex-col">
          <label className="font-semibold leading-none text-gray-700">Subject</label>
          <input type="text" className="leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-300 rounded"/>
        </div>
        <div className="w-full flex flex-col mt-8">
          <label className="font-semibold leading-none text-gray-700">Message</label>
          <textarea className="h-40 text-base leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-300 border-0 rounded"></textarea>
        </div>
        <div className="flex items-center justify-between mt-9 w-4/5 mx-auto">
          <button 
            className="font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
            onClick={() => deposit(String(priceValue))}>
              Send message
          </button>
          <div className="flex justify-center items-end gap-6">
            <input
              type="number"
              value={priceValue}
              onChange={onChangePriceValue}
              step="0.001"
              min="0.001"
              className="text-3xl font-bold bg-white border-solid border-2 border-black text-center p-2 w-36"
            />
            <p className="text-3xl font-bold">ETH</p>
          </div>
        </div>
      </div>
    </div>
  )
})