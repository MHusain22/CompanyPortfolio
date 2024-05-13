import React from 'react'

const ServicesList = ({Heading,Content,icons}) => {
  return (
    <div className='lists'>
        <img src={icons} alt="" />
        <h3>{Heading}</h3>
        <p>{Content}</p>
    </div>
  )
}

export default ServicesList