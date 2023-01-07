import React from 'react';
import Link from 'next/link';
import Wrapper from '../ui/Wrapper';

const GlanceSection = () => {
  return (
    <Wrapper>
        <div className='grid lg:grid-cols-2 gap-6'>
<div className='flex flex-col gap-4'>
    <h1 className='text-4xl text-green-700'>AT A GLANCE</h1>
    <p>Freie Universität Berlin has been one of the German universities of excellence since 2007. The university is leading in research and teaching and has many regional and international partners.</p>
    <ul className='flex flex-col gap-1'>
        {
            [
                { title: 'Facts and Figures', link: 'facts' },
                { title: 'Cooperation', link: 'cooperation' },
                { title: 'Founding History', link: 'founding' }
              ].map((tag,index)=><li key={index}><Link href={tag.link} className='flex gap-2 items-center'><span class="material-symbols-outlined">
            chevron_right
            </span>{tag.title}</Link></li>)
        }
      </ul>
</div>
<div className='flex flex-col gap-4'>
        <h1 className='text-4xl text-green-700'>PROFESSION AND CAREER</h1>
        <ul className='flex flex-col gap-1'>
        {
            [
                { title: 'Job Offers', link: 'job' },
                {
                  title: 'Continuing Education',
                  link: 'continuing'
                },
                { title: 'Staff Development', link: 'staff' }
              ].map((tag,index)=><li key={index}><Link href={tag.link} className='flex gap-2 items-center'><span class="material-symbols-outlined">
            chevron_right
            </span>{tag.title}</Link></li>)
        }
      </ul>
</div>
        </div>
    </Wrapper>
  )
}

export default GlanceSection