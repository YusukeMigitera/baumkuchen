import React, { FC, memo } from "react";

type Props = {
  tags: Array<string>;
}

export const TagButton:FC<Props> = memo((props) => {
  const { tags } = props;
  return (
    <>
      <div className='flex my-2'>
        {tags.map((tag) => (
          <div className='bg-gray-200 px-2 py-1 rounded mx-1' key={tag}>
            <p className='text-xs'>{tag}</p>
          </div>
        ))}
      </div>
    </>
  )
})