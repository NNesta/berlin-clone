import React from 'react';
import Link from 'next/link';
import Wrapper from './Wrapper';

const Navbar = () => {
  return (
    <div className=''>
    <Wrapper>
        <div className='flex justify-between items-center'>
         <img className='hidden lg:block' src="/assets/images/logo.png" alt="" />
         <span className='block lg:hidden'>Freie Universität Berlin </span>
         <div className='hidden lg:flex flex-col items-end gap-4'>
        <ul className='flex gap-6 items-center'>
    {[
  { title: 'Homepage', link: 'homepage' },
  { title: 'Index', link: 'index' },
  { title: 'Contact', link: 'contact' },
  { title: 'Legal NoticeData', link: 'legal' },
  {
    title: 'Protection Policy',
    link: 'protection'
  },
  { title: 'Emergencies', link: 'emergencies' },
  {
    title: 'Accessibility Statement',
    link: 'accessibility'
  }
].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)}
        </ul>
        <div className='flex items-center gap-6'>
        <ul className='flex items-center gap-6'>
            {
                ['EN',
                        'Quicklinks',
                        'information for',  
                ].map((item,index)=><li className='flex items-center gap-3' key={index}>{item} <span class="material-symbols-outlined text-[#6B9E1F]">
                expand_more
                </span></li>)
            }
        </ul>
        <input className='border border-black' placeholder='search with google'/>
        </div>
         </div>
         <div className='flex lg:hidden items-center gap-6'>
         <span class="material-symbols-outlined text-[#6B9E1F]">
search
</span>
<span class="material-symbols-outlined text-[#6B9E1F]">
more_horiz
</span>
         </div>
        </div>
    </Wrapper>
    <div className='bg-gray-400'>
     <Wrapper>
        <span>

     FREIE UNIVERSITÄT BERLIN
        </span>
     </Wrapper>
    </div>
    <div className='bg-[#6B9E1F]'>
   <Wrapper style='text-white'>
    <div className='flex lg:hidden justify-between'>
        <span className='text-xl'>MENU</span>
   <span class="material-symbols-outlined">
menu
</span></div>
    <ul className='hidden lg:flex gap-6 items-center'>
        {[
  { title: 'ABOUT', link: 'about' },
  { title: 'EDUCATION', link: 'education' },
  { title: 'RESEARCH', link: 'research' },
  { title: 'DEPARTMENTS', link: 'departments' },
  { title: 'INTERNATIONAL', link: 'international' },
  {
    title: 'EXCELLENCE STRATEGY',
    link: 'excellence'
  }
].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)}
    </ul>
   </Wrapper>
    </div>
    </div>
  )
}

export default Navbar