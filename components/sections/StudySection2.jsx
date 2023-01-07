import React from 'react';
import Wrapper from '../ui/Wrapper';
import Card from '../ui/Card';

const StudySection2 = () => {
  return (
    <div className='bg-gray-200'>
         <Wrapper>
        <h2 className='text-xl font-semibold'>Studying at Freie Universität</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            [
                {
                    image:'https://www.fu-berlin.de/_startseite-neu-rd/04-besonderes/foto-dhc.jpg?width=700',
                    title:'Leading in Research',
                    paragraph:'Freie Universität Berlin hosts four clusters of excellence that are funded through the German government\'s Excellence Strategy.',
                    tags:[
                        {
                          title: 'Clusters of Excellence',
                          link: 'clusters'
                        }
                      ]
                },
                {
                    image:'https://www.fu-berlin.de/_archiv/04-70jahre-exini-verbund/berlin-verbund.png?width=700',
                    title:'Berlin University Alliance',
                    paragraph:'The three major Berlin universities and Charité – Universitätsmedizin Berlin are creating an integrated research environment and are a driving force in further developing Berlin as a research hub.',
                    tags:[
                        {
                          title: 'wwwberlinuniversityalliancede',
                          link: 'wwwberlinuniversityalliancede'
                        }
                      ]
                },
                {
                    image:'https://www.fu-berlin.de/_startseite-neu-rd/04-besonderes/bologna.jpg?width=700',
                    title:'Una Europa',
                    paragraph:'Highly regarded universities from nine countries in the European Union (EU) have agreed to intensify their cross-border cooperation',
                    tags:[ { title: 'Una Europa', link: 'una' } ]
                }
            ].map((item,index)=><Card key={index} {...item}/>)
          }
        </div>
    </Wrapper>
    </div>
  )
}

export default StudySection2