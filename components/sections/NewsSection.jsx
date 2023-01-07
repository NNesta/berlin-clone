import React from 'react';
import Wrapper from '../ui/Wrapper';
import NewsCard from '../ui/NewsCard';

const NewsSection = () => {
  return (
    <div className='bg-blue-200'>
        <Wrapper>
            <div className='flex gap-4 items-center mb-6'>
                <span className='w-44 h-12 bg-blue-600'/>
            <h1>University News</h1></div>
            <div className='grid lg:grid-cols-3 gap-6 items-start'>
          {
            [
                {
                image:'https://www.fu-berlin.de/en/campus-aktuell/_fotos-grafiken/fubis-1-2023.jpg?width=500',
                content:'International Summer and Winter University FUBiS at Freie Universität Berlin Starts New Year with an Expanded Range of Services',
                tag:'press release'
            },
                {
                image:'https://www.fu-berlin.de/campusleben/campus/2022/221214-rede-baer-ert/web-rede-susanne-baer.jpg?width=500',
                content:'In Defense of Academic Freedom: Professor Susanne Baer, Justice of the German Federal Constitutional Court, holds keynote speech as part of the festivities celebrating 74 years since the founding of Freie Universität Berlin',
                tag:'Featured Stories'
            },
                {
                image:'https://www.fu-berlin.de/campus-aktuell/_fotos-grafiken/Omar.jpg?width=500',
                content:'Literary Scholar and Linguistics Specialist Feryad Fazil Omar Receives Order of Merit',
                tag:'press release'
            },
        ].map((item,index)=><NewsCard key={index} {...item}/>)
          }
            </div>
            <div className='grid lg:grid-cols-4 mt-8 gap-6 items-start'>
          {
            [
              {  image: 'https://www.fu-berlin.de/campusleben/forschen/2022/221205-heyd-thermotherapie/biochemie.jpg?width=350',
                content: 'Why Does Heat Help Combat Tumors? Researchers from Freie Universität Berlin, Charité – Universitätsmedizin Berlin, and start-up Omiqa have teamed up to investigate how heat can be used to supplement tumor therapy',
                tag: 'Featured Stories'},
              {  image: 'https://www.fu-berlin.de/campus-aktuell/_fotos-grafiken/pm-2022-239.jpg?width=350',
                content: 'The Most Famous Premodern Text You Have Never Heard Of: Arts and Humanities Research Council and German Research Foundation give green light to project between Freie Universität Berlin and University of St. Andrews in Scotland',
                tag: 'Featured Stories'},
                {  image: 'https://www.fu-berlin.de/en/featured-stories/research/2022/jewish-names/yentl.jpg?width=350',
                content: 'What’s in a Name? Historian Johannes Czakai did research in Eastern Europe on the origin of German-sounding Jewish names  ',
                tag: 'press release'},
                {  image: 'https://www.fu-berlin.de/campusleben/campus/2022/221207-support_points-interview/Jonathan-Baer-cl.jpg?width=350',
                  content: '“No Problem Is Too Small” – Students who are experiencing difficulties or struggling with their mental health will soon be able to access help via a total of eight support.points at Freie Universität Berlin',
                  tag: 'Featured Stories'},
            ].map((item,index)=><NewsCard key={index} {...item}/>)
        }
        </div>
        <div className='flex justify-between'>
        <div className='flex items-center gap-6'>
            <span class="material-symbols-outlined bg-blue-600 rounded-full text-white">
chevron_right
</span>
<p>Press Releases in English</p>
            </div>
            <div className='flex items-center gap-6'>
            <span class="material-symbols-outlined bg-blue-600 rounded-full text-white">
chevron_right
</span>
<p>Featured Stories about Freie Universität Berlin</p>
            </div>
        </div>
        </Wrapper>
    </div>
  )
}

export default NewsSection