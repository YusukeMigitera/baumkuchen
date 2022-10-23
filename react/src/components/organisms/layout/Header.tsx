import React from 'react';
import { memo, FC } from 'react';
import { Link } from 'react-router-dom';
import {
  connectWallet,
  checkIfWalletIsConnected,
} from '../../../functions/walletFunctions';
import { Communities } from '../../db/communities/Communities';

export const Header: FC = memo(() => {
  return (
    <header>
      <div className="h-28 bg-purple-800 px-12 pt-4 text-white">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-white text-2xl">Treat you</h1>
          </Link>
          <div className="ml-auto mr-8">
            {/* <input
              type="text"
              placeholder="Search"
              className="h-10 w-72 px-0 rounded-full px-4 mr-8 outline-none text-black"
            /> */}
            <button
              className="h-10 w-24 mr-6 border-2 border-current text-sm rounded-md"
              onClick={() => {
                connectWallet();
              }}
            >
              Login
            </button>
            <button className="h-10 w-24 border-2 border-current text-sm rounded-md">
              Create
            </button>
          </div>
        </div>
        <div className="flex pt-4">
          <Link to="/" className=" px-4 mr-6">
            <p>Questions</p>
          </Link>
          <Link to="/questions" className="px-4 mr-6">
            <p>Ask Question</p>
          </Link>
          <Link to="/answer" className="px-4 mr-6">
            <p>Answer</p>
          </Link>
          <Link to="/user" className="px-4">
            <p>Profile</p>
          </Link>
        </div>
      </div>
      {/* コミュニティヘッダー */}
      <div className="h-12 bg-white-800 px-12 shadow-md shadow-black-500/50">
        <div className="flex items-center gap-4 h-full">
          {Communities.map((comunity) => (
            <div key={comunity.name}>
              <button className="">
                <img
                  className="h-8 w-8 rounded-full bg-slate-400 mr-1 border-solid border-2 border-black rounded-full bg-slate-200"
                  src={comunity.imgUrl}
                  alt={comunity.name}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
});
