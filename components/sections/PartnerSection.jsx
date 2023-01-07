import React from 'react';
import Wrapper from '../ui/Wrapper';

const PartnerSection = () => {
  return (
    <Wrapper>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 lg:w-[70%] justify-center items-center justify-items-center'>
    <img className='object-contain w-40' src="https://www.fu-berlin.de/en/_startseite-neu-rd/_banner/banner_familiengerechte-hochschule-rd.png?width=500" alt="" />
    <img className='object-contain w-40' src="https://www.fu-berlin.de/en/_startseite-neu-rd/_banner/german-u15-logo-rd.png?width=500" alt="" />
    <img className='object-contain w-40' src="https://www.fu-berlin.de/en/_startseite-neu-rd/_banner/verbund.png?width=500" alt="" />
    <img className='object-contain w-40' src="https://www.fu-berlin.de/en/_startseite-neu-rd/_banner/una-europa-logo-banner.png?width=500" alt="" />
        </div>
    </Wrapper>
  )
}

export default PartnerSection