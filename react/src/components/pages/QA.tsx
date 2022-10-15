import React from 'react';
import { useLocation } from 'react-router-dom';
import { memo, FC } from 'react';
import { send } from '../../functions/contractFunction';
import { CommunityButton } from "../atoms/CommunityButton"
import { TagButton } from '../atoms/TagButton';
import { UserButton } from '../atoms/UserButton';
import { Answers } from '../db/answers/Answers';
import { Comments } from '../db/answers/Comments';

export const QA: FC = memo(() => {
  const location = useLocation();
  const q = location.state.question;
  console.log(q)

  return (
    <>
      <div className='max-w-screen-md mx-auto'>
        <div className='mx-5 border-x border-gray-300 shadow-x-md pb-10 pt-3'>
          <div className='rounded-xl border px-7 py-5 shadow-md mx-5 my-1 bg-white'>
            <div className=''>
              <div className='px-3 border-b border-gray-500 shadow-b-md'>
                <p className='text-lg font-medium'>{q.title}</p>
                <div className='flex items-center'>
                  <div className='flex text-xs text-slate-500 my-3'>
                    <div>{q.timestamp}</div>
                    <div className='mx-4'>views {q.views}</div>
                    <div>value {q.value}</div>
                  </div>
                  <div className='ml-auto my-1'>
                    <CommunityButton communityName={q.community} />
                  </div>
                </div>
              </div>
              <p className='px-3 text-sm text-neutral-800 mt-5 pb-8'>{q.container}</p>
            </div>
            <div className='flex'>
              <TagButton tags={q.tags} />
              <UserButton userAddress={q.user} />
            </div>
          </div>
          <div className='ml-10 my-5'>{q.answers} Answers</div>
          {Answers.map((answer) => (
            answer.targetId === q.id &&
            (<div className='rounded-xl border px-7 py-5 shadow-md mx-5 my-1 bg-white' key={answer.id}>
              <div className='text-xs text-slate-500 my-3'>
                <div>{answer.timestamp}</div>
              </div>
              <div className='px-3 border-b border-gray-500 shadow-b-md pb-3'>
                <p>{answer.container}</p>
                <div className='flex'>
                  <button 
                    className='ml-auto py-1'
                    onClick={() => {
                      send(answer.user, '0.00001');
                    }}>
                      <UserButton userAddress={answer.user} />
                  </button>
                </div>
              </div>
              {Comments.map((comment) => (
                comment.targetId === answer.id &&
                <div className='px-3 border-b border-gray-500 shadow-b-md'>
                  <div className='text-sm text-slate-700 my-2'>
                    <p>{comment.container}</p>
                    <div className='flex '>
                      <div className='ml-auto text-xs text-slate-500'>{comment.user} - {comment.timestamp}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className='text-xs text-slate-500 my-3'>Add a comment</div>
            </div>)
          ))}
        </div>
      </div>
    </>
  );
});
