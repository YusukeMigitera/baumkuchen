import React from 'react';
import { useLocation } from 'react-router-dom';
import { memo, FC } from "react"

export const QA: FC = memo(() => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <p>個別QA画面</p>
    </div>
  )
})