import React, { FC, memo } from "react";
import { Users } from "../db/users/Users"

type Props = {
  userAddress: string;
}

export const UserButton:FC<Props> = memo((props) => {
  const { userAddress } = props;
  return (
    <>
      {Users.map(user => (
        userAddress === user.address &&
        (<div className='flex items-center space-x-3 ml-auto' key={user.address}>
          <img className='h-8 w-8 rounded-full bg-slate-400' src={user.imgUrl} alt="ETHGlobal" />
          <p className='text-xs text-slate-500'>{user.id}</p>
        </div>)
      ))}
    </>
  )
})