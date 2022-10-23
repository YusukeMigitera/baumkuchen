import React, { useEffect, useState, useContext, ChangeEvent } from 'react';
import { memo, FC } from 'react';
// import { getBalance, deposit } from '../../functions/contractFunction';
// import { MyContext } from '../../App';
// import { usePriceValue } from '../hooks/usePriceValue';

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
  // const [stock, setstock] = useState('');
  // const [price, setPrice] = useState(bestAnsPrice);
  // ↓ コンポーネントがレンダリングされる度に、axios.get が実行される。
  // つまり、レンダリングごとにリクエストが発生する！
  // useEffect(() => {
  //   getBalance().then((res) => setstock(res!));
  // }, []);

  // const { priceValue, setPriceValue } = usePriceValue();
  // const onChangePriceValue = (e: ChangeEvent<HTMLInputElement>) =>
  //   setPriceValue(Number(e.target.value) ?? priceValue);
  // console.log(onChangePriceValue);

  return (
    <div className='w-2/3 h-1/4 mx-auto'>
      <div className='flex'>
        <button className='py-2 px-3 my-3 text-sm focus:bg-sky-400 rounded-md focus:text-white'>プロフィール</button>
        <button className='py-2 px-3 my-3 text-sm focus:bg-sky-400 rounded-md focus:text-white'>アクティビティ</button>
      </div>
    </div>
  );
});
