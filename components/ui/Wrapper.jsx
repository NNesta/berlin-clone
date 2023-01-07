import React from 'react'

const Wrapper = ({children,style}) => {
  return (
    <div className={`max-w-[1365px] p-5 mx-auto ${style}`}>
    {children}
    </div>
  )
}

export default Wrapper