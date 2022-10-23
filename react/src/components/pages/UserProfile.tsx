import React, { useEffect, useState, useContext, ChangeEvent } from 'react';
import { memo, FC } from 'react';
import { getBalance, deposit } from '../../functions/contractFunction';
// import { MyContext } from '../../App';
import { usePriceValue } from '../hooks/usePriceValue';

export const UserProfile: FC = memo(() => {
  // const ViewStock = async () => {
  //   // ここでデータが読み込めているかどうかは気にしなくて良い
  //   const stock = getBalance();

  //   // 読み込めている前提でコードを書ける
  //   return (
  //     <>
  //       <p> {stock}</p>
  //     </>
  //   );
  // };
  // const value = useContext(MyContext);
  const [stock, setstock] = useState('');
  // const [price, setPrice] = useState(bestAnsPrice);
  // ↓ コンポーネントがレンダリングされる度に、axios.get が実行される。
  // つまり、レンダリングごとにリクエストが発生する！
  useEffect(() => {
    getBalance().then((res) => setstock(res!));
  }, []);

  const { priceValue, setPriceValue } = usePriceValue();
  const onChangePriceValue = (e: ChangeEvent<HTMLInputElement>) =>
    setPriceValue(Number(e.target.value) ?? priceValue);
  console.log(onChangePriceValue);

  return (
    <div className="flex justify-center items-center flex-col pt-12">
      <div className='w-1/2 h-1/4'>
        <div className="w-full flex flex-col">
          <label className="font-semibold leading-none text-gray-700">Subject</label>
          <input type="text" className="leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-300 rounded"/>
        </div>
        <div className="w-full flex flex-col mt-8">
          <label className="font-semibold leading-none text-gray-700">Message</label>
          <textarea className="h-40 text-base leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-300 border-0 rounded"></textarea>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
              Send message
          </button>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold">TOTAL STOCK</h2>
      <div className="flex justify-center items-end pt-7 pb-12">
        <p className="text-2xl font-bold">{stock}</p>
        <p className='className="text-2xl font-bold pl-2'>ETH</p>
        <button
          id="stockSubmit"
          className="ml-7 p-2 border-solid border-2 border-black"
          onClick={() => deposit('0.01')}
        >
          STOCK
        </button>
      </div>
      <h2 className="text-2xl font-bold">PRICE / BEST ANSWER</h2>
      <div className="flex justify-center items-end pt-3 pb-12 gap-6">
        <input
          type="number"
          value={priceValue}
          onChange={onChangePriceValue}
          step="0.001"
          min="0.001"
          className="text-5xl font-bold bg-white border-solid border-2 border-black text-center p-3 w-48"
        />
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
