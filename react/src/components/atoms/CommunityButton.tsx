import React, { FC, memo } from "react";
import { Communities } from "../db/communities/Communities"

type Props = {
  communityName: string;
}

export const CommunityButton:FC<Props> = memo((props) => {
  const { communityName } = props;
  return (
    <>
      {Communities.map(community => (
        communityName === community.name &&
        (<button className={`flex items-center ${community.bgColor} p-1 rounded mr-3`} key={community.name}>
          <img className='h-6 w-6 rounded-full bg-slate-400 mr-1' src={community.imgUrl} alt={community.name} />
          <p className='mx-1 text-xs font-medium'>{community.name}</p>
        </button>)
      ))}
    </>
  )
})