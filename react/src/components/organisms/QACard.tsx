import React from 'react';
import { memo, FC } from 'react';
import { Questions } from '../db/questions/Questions';
import { CommunityButton } from '../atoms/CommunityButton';
import { TagButton } from '../atoms/TagButton';
import { UserButton } from '../atoms/UserButton';
import { Link } from 'react-router-dom';

export const QACard: FC = memo(() => {
  return (
    <div className="max-w-screen-md mx-auto mt-3">
      {Questions.map((question) => (
        <div
          className="rounded-xl border px-7 py-3 shadow-md mx-5 my-1 bg-white"
          key={question.id}
        >
          <Link to={`/questions/${question.id}`} state={{ question: question }}>
            <div className="">
              <p className="text-lg font-medium">{question.title}</p>
              {/* <p className='text-sm text-neutral-600'>{question.container}</p> */}
            </div>
            <div className="flex text-xs text-slate-500 my-1 items-center">
              <div>{question.timestamp}</div>
              <div className="ml-4">answers {question.answers}</div>
              <div className="mx-4">views {question.views}</div>
              <button>
                <img
                  className="w-6 h-6"
                  src="https://cdn-icons-png.flaticon.com/512/2652/2652197.png"
                  alt="goodIcon"
                />
              </button>
              <p className="pl-2 font-bold">{question.value}</p>
              <div className='ml-auto p-2 bg-red-200 rounded-lg mt-3'>
                <p className="">{question.price} ETH</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center my-1">
                <CommunityButton communityName={question.community} />
                <TagButton tags={question.tags} />
              </div>
              <UserButton userAddress={question.user} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
});
