import React from 'react';
import { memo, FC } from 'react';
import { send } from '../../functions/contractFunction';
import { usePriceValue } from '../hooks/usePriceValue';

type Props = {
  togglePopup: Boolean;
  onClickToggle: () => void;
  sendUser: string;
  onClickBestAns: () => void;
};

export const Popup: FC<Props> = memo((props) => {
  const { togglePopup, onClickToggle, sendUser, onClickBestAns } = props;
  const { priceValue } = usePriceValue();
  console.log('popup ' + togglePopup);

  return (
    togglePopup && (
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bg-black bg-opacity-50 z-50 md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-6 text-center m-auto">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-white">
                Would you choose the best answer?
              </h3>
              <p className="dark:text-white mb-5 text-ms font-normal">
                Price {String(priceValue)} ETH
              </p>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                onClick={() => {
                  // send(sendUser, String(priceValue));
                  onClickToggle();
                  onClickBestAns();
                }}
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={onClickToggle}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
});
