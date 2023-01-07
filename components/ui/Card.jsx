import React from 'react';
import Link from 'next/link';

const Card = ({image,title,paragraph,tags}) => {
  return (
    <div className='flex flex-col gap-4'>
      <img src={image} alt="" />
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p>{paragraph}</p>
      <ul className='flex flex-col gap-1'>
        {
            tags.map((tag,index)=><li key={index}><Link href={tag.link} className='flex gap-2 items-center'><span class="material-symbols-outlined">
            chevron_right
            </span>{tag.title}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default Card