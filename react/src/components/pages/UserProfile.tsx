import React, { useEffect, useState, useContext, ChangeEvent } from 'react';
import { memo, FC } from 'react';
import { getBalance } from '../../functions/contractFunction';
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
      <h2 className="text-2xl font-bold">TOTAL STOCK</h2>
      <div className="flex justify-center items-end pt-7 pb-12">
        <p className="text-2xl font-bold">{stock}</p>
        <p className='className="text-2xl font-bold pl-2'>ETH</p>
        <button
          id="stockSubmit"
          className="ml-7 p-2 border-solid border-2 border-black"
        >
          STOCK
        </button>
      </div>
      <h2 className="text-2xl font-bold">PRICE / BEST ANSWER</h2>
      <div className="flex justify-center items-end pt-7 pb-12 gap-6">
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
