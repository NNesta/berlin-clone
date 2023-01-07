import React from 'react'

const NewsCard = ({image,content,tag}) => {
  return (
    <div className='flex flex-col gap-6 bg-gray-100 '>
    <img className='object-contain' src={image} alt="" />
    <div className='flex p-2'>
        <div className=''>
    <h2 className='text-xl text-blue-500'>{content}</h2>
    <p>{tag}</p>
    </div>
    <span class="material-symbols-outlined text-blue-500">
arrow_forward_ios
</span></div>
    </div>
  )
}

export default NewsCard