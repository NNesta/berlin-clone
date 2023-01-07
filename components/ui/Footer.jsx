import React from 'react';
import Link from 'next/link';
import Wrapper from './Wrapper';
import {ImFacebook2} from 'react-icons/im';
import {ImInstagram} from 'react-icons/im';
import {ImXing2} from 'react-icons/im';
import {ImYoutube} from 'react-icons/im';
import {BsTwitter} from 'react-icons/bs';
import {TfiGoogle} from 'react-icons/tfi';
import {FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
   <div className='bg-[#454545] text-white'>
    <Wrapper>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8'>
      <div>
      <h2 className='text-2xl opacity-60 mb-7'>Information for</h2>
      <ul>
        {
          [
            { title: 'Employees', link: 'employees' },
            {
              title: 'Prospective Students',
              link: 'prospective'
            },
            { title: 'Refugees', link: 'refugees' },
            {
              title: 'Students and Doctorate',
              link: 'students'
            },
            { title: 'Researchers', link: 'researchers' },
            { title: 'Teachers', link: 'teachers' },
            {
              title: 'Alumni and Supporters',
              link: 'alumni'
            },
            { title: 'Journalists', link: 'journalists' },
            {
              title: 'Continuing Education',
              link: 'continuing'
            }
          ].map((tag,index)=><li key={index}><Link href={tag.link} className='flex gap-2 items-center'><span class="material-symbols-outlined">
          chevron_right
          </span>{tag.title}</Link></li>)
        }
      </ul>
      </div>
      <div>
      <h2 className='text-2xl opacity-60 mb-7'>Service Navigation</h2>
      <ul>
        {
          [
            { title: 'Homepage', link: 'homepage' },
            { title: 'Index', link: 'index' },
            { title: 'Contact', link: 'contact' },
            { title: 'Legal Notice', link: 'legal' },
            { title: 'Data Protection Policy', link: 'data' },
            { title: 'Emergencies', link: 'emergencies' },
            {
              title: 'Accessibility Statement',
              link: 'accessibility'
            }
          ].map((tag,index)=><li key={index}><Link href={tag.link} className='flex gap-2 items-center'><span class="material-symbols-outlined">
          chevron_right
          </span>{tag.title}</Link></li>)
        }
      </ul>
      </div>
      <div>
      <h2 className='text-2xl opacity-60 mb-7'>Social Media</h2>
      <ul>
        {
          [
            { title: 'Facebook', link: 'facebook.com', icon:ImFacebook2 },
            { title: 'Twitter', link: 'twitter.com', icon:BsTwitter },
            { title: 'Instagram', link: 'instagram.com', icon:ImInstagram },
            { title: 'Youtube', link: 'youtube.com', icon:ImYoutube },
            { title: 'Google Plus', link: 'google.com', icon:TfiGoogle },
            { title: 'Xing', link: 'xing.com', icon:ImXing2 },
            { title: 'LinkedIn', link: 'linkedin.com', icon:FaLinkedinIn } 
          ].map((tag,index)=><li key={index} className='flex gap-2 items-center'><tag.icon/><Link href={tag.link} className='flex gap-2 items-center'> {tag.title}</Link></li>)
        }
        <li className='mt-8'>Information about Using Social Media</li>
      </ul>
      </div>
      <div>
      <h2 className='text-2xl opacity-60 mb-7'>This Page</h2>
      <ul>
        {
          [
            { title: 'Print', link: 'print' },
            { title: 'Subscribe RSSFeed', link: 'subscribe' },
            { title: 'Feedback', link: 'feedback' },
            { title: 'Deutsch', link: 'deutsch' }
          ].map((tag,index)=><li key={index}><Link href={tag.link} className='flex gap-2 items-center'><span class="material-symbols-outlined">
          chevron_right
          </span>{tag.title}</Link></li>)
        }
      </ul>
      </div>
      </div>
    </Wrapper>
   </div>
  )
}

export default Footer