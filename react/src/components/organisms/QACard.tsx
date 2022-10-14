import React from 'react';
import { memo, FC } from "react"
import { Questions } from "../db/questions/Questions"
import { CommunityButton } from "../atoms/CommunityButton"
import { TagButton } from '../atoms/TagButton';
import { UserButton } from '../atoms/UserButton';
import { Link } from "react-router-dom"

export const QACard: FC = memo(() => {
  return (
    <div className='max-w-screen-md mx-auto mt-3'>
      {Questions.map((question) => (
        <div className='rounded-xl border px-7 py-3 shadow-md mx-5 my-1 bg-white' key={question.id}>
          <Link to={`/questions/${question.id}`} state={{ question: question }}>
            <div className=''>
              <p className='text-lg font-medium'>{question.title}</p>
              {/* <p className='text-sm text-neutral-600'>{question.container}</p> */}
            </div>
            <div className='flex text-xs text-slate-500 my-1'>
              <div>{question.timestamp}</div>
              <div className='ml-4'>answers {question.answers}</div>
              <div className='mx-4'>views {question.views}</div>
              <div>value {question.value}</div>
            </div>
            <div className='flex'>
              <div className='flex items-center my-1'>
                <CommunityButton communityName={question.community} />
                <TagButton tags={question.tags} />
              </div>
              <UserButton userAddress={question.user} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
})