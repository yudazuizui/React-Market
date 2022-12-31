/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import { Carousel } from 'antd'

// eslint-disable-next-line react/display-name
const Swiper = memo((props) => {
  const contentStyle = {
    height: '160px',
    width: '100%',
    background: '#364d79'
  }
  return (
    <div>
      <Carousel effect="fade" autoplay="false">
        {props.lists.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} style={contentStyle} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
})

export default Swiper
