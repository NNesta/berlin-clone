import React from 'react';
import Wrapper from '../ui/Wrapper';
import Card from '../ui/Card';

const DistinguishSection = () => {
  return (
    <div className='bg-gray-200'>
   <Wrapper>
    <div className='flex flex-col gap-6'>
        <h2 className='text-2xl font-semibold'>What Distinguishes Us</h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {
        [
            {
                image:'https://www.fu-berlin.de/presse/publikationen/tsp/2017/tsp-april-2017/alte-raetsel-im-visier-moderner-technik/seite-1-photo-Louvre-box.jpg?width=700',
                title:'Leader in Teaching and Research',
                paragraph:'Freie Universität Berlin offers more than 150 degree programs. It is one of the leading research universities in Germany.',
                tags:[
                    {
                      title: '12 Academic Departments and 4 Central Institutes',
                      link: '12'
                    },
                    { title: 'Research Profile', link: 'research' }
                  ]
            },
            {
                image:'https://www.fu-berlin.de/_startseite-neu-rd/06-was-uns-auszeichnet/_bilder/international_.jpg?width=700',
                title:'International',
                paragraph:'An international outlook has defined the research activities and academic life at Freie Universität Berlin ever since the university was founded.',
                tags:[
                    { title: 'Liaison Offices', link: 'liaison' },
                    {
                      title: 'Strategic Partners',
                      link: 'strategic'
                    },
                    {
                      title: 'International in Education and Research',
                      link: 'international'
                    }
                  ]
            },
            {
                image:'https://www.fu-berlin.de/_startseite-neu-rd/06-was-uns-auszeichnet/_bilder/vielfaeltig.jpg?width=700',
                title:'Digital',
                paragraph:'E-learning has long been an integral part of modern teaching, learning, and examinations at Freie Universität Berlin. The university has also been committed to open access publishing for many years.',
                tags:[
                    {
                      title: 'Digital Resources for Teaching and Learning',
                      link: 'digital'
                    },
                    { title: 'Open Access', link: 'open' },
                    {
                      title: 'Center for Digital Systems',
                      link: 'center'
                    }
                  ]
            },
            {
                image:'https://www.fu-berlin.de/_startseite-neu-rd/06-was-uns-auszeichnet/_bilder/nachhaltig.jpg?width=700',
                title:'Sustainability',
                paragraph:'',
                tags:[
                    {
                      title: 'Sustainability',
                      link: 'sustainability'
                    },
                    {
                      title: 'SUSTAIN IT Initiative for Sustainability  Climate Protection',
                      link: 'sustain'
                    }
                  ]
            },
        ].map((item, index) =><Card key={index} {...item}/>)
      }
    </div>
    </div>
   </Wrapper>
    </div>
  )
}

export default DistinguishSection