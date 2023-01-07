import React from 'react';
import Wrapper from '../ui/Wrapper';
import Card from '../ui/Card';

const StudySection1 = () => {
  return (
    <Wrapper>
        <h2 className='text-xl font-semibold'>Studying at Freie Universität</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            [
                {
                    image:'https://www.fu-berlin.de/en/_startseite-neu-rd/08-studium-teaserliste/_bilder/ssc-2015-2_930.jpg?width=700',
                    title:'Advisory Services',
                    paragraph:'Information for students and applicants: +49 30 838-700 00, Email: info-service@fu-berlin.de',
                    tags:[
                        {
                          title: 'Student Services Center SSC',
                          link: 'student'
                        },
                        { title: 'Admissions', link: 'admissions' },
                        {
                          title: 'OnlineStudienfachwahlAssistenten OSA German',
                          link: 'onlinestudienfachwahlassistenten'
                        }
                      ]
                },
                {
                    image:'https://www.fu-berlin.de/en/_startseite-neu-rd/08-studium-teaserliste/_bilder/globus.jpg?width=700',
                    title:'Student Exchange',
                    paragraph:'What do I have to consider if I am currently taking part in an exchange program or doing an internship? The most important questions and answers for students from Freie Universität and exchange students.',
                    tags:[
                        {
                          title: 'Students from Freie Universitt',
                          link: 'students'
                        },
                        { title: 'Exchange students', link: 'exchange' }
                      ]
                },
                {
                    image:'https://www.fu-berlin.de/en/_startseite-neu-rd/08-studium-teaserliste/_bilder/portale.jpg?width=700',
                    title:'Important Dates and Portals',
                    paragraph:'',
                    tags:[
                        { title: 'Course Catalog', link: 'course' },
                        { title: 'Campus Management', link: 'campus' },
                        { title: 'Blackboard', link: 'blackboard' },
                        { title: 'Academic Calendar', link: 'academic' }
                      ]
                },
                {
                    image:'https://www.fu-berlin.de/_startseite-neu-rd/mehr-erfahren/_media/drs.jpg?width=700',
                    title:'Doctorate',
                    paragraph:'As the Center for Junior Researchers, Dahlem Research School (DRS) provides a framework for structured graduate education at Freie Universität.',
                    tags:[
                      { title: 'What you need to know', link: 'what' },
                      {
                        title: 'Admission to a Doctoral Program',
                        link: 'admission'
                      }
                    ]
                }
            ].map((item,index)=><Card key={index} {...item}/>)
          }
        </div>
    </Wrapper>
  )
}

export default StudySection1